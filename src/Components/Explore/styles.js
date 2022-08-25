import styled from "styled-components";

export const Container = styled.div`
    background-color: #E5E5E5;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid #ccc;
    .title {
        font-family: 'Readex Pro', sans-serif;
        color: #202020;
        margin: 10px;
    }
    .container_Explore {

    }
    @media (min-width:425px) and (max-width:768px) {
        .container_Explore {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
    @media (min-width:769px) and (max-width:808px) {
        height: auto;
        .container_Explore {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
    @media (min-width:809px) and (max-width:1024px) {
        height: 100vh;
        .title {
            font-family: 'Readex Pro', sans-serif;
            color: #202020;
            margin: 25px;
            h2{
                font-size: 30px;
            }
        }
        .container_Explore {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }
    @media (min-width:1024px) and (max-width:1440px)  {
        height: 100vh;
        .title {
            margin: 30px;
            h2{
                font-size: 33px;
            }
        }
        .container_Explore {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }
    @media (min-width:1441px) and (max-width:1920px) {
        height: 100vh;
        .title {
            margin: 50px;
            h2{
                font-size: 40px;
            }
        }
        .container_Explore {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }
`