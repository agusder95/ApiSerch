import styled from 'styled-components';
import Section from '../section';

export const SectCharacterWrapper = styled(Section)`
  
`;

export const Ul = styled.ul`
     margin:1rem;
     display: flex;
     flex-direction:column;
     flex-wrap: wrap;
     justify-content: space-around;
     align-items:center;
     border: 2px solid #FAE48B99;
`;

export const Li = styled.li`
     margin:1rem;
     font-size:1.5rem;
     font-family: 'Noto Sans Tangsa', sans-serif;

     :first-child{
     font-size:2.5rem;
     }
`;


export const ImgCount = styled.div`
  
`;

export const ContGral = styled.div`
     display:flex;
     flex-direction:column;
     align-items:center;
     
     margin:1rem;
`;
