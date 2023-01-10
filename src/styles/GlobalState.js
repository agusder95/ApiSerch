import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     body{
          width:100%;
          height:100%;
          margin:0;
          padding:0;
          background-color: #526E2D99;
     }

     ul, li, ol {
          margin:0;
          padding:0;
          text-decoration:none;
          list-style:none;
     }

     h1, h2, h3 {
          margin:0;
          padding:0;
     }

     img {
          width:100%;
          height:100%;
     }

`