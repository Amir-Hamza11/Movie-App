import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader} from 'rsuite';
import MainPageLayout from '../components/MainPageLayout';
import { ApiGetMedia, ApiGetVideos } from '../components/misc/config';

const Tv = () => {

  const [tv_show, settv_Show] = useState([])
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    ApiGetMedia(`tv/${id}`).then(r => settv_Show(r))
    ApiGetVideos(`tv/${id}`).then(r => setVideos(r))

    setIsLoading(false)
  }, [id])

  // console.log(videos);
  return (
    <MainPageLayout>
      {isLoading && !tv_show &&
        <div className='h-full flex justify-center items-center' >
          <Loader size='lg' />
        </div>}

      {!isLoading && tv_show &&

        <>
          <section className='h-screen' >
            <div className='h-screen relative ' >
              <img src={`https://image.tmdb.org/t/p/original${tv_show.backdrop_path}`}
                className='h-2/3 w-full mx-auto  object-cover  rounded-b-lg '
                alt="backdrop" />

              <img src={`https://image.tmdb.org/t/p/original${tv_show.poster_path}`}
                className="object-fill rounded-xl h-96 shadow-lg
                 shadow-slate-400 absolute bottom-11 left-2 md:left-5 "
                alt="poster" />
            </div>
          </section>

          <section className='w-full flex flex-wrap justify-evenly ' >
            {videos.results?.map((item) => {
              return <div key={item.id} >
                <iframe
                  className='w-full md:w-96 h-60 mb-3'
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen>
                </iframe>
              </div>
            })}

          </section>
        </>

      }
    </MainPageLayout>
  )
}

export default Tv