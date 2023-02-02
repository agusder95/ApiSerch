import { ButtonWrapper } from "./styles";

function Button({text, action}) {
     return (
          <ButtonWrapper onClick={action} >
               {text}
          </ButtonWrapper>
     );
}

export default Button;