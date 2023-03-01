import React from 'react'
import { useNavigate } from 'react-router';
import { useInput } from './misc/Context'

const SearchInput = () => {

  const [input, setInput] = useInput();
  const navigate = useNavigate()

  const OnInputChange = (ev) => {
    setInput(ev.target.value)
  }

  const onSearchClick = () => {
    navigate('/search')
  }

  return (
    <div className=' text-center ' >
      <input id='search'
        onChange={OnInputChange}
        className="ml-2 p-1 focus:bg-blue-100 w- text-sm focus:border-0 text-gray-700 rounded-full  "
        value={input} />

      <button htmlFor="search"
        className='font-sans text-slate-900 text-sm font-semibold bg-slate-400 px-2 py-1 ml-1 rounded-full '
        onClick={onSearchClick} >
        Search
      </button>
    </div>
  )
}

export default SearchInput