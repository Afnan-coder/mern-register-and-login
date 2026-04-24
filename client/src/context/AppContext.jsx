import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) =>{

    const [token, setToken] = useState(localStorage.getItem('token'))
    const [userName, setUserName] = useState(null)

    useEffect(()=>{
        if(token){
            console.log(token)
        } 
        console.log('No token found')
    },[token])


    const value = {
        token,setToken,
        userName, setUserName
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}