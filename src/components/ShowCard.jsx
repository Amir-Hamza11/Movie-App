import React from 'react'
import { Panel } from 'rsuite'
// import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import { useNavigate } from 'react-router';

const ShowCard = ({ name, title, poster, id, mediaType, releaseDate, list, changeList }) => {

    const navigate = useNavigate()
    // const isShowExist = list.includes(id);

    // const addShow = () => {
    //     changeList(id, "ADD", mediaType)
    // }

    // const removeShow = () => {
    //     changeList(id, "REMOVE", mediaType)
    // }

    const onShowClicked = () => {

        if (mediaType === "tv") {
            navigate(`/tv/${id}`)
        }
        
        if (mediaType === "movie") {
            navigate(`/movie/${id}`)
        }
    }

    return (
        <Panel  className='w-48 '>
            <div>
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
            </div>

            {/* <button
                onClick={isShowExist ? removeShow : addShow}>
                <ExpandOutlineIcon />
            </button> */}
            <div className='text-center' >
                <button onClick={onShowClicked} >
                    <h6 className='text-gray-700 hover:text-blue-400 ' >
                        {name ? name : title}
                    </h6>
                </button>
            </div>

            <div className='text-center' >
                <p className='text-gray-500' >{`${releaseDate ? releaseDate : 'unknown'}`}</p>
            </div>

        </Panel>

    )
}

export default ShowCard