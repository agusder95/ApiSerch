import { A, FooterWrapper, Li, Ul } from "./styles";

function Footer() {
     return (
          <FooterWrapper>
               <Ul>
                    <Li>Developed by Agustin De Robles</Li>
                    <Li><A href="https://github.com/agusder95" target={"_blank"} > GitHub </A></Li>
               </Ul>
          </FooterWrapper>
     );
}

export default Footer;