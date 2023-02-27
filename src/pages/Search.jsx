import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { ApiGetSearch } from '../components/misc/config'
import { useInput } from '../components/misc/Context'
import SearchDisplay from '../components/SearchDisplay'

const Search = () => {

  const [input] = useInput();
  const [searchReasults, setSearchResults] = useState('');

  // console.log(input);
  useEffect(() => {

    ApiGetSearch(`${input}`).then(res => setSearchResults(res))
  }, [input])

  // console.log(searchReasults);

  return (
    <MainPageLayout>
      <div className=' py-2 h-screen '  >
        {searchReasults && searchReasults.results.map((item) => {
          return (
            <SearchDisplay
              key={item.id}
              id={item.id}
              title={item.title}
              poster={item.poster_path}
              mediaType={item.media_type}
              name={item.name}
              overview={item.overview}
              releaseDate={item.release_date}
              voteAverage={item.vote_average}
            />
          )
        })}
      </div>
    </MainPageLayout>
  )
}

export default Search