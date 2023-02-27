import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader, Panel } from 'rsuite';
import MainPageLayout from '../components/MainPageLayout';
import { ApiGetMedia } from '../components/misc/config';

const Tv = () => {

  const [tv_show, settv_Show] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    ApiGetMedia(`tv/${id}`).then(r => settv_Show(r))
    setIsLoading(false)
  }, [id])

  console.log(tv_show);
  return (
    <MainPageLayout>
      {isLoading && !tv_show &&
        <div className='h-full flex justify-center items-center' >
          <Loader size='lg' />
        </div>}

      {!isLoading && tv_show &&
        <div className='pt-10 md:flex justify-evenly '  >
          <div className='mb-5 md:mb-0 flex md:flex-none justify-center ' >
            <img src={`https://image.tmdb.org/t/p/original${tv_show.poster_path}`}
              className="object-fill rounded-lg h-96 "
              alt="poster" />
          </div>

          <div className=' mb-5 md:w-2/3 bg-gray-100 ' >
            <Panel bordered shaded   >
              <div className='flex flex-col h-96'>
                <h4 className='mb-3 text-center text-blue-900 ' >
                  {tv_show.name ? tv_show.name : tv_show.title}
                </h4>

                <p className='mb-3 text-center italic text-blue-900 ' >
                  "{tv_show.tagline}"
                </p>

                <div className='mb-1' >
                  <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Last Aired Date:</span>
                    {' '}{tv_show.last_air_date}</p>
                </div>

                <div className='mb-1' >
                  <p className='italic text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Genres:</span>{' '}
                    {tv_show.genres ? tv_show.genres.map((item) => ` ${item.name}, `) : "Unknown"}</p>
                </div>

                <div className='' >
                  <p className='text-b text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Number of Seasons:</span>{' '}
                    {tv_show.number_of_seasons}</p>
                </div>
                <div className='' >
                  <p className='text-b text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Number of Episodes:</span>{' '}
                    {tv_show.number_of_episodes}</p>
                </div>
                <div className='' >
                  <p className='text-b text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Overview:</span>{' '}
                    {tv_show.overview}</p>
                </div>
              </div>
            </Panel>
          </div>
        </div>}
    </MainPageLayout>
  )
}

export default Tv