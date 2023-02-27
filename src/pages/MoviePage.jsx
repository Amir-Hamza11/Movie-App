import React, { useEffect, useState } from 'react'
import { Loader } from 'rsuite'
import MainPageLayout from '../components/MainPageLayout'
import { ApiGetMedia } from '../components/misc/config'
import MovieDisplay from '../components/movies/MovieDisplay'

const MoviePage = () => {

  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ApiGetMedia('movie/now_playing').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })

  }, [])

  const nowPlaying = () => {
    ApiGetMedia('movie/now_playing').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })
  }
  const popular = () => {
    ApiGetMedia('movie/popular').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })
  }
  const topRated = () => {
    ApiGetMedia('movie/top_rated').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })
  }
  const upcoming = () => {
    ApiGetMedia('movie/upcoming').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })
  }
  return (
    <MainPageLayout>
      <div className=" h-full " >
        {!response && isLoading &&
          <div className='h-full flex justify-center items-center' >
            <Loader size='lg' />
          </div>}

        {!isLoading && response &&
          <MovieDisplay
            response={response}
            nowPlaying={nowPlaying}
            popular={popular}
            topRated={topRated}
            upcoming={upcoming}
          />}
      </div>
    </MainPageLayout>
  )
}

export default MoviePage