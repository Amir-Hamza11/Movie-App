import React, { useEffect, useState } from 'react'
import { Loader } from 'rsuite'
import MainPageLayout from '../components/MainPageLayout'
import { ApiGetMedia } from '../components/misc/config'
import TvshowDisplay from '../components/tvShows/TvshowDisplay'

const TvPage = () => {

    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        ApiGetMedia('tv/popular').then((r) => {
            setResponse(r)
            setIsLoading(false)
        })

    }, [])

    const popular = () => {
        ApiGetMedia('tv/popular').then((r) => {
            setResponse(r)
            setIsLoading(false)
        })
    }
    const airingToday = () => {
        ApiGetMedia('tv/airing_today').then((r) => {
            setResponse(r)
            setIsLoading(false)
        })
    }
    const onTv = () => {
        ApiGetMedia('tv/on_the_air').then((r) => {
            setResponse(r)
            setIsLoading(false)
        })
    }
    const topRated = () => {
        ApiGetMedia('tv/top_rated').then((r) => {
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
                    <TvshowDisplay
                        response={response}
                        popular={popular}
                        airingToday={airingToday}
                        onTv={onTv}
                        topRated={topRated}
                    />}
            </div>
        </MainPageLayout>
    )
}

export default TvPage