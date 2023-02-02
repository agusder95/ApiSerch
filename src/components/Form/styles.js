import styled from 'styled-components';

export const FormWrapper = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
`;

export const Formulario = styled.form`
    margin:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Label = styled.label`
    margin:1rem 0;
    font-size:1.3rem;
    align-self: baseline;
    font-family: 'Noto Sans Tangsa', sans-serif;
    color:#302f2f;
`;

export const Input = styled.input`
  height:2rem;
  border-radius:10px;
  border:none;
  text-align:center;
  font-size:1.5rem;
  font-family: 'Noto Sans Tangsa', sans-serif;
`;

export const ButtonContent = styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin:1rem;
`;

export const Datalist = styled.datalist`
  
`;

export const Option = styled.option`
  
`;