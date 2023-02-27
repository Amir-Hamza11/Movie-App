import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader, Panel } from 'rsuite';
import MainPageLayout from '../components/MainPageLayout';
import { ApiGetMedia } from '../components/misc/config';

const Movie = () => {

  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    ApiGetMedia(`movie/${id}`).then(r => setMovie(r))
    setIsLoading(false)
  }, [id])

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  console.log(movie);

  return (
    <MainPageLayout>
      {isLoading && !movie &&
        <div className='h-full flex justify-center items-center' >
          <Loader size='lg' />
        </div>}
        
      {!isLoading && movie &&
        <div className='pt-10 md:flex justify-evenly '  >
          <div className='mb-5 md:mb-0 flex md:flex-none justify-center ' >
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className="object-fill rounded-lg h-96 "
              alt="poster" />
          </div>


          <div className=' mb-5 md:w-2/3 bg-gray-100 mx-5 md:mx-0' >
            <Panel bordered shaded   >
              <div className='flex flex-col h-96'>
                <h4 className='mb-3 text-center text-blue-900 ' >
                  {movie.name ? movie.name : movie.title}</h4>

                <p className='mb-3 text-center italic text-blue-900 ' >
                  "{movie.tagline}"
                </p>

                <div className='mb-1' >
                  <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Release Date:</span>{' '}
                    {movie.release_date}</p>
                </div>

                <div className='mb-1' >
                  <p className='italic text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Genres:</span>{' '}
                    {movie.genres ? movie.genres.map((item) => ` ${item.name}, `) : "Unknown"}</p>
                </div>

                <div className='mb-1' >
                  <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Status:</span>{' '}
                    {movie.status}</p>
                </div>

                <div className='mb-1' >
                  <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Run Time:</span>{' '}
                    {`${hours}h ${minutes}m`}</p>
                </div>

                <div className='' >
                  <p className='text-b text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Overview:</span>{' '}
                    {movie.overview}</p>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      }
    </MainPageLayout>
  )
}


export default Movie