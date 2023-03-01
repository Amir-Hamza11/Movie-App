import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { ApiGetMedia } from '../components/misc/config'
import ShowGrid from '../components/ShowGrid'
import { Loader } from 'rsuite'
import { useSave } from '../components/misc/Save.Context'

const Saved = () => {

    const { tvList, movieList } = useSave()

    const [tvListResponse, setTvList] = useState(null)
    const [movieListResponse, setMovieList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const getList = (list, key) => {

        if (key === 'tv') {
            const promise = list.map((ids) => {
                return ApiGetMedia(`tv/${ids}`)

            })

            Promise.all(promise)
                .then(r => ({ results: r.map(show => show) }))
                .then(r => setTvList(r))
                .catch((err) => {
                    setError(err.message)
                })

        }
        if (key === 'movie') {

            const promise = list.map((ids) => {

                return ApiGetMedia(`movie/${ids}`)
            })

            Promise.all(promise)
                .then(r => ({ results: r.map(show => show) }))
                .then(r => setMovieList(r))
                .catch((err) => {
                    setError(err.message)
                })
        }
    }

    useEffect(() => {

        const tvLists = (key = 'tv') => {
            getList(tvList, key)
        }

        const movieLists = (key = 'movie') => {
            getList(movieList, key)
        }

        tvLists();
        movieLists();

        setIsLoading(false);

    }, [movieList, tvList])

    return (
        <MainPageLayout>

            {error && <div>{`Error Occured: ${error}`}</div>}

            {isLoading && !error && !movieListResponse && !tvListResponse &&
                <div className='flex justify-center items-center' ><Loader size='lg' /></div>
            }

            {!isLoading && !error && movieListResponse && tvListResponse &&
                <div className='mt-5' >
                    <div  >
                        <div className='flex my-5 mx-2 items-center flex-wrap bg-slate-400 rounded-lg py-5 px-3 ' >
                            <h5 className=' border-2 border-blue-900 px-2 py-1 rounded-md w- '  >Tv Shows</h5>
                        </div>
                        <div className='' >
                            {tvListResponse && <ShowGrid data={tvListResponse} mediaType={'tv'} />}
                            {tvListResponse.results.length === 0 &&
                                <div className='h-20 text-center' ><h4>No shows to display</h4></div>}
                        </div>
                    </div>

                    <div >
                        <div className='flex my-5 mx-2 items-center flex-wrap bg-slate-400 rounded-lg py-5 px-3 ' >
                            <h5 className=' border-2 border-blue-900 px-2 py-1 rounded-md' >Movies</h5>
                        </div>
                        <div className='' >
                            {movieListResponse && <ShowGrid data={movieListResponse} mediaType={'movie'} />}
                            {movieListResponse.results.length === 0 &&
                                <div className='h-20 text-center' ><h4>No movie to display</h4></div>}

                        </div>
                    </div>
                </div>}
        </MainPageLayout>
    )
}

export default Saved