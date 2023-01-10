import React from 'react'
import { ButtonWrapper } from './styles';

function Button({text,func}) {
     return (
          <ButtonWrapper onClick={func} >
               {text}
          </ButtonWrapper>
     );
}

export default Button;