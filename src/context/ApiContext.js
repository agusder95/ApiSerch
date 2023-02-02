
import { useState, useEffect, createContext } from "react";
import { API_URL } from "../constants";

const ApiContext = createContext({});

export const ApiContextProvider = ({children}) => {
     const [characters, setCharacters] = useState([]);

     const getData = async () => {
          const response = await fetch(API_URL)
          const data = await response.json()

          setCharacters(data.results)
     }

     useEffect(()=>{
          getData()
     },[])

     return(
          <ApiContext.Provider value={{
               characters,
               setCharacters
          }} >
               {children}
          </ApiContext.Provider>
     )

}

export default ApiContext;