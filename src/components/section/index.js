import { bool, node } from "prop-types";
import { SectionWrapper } from "./styles";


function Section({children, data, show}) {
     return (
          <SectionWrapper show = {show} info = {data}>
               {children}
          </SectionWrapper>
     );
}

Section.prototype = {
     children : node,
     show:bool,
}

Section.defaultProps = {
     show:false,
}

export default Section;