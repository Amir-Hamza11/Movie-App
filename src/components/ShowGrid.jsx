import React, { useState } from 'react'
import { useSavedShows } from './misc/custom-hooks';
import ShowCard from './ShowCard';

const ShowGrid = ({ data, mediaType }) => {

    const [key, setKey] = useState('tv')
    const [list, dispatch] = useSavedShows(key)

    // console.log(data);

    const changeList = (showId, action, media) => {
        setKey(media)

        if (action === "ADD") {
            dispatch({ type: 'ADD', showId })
        }
        if (action === "REMOVE") {
            dispatch({ type: 'REMOVE', showId })
        }

    }

    return (
        <div className="flex flex-wrap justify-center" >
            {
                data.results.map((item) => {
                    return (
                        <ShowCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            name={item.name}
                            mediaType={item.media_type ? item.media_type : mediaType}
                            poster={item.poster_path}
                            releaseDate={item.release_date}
                            changeList={changeList}
                            list={list}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShowGrid