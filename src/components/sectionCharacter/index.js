import { useContext } from "react";
import ApiContext from "../../context/ApiContext";
import NameContext from "../../context/NameContext";
import Image from "../image";
import { ContGral, ImgCount, Li, SectCharacterWrapper, Ul } from "./styles";




function SectionCharacter({hide}) {
     
     const {name, setName} = useContext(NameContext)
     const {characters, setCharacters} = useContext(ApiContext)
     
     var character

     characters.flatMap(item => {
          if(item.id === name){
               character = item
          }
     })
     
     

     return (
          <SectCharacterWrapper hide={hide} >
               <Ul>
                    {!name ? '' : (
                         <ContGral>
                              <Li> {character.name} </Li>

                              <ImgCount>
                                   <Image src = {character.image} alt= {character.name} />
                              </ImgCount>
                              
                              <Li> Gender: {character.gender} </Li>
                              <Li> Species: {character.species} </Li>
                              <Li> Status: {character.status} </Li>

                         </ContGral>
                    )}
               </Ul>
          </SectCharacterWrapper>
     );
}

export default SectionCharacter;