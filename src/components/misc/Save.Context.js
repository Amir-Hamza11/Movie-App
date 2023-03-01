import { createContext, useContext } from "react"
import { useSavedShows } from "./custom-hooks"

const SaveContext = createContext()

export const SaveProvider = ({ children }) => {

    const [tvList, dispatchTv] = useSavedShows('tv')
    const [movieList, dispatchMovie] = useSavedShows('movie')

    const addTv = (showId) => {
        dispatchTv({ type: 'ADD', showId })
    }
    const removeTv = (showId) => {
        dispatchTv({ type: 'REMOVE', showId })
    }
    const addMovie = (showId) => {
        dispatchMovie({ type: 'ADD', showId })
    }
    const removeMovie = (showId) => {
        dispatchMovie({ type: 'REMOVE', showId })
    }

    return (
        <SaveContext.Provider value={{ addTv, removeTv, addMovie, removeMovie, tvList, movieList }} >
            {children}
        </SaveContext.Provider>)
}

export const useSave = () => useContext(SaveContext);