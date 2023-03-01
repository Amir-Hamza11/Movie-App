import React from 'react'
import { Panel } from 'rsuite'

const Details = ({ movie, hours, minutes }) => {
    return (
        <Panel shaded bordered >
            <div className='flex flex-col '>
                <h4 className='mb-3 text-center text-blue-900 ' >
                    {movie.name ? movie.name : movie.title}</h4>

                <p className='mb-3 text-center italic text-blue-900 ' >
                    "{movie.tagline}"
                </p>

                <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Release Date:</span>{' '}
                    {movie.release_date}
                </p>

                <p className='italic text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Genres:</span>{' '}
                    {movie.genres ? movie.genres.map((item) => ` ${item.name}, `) : "Unknown"}
                </p>

                <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Status:</span>{' '}
                    {movie.status}
                </p>

                <p className='italic text-gray-500'>
                    <span className='font-bold text-blue-900 ' >Run Time:</span>{' '}
                    {`${hours}h ${minutes}m`}
                </p>

                <p className='text-b text-gray-500' >
                    <span className='font-bold text-blue-900 ' >Overview:</span>{' '}
                    {movie.overview}
                </p>
            </div>
        </Panel>
    )
}

export default Details