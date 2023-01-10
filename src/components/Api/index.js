
import { useEffect, useState } from 'react';

const URL = 'https://rickandmortyapi.com/api/character/';


function ApiSerch() {
     
     const [character, setCharacter] = useState ();

     const getData = async () => {
          const response = await fetch(URL)
          const data = await response.json()

          setCharacter(data.results)
     }
     
     useEffect(()=> {
          getData()
     },[])

   return character
}

export default ApiSerch;