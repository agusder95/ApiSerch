
import { string } from "prop-types";
import { Img } from "./styles";



function Image({src, alt}) {
     return (
          <Img src = {src} alt = {alt} />
     );
}

Image.prototype ={
     src : string,
     alt : string,
}

export default Image;