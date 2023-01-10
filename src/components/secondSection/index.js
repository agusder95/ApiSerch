
import { ContGral, ImgCount, LI, SecWrapper, UL } from "./styles";
import Image from "../image";

function SecSection( {show, id,data} ) {
     
     const route = data[id -1]

     

     return (
          <SecWrapper show = {show}>
               
               <UL>
                         
                   {!id ? '' : (
                    
                         <ContGral>
                              <LI>{route.name}</LI>
                              
                              <ImgCount>
                                   <Image src={route.image} alt = {route.name} />
                              </ImgCount>
                              
                              <LI>Gender: {route.gender}</LI>
                              <LI>Species: {route.species}</LI>
                              <LI>Status: {route.status}</LI>
                         </ContGral>
                    
                   )}

               </UL>

          </SecWrapper>
     );
}

export default SecSection;