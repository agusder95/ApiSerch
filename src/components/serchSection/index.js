
import { H1, ImgCount, LI, SerchWrapper, UL } from "./styles";

import Image from "../image";
import Form from "../form";
import SecSection from "../secondSection";



function SerchSection({data, show}) {


     return (
          <SerchWrapper show = {show} > {/* "show" for hide */}
               
               <H1>Characters Info</H1>
               
               
               {!data ? 'Cargando...' : 
                    <Form info = {data} />
               }

          
          </SerchWrapper>
     );
     
}

export default SerchSection;