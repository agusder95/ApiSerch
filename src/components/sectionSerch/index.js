
import { useContext } from "react";
import NameContext from "../../context/NameContext";
import Form from "../Form";
import SectionCharacter from "../sectionCharacter";
import { H1, SerchWrapper } from "./styles";

function SectSerch() {

     const {name, setName} = useContext(NameContext)

     return (
          <SerchWrapper>
               <H1>Characters Info</H1>
               <Form />
               <SectionCharacter hide = {name ? false : true}/>
          </SerchWrapper>
     );
}

export default SectSerch;