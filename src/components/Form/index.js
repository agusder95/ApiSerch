import { ButtonContent, Datalist, Formulario, FormWrapper, Input, Label, Option } from "./styles";
import Button from "../button";
import { useContext } from "react";
import ApiContext from "../../context/ApiContext";
import NameContext from "../../context/NameContext";



const getValueInput = (data) =>{

     var txt = document.getElementById("nameCharacters").value
     var position 

     data.flatMap(item => {
          if(item.name === txt){
               position = item.id
          }
     })

     return position
}

const resetInput = () => {
     document.getElementById("form").reset()

     return '';
}


function Form() {

     const {characters, setCharacters} = useContext(ApiContext)
     const {name, setName} = useContext(NameContext)
     
     return (
          <FormWrapper>
               <Formulario id="form" >
                    <Label>Serch Character</Label>
                    <Input type="text" id="nameCharacters" name="nameCharacters" list="names"/>
               </Formulario>

               <Datalist id="names">
                    {
                         !characters ? '' :
                         characters.map(item => (
                              <Option key={item.id}> {item.name} </Option>
                         ))
                    }

               </Datalist>


               <ButtonContent>
                    <Button text={"Send"} action ={()=> setName(getValueInput(characters))} />
                    <Button text={"Cear"} action ={()=> setName(resetInput())} />
               </ButtonContent>

               
          </FormWrapper>
     );
}

export default Form;