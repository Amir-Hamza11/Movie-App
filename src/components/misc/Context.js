import { createContext, useContext, useState } from "react";
const InputContext = createContext();


export const InputProvider = ({children})=>{

    const [input, setInput] = useState('')


    return (
        <InputContext.Provider value={[input, setInput]} >
            {children}
        </InputContext.Provider>
    )
}

export const useInput = ()=> useContext(InputContext);