import { HeaderWrapper, ImgCountainer } from "./styles";

import { BANNER } from "../../constants";

import Image from "../image";

function Header() {

     return (
          <HeaderWrapper>
               <ImgCountainer>
                    <Image src = {BANNER} alt ={'BANNER'} />
               </ImgCountainer>
          </HeaderWrapper>
     );
}

export default Header;