import { useState } from "react";
import Button from "../button";
import SecSection from "../secondSection";
import { ButtonCont, Datalist, Formulario, FormWrapper, Input, Label, Option } from "./styles";




const getValueInput = ( info) =>{
     var txt = document.getElementById("nameCharacter").value
     var position
     info.flatMap(item => {
          if(item.name === txt){
               position = item.id 
          }
     })
     return position
}

const getResetInput = () =>{
     document.getElementById("form").reset()
     return ''
}





function Form({info}) {
     
     const [position, setPosition] = useState ('')

     

     return (
          <FormWrapper>


               <Formulario id="form" >
                    <Label>Serch Character</Label>
                    <Input name="character" id="nameCharacter" list="characters" />
                    
               </Formulario>

               <Datalist id="characters">
                    {
                         !info ? '' : 
                         info.map(item => (
                              <Option key={item.id} >{item.name}</Option>
                         ))
                    }
               </Datalist>

               <ButtonCont>
                    <Button text={'Send'} func={ ()=>setPosition(getValueInput(info))} />
                    <Button text={'Clean'} func={() => setPosition(getResetInput()) } />
               </ButtonCont>

               <SecSection show={position ? true : false} id = {position} data = {info}/>
          </FormWrapper>


     )
}

export default Form;