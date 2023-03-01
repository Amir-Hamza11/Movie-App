import React from 'react'
import ShowGrid from '../ShowGrid';

const TvshowDisplay = ({ response, popular, airingToday, onTv, topRated }) => {

    const onPopularClick = () => {
        popular()
    }
    const onAiringTodayClick = () => {
        airingToday()
    }
    const onOnTvClick = () => {
        onTv()
    }
    const onTopRatedClick = () => {
        topRated()
    }
    return (
        <section>
            <div className='flex my-5 mx-2 items-center flex-wrap bg-slate-400 rounded-lg py-5 px-3 ' >
                <div>
                    <h5 className=' border-2 border-blue-900 px-2 py-1 rounded-md' >Tv Shows</h5>
                </div>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onPopularClick} >
                    Popular
                </button>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onAiringTodayClick} >
                    Airing Today
                </button>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onOnTvClick} >
                    On Tv
                </button>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onTopRatedClick} >
                    Top Rated
                </button>

            </div>
            <ShowGrid
                data={response}
                mediaType={'tv'}
            />
        </section>
    )
}

export default TvshowDisplay