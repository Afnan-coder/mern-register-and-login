import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) =>{

    const [token, setToken] = useState(() => localStorage.getItem('token') || null)
    const [name, setName] = useState(() => localStorage.getItem('name') || null)

    useEffect(()=>{
        if(token){
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
        }
    },[token])

    useEffect(()=>{
        if(name){
            localStorage.setItem('name', name)
        } else {
            localStorage.removeItem('name')
        }
    },[name])

    const value = {
        token,setToken,
        name, setName
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}