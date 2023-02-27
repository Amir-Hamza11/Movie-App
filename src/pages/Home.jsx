import React, { useEffect, useState } from 'react'
import { Loader } from 'rsuite'
import Trending from '../components/home/Trending'
import MainPageLayout from '../components/MainPageLayout'
import { ApiGetTrending } from '../components/misc/config'

const Home = () => {

  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ApiGetTrending('trending/all/day').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })

  }, [])

  const today = () => {
    ApiGetTrending('trending/all/day').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })
  }

  const thisWeek = () => {
    ApiGetTrending('trending/all/week').then((r) => {
      setResponse(r)
      setIsLoading(false)
    })
  }


  return (
    <MainPageLayout >
      <div className=" h-full " >
        {!response && isLoading &&
          <div className='flex justify-center items-center' >
            <Loader size="lg"/>
          </div>}
        {!isLoading && response &&
          <Trending
            response={response}
            today={today}
            thisWeek={thisWeek}

          />}
      </div>
    </MainPageLayout>
  )
}

export default Home