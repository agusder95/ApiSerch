import { HeaderWrapper, ImgCountainer } from "./styles";

import Image from "../image";

import baner from "../../styles/images/Rick-And-Morty-Logo.png"

function Header() {
     return (
          <HeaderWrapper>
               <ImgCountainer>
                    <Image src={baner} alt={'baner'} />
               </ImgCountainer>
          </HeaderWrapper>
     );
}

export default Header;