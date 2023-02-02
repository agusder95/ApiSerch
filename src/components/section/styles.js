import styled from 'styled-components';

export const SectionWrapper = styled.div`
     display: ${props => props.hide ? 'none' : 'flex'};
     flex-direction:column;
     justify-content:start;
     align-items:center;
     flex-wrap:wrap;

     flex-grow:4;
     
`;