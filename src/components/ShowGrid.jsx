import React from 'react'
// import { useSavedShows } from './misc/custom-hooks';
import { useSave } from './misc/Save.Context';
import ShowCard from './ShowCard';

const ShowGrid = ({ data, mediaType }) => {

    // const [tvList, dispatch1] = useSavedShows('tv')
    // const [movieList, dispatch2] = useSavedShows('movie')

    const {addTv, removeTv, addMovie, removeMovie} = useSave()

    const changeList = (showId, action, media) => {

        if (media === 'tv') {
            if (action === "ADD") {
                // dispatch1({ type: 'ADD', showId })
                addTv(showId)
            }
            if (action === "REMOVE") {
                // dispatch1({ type: 'REMOVE', showId })
                removeTv(showId)
            }
        }

        if (media === 'movie') {
            if (action === "ADD") {
                // dispatch2({ type: 'ADD', showId })
                addMovie(showId)
            }
            if (action === "REMOVE") {
                // dispatch2({ type: 'REMOVE', showId })
                removeMovie(showId)
            }
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
                        />
                    )
                })
            }
        </div>
    )
}

export default ShowGrid