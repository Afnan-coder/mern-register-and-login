import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) =>{

    const [count, setCount] = useState(0)

    const value = {
        count,setCount
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}