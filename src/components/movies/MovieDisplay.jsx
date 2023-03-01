import React from 'react'
import ShowGrid from '../ShowGrid'

const MovieDisplay = ({ response, nowPlaying, popular, topRated, upcoming }) => {

    // console.log(response);
    const onNowPlayingClick = () => {
        nowPlaying()
    }
    const onPopularClick = () => {
        popular()
    }
    const onTopRatedClick = () => {
        topRated()
    }
    const onUpcomingClick = () => {
        upcoming()
    }

    return (
        <section>
            <div className='flex my-5 mx-2 items-center flex-wrap bg-slate-400 rounded-lg py-5 px-3 ' >
                <div>
                    <div className=' border-2 border-blue-900 px-2 py-1 rounded-md' >Movies</div>
                </div>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onNowPlayingClick} >
                    Now Playing
                </button>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onPopularClick} >
                    Popular
                </button>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onTopRatedClick} >
                    Top Rated
                </button>

                <button
                    className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600'
                    onClick={onUpcomingClick} >
                    Upcoming
                </button>

            </div>
            <ShowGrid
                data={response}
                mediaType={'movie'}
            />
        </section>
    )
}

export default MovieDisplay