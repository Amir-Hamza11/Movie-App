import { useEffect, useReducer } from "react";

function showReducer(prevState, action) {
    switch (action.type) {
        case "ADD": {
            return [...prevState, action.showId]
        }
        case "REMOVE": {
            return prevState.filter(item => item !== action.showId)
        }
        default:
            return prevState;
    }
}

function usePersistedReducer(reducer, initialState, key) {

    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initial;
    })

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, dispatch]
}

// other method should try to handle 2 keys:
// key in showGrid set to () undefined and here if !key then return nothing 

export function useSavedShows(key) {
    return usePersistedReducer(showReducer, [], key)
}
