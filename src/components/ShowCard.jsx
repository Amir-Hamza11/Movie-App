import React from 'react'
import { IconButton, Panel } from 'rsuite'
import PlusRoundIcon from '@rsuite/icons/PlusRound';
import { useNavigate } from 'react-router';
import { useSave } from './misc/Save.Context';

const ShowCard = ({ name, title, poster, id, mediaType, releaseDate, changeList }) => {

    const { tvList, movieList } = useSave()
    const navigate = useNavigate()
    const isShowExist = tvList.includes(id) || movieList.includes(id)

    const addShow = () => {
        changeList(id, "ADD", mediaType)
        console.log(id, "ADD", mediaType);
    }

    const removeShow = () => {
        changeList(id, "REMOVE", mediaType)
        console.log(id, "REMOVE", mediaType);
    }

    const onShowClicked = () => {

        if (mediaType === "tv") {
            navigate(`/tv/${id}`)
        }

        if (mediaType === "movie") {
            navigate(`/movie/${id}`)
        }
    }

    return (
        <Panel className='w-48 '>
            <div className='relative' >
                <button className='m-0 p-0' onClick={onShowClicked} >
                    <img src={`https://image.tmdb.org/t/p/original${poster}`}
                        className='object-fill h-56 rounded-lg
                         border-gray-500 border-2 shadow-lg
                          shadow-slate-400 hover:scale-105  
                          transition ease-in-out delay-75 '
                        alt="poster"
                        loading='lazy'
                    />
                </button>
                <div className='absolute top-1 right-2 opacity-60' >
                    <IconButton size='xs' color={isShowExist ? "red" : "blue"} appearance="primary" circle
                        icon={<PlusRoundIcon />}
                        onClick={isShowExist ? removeShow : addShow}>
                    </IconButton>
                </div>
            </div>


            <div className='text-center' >
                <button onClick={onShowClicked} >
                    <h6 className='text-gray-700 hover:text-blue-400 ' >
                        {name ? name : title}
                    </h6>
                </button>
            </div>

            <div className='text-center' >
                <p className='text-gray-500 italic ' >{`${releaseDate ? releaseDate : 'unknown'}`}</p>
            </div>

        </Panel>

    )
}

export default ShowCard