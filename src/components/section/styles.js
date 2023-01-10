import styled from 'styled-components';

export const SectionWrapper = styled.div`
  
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding-bottom:3rem;
  
  display : ${props => props.show ? 'flex' : 'none'};
  //background-color: #526E2D99;
`;