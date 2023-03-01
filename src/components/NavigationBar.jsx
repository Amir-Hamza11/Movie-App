import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'

const NavigationBar = () => {
  return (
    <div>
      <nav className=' bg-blue-900 md:h-16 h-24 w-full md:flex md:items-center  ' >
        <div className='flex items-center '>
          <div className='ml-4 ' >
            <Link to={'/'} >
              <h6 className='text-lg text-blue-100 uppercase '>Movies</h6>
              <p className='text-xs text-blue-100' >zone</p>
            </Link>
          </div>

          <div className='flex ml-5 ' >
            <Link to={'/movie-page'} className='text-sm border-2 px-2 py-1 rounded-full text-blue-100 ml-5' >Movies</Link>
            <Link to={'/tv-page'} className='text-sm border-2 px-2 py-1 rounded-full text-blue-100 ml-5'>TV Shows</Link>
            <Link to={'/saved'} className='text-sm border-2 px-2 py-1 rounded-full text-blue-100 ml-5'>Saved</Link>
          </div>
        </div>

        <div className='flex justify-center mt-2 md:ml-2 md:mt-0 ' >
          <SearchInput />
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar