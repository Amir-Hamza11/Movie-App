import React from 'react'
import ShowGrid from '../ShowGrid'

const Trending = ({ response, today, thisWeek }) => {


  const onTodayClick = () => {
    today()
  }
  const onThisWeekClick = () => {
    thisWeek()
  }

  return (
    <section>
      <div className='flex my-5 mx-2 items-center flex-wrap bg-slate-400 rounded-lg py-5 px-3 ' >
        <div>
          <h5 className=' border-2 border-blue-900 px-2 py-1 rounded-md' >Trending</h5>
        </div>

        <button 
        className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600 ' 
        onClick={onTodayClick} >
          Today
        </button>

        <button 
        className='bg-blue-900 px-4 py-2 ml-2 text-blue-100 rounded-full lg:mt-0 mt-2 hover:bg-blue-600' 
        onClick={onThisWeekClick} >
          This Week
        </button>
      </div>
      <ShowGrid data={response} />
    </section>
  )
}

export default Trending