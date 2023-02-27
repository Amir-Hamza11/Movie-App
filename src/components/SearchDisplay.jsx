import React from 'react'
import { useNavigate } from 'react-router'
import { Panel } from 'rsuite'
import NO_IMAGE from '../images/not-found.png'

const SearchDisplay = ({ name, id, title, mediaType, overview, voteAverage, releaseDate, poster }) => {

  const navigate = useNavigate()

  const onSearchResultClick = () => {

    if (mediaType === 'movie') {
      navigate(`/movie/${id}`)
    }
    if (mediaType === 'tv') {
      navigate(`/tv/${id}`)
    }

  }

  return (
    <div className='flex justify-center ' >
      <Panel shaded bordered className=' w-3/4  max-w-4xl mb-2 bg-gray-50' >
        <div className='flex' >
          <div className=' w-20' >
            <button onClick={onSearchResultClick} >
              <img src={poster? `https://image.tmdb.org/t/p/original${poster}`: NO_IMAGE}
                className='h-28 w-20 object-fill rounded-lg '
                alt="poster" />
            </button>
          </div>


          <div className='ml-7' >
            <h5 className='text-gray-700' >{name ? name : title}</h5>
            <p className=' font-bold text-gray-500 ' >
              {`Released on: ${releaseDate ? releaseDate : 'Unknown'}`}</p>
            <p className=' font-bold text-gray-500 mt-0 ' >
              {`Rating ${voteAverage}`}</p>
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default SearchDisplay