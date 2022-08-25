import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        ::-webkit-scrollbar {
            width: 10px;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: #F4F4F4;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background:  #2B6F3E;
            border-radius: 10px;
        }
    }
`

//font-family: 'Pacifico', cursive;
//font-family: 'Readex Pro', sans-serif;