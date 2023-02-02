import { SectionWrapper } from "./styles";

function Section({hide, children}) {
     return (
          <SectionWrapper hide = {hide} >
               {children}
          </SectionWrapper>
     );
}

export default Section;