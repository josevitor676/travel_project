import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E5;
    border-bottom: 2px solid #ccc;
    .imagens {
        display: flex;
        flex-direction: column;
    }
    div {
        font-family: 'Readex Pro', sans-serif;
        display: flex;
        flex-direction: column;
        h2 {
            font-weight: 500;
            text-align: center;
            margin: 10px;
        }
        p {
            color: #959595;
            font-size: 14px;
            margin: 10px;
        }
        a {
            margin: 0 auto;
            padding: 7px;
            background-color: #2B6F3E;
            color: white;
            border-radius: 5px;
        }
    }
    @media (min-width:425px) and (max-width:768px) {
        flex-direction: row;
        flex-wrap: wrap;
        height: 100vh;
        .imagens {
            flex-direction: row;
        }
        div {
            justify-content: center;
            align-items: center;
            p{
                text-align: center;
                width: 400px;
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        flex-direction: row;
        height: 100vh;
        justify-content: space-around;
        .imagens {
            flex-direction: row;
        }
        div {
            width: 400px;
            h2 {
                text-align: left;
            }
            p{
                text-align: left;
            }
            a {
                width: 130px;
                margin-left: 10px;
                text-align: center;
            }
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        flex-direction: row;
        height: 100vh;
        .imagens {
            flex-direction: row;
        }
        div {
            width: 450px;
            h2 {
                text-align: left;
                font-size: 28px;
            }
            p{
                text-align: left;
                font-size: 16px;
                line-height: 23px;
            }
            a {
                width: 130px;
                margin-left: 10px;
                text-align: center;
            }
        }
    }
    @media (min-width:1441px) and (max-width:1920px) {
        flex-direction: row;
        height: 100vh;
        .imagens {
            flex-direction: row;
        }
        div {
            width: 450px;
            h2 {
                text-align: left;
                font-size: 28px;
            }
            p{
                text-align: left;
                font-size: 16px;
                line-height: 23px;
            }
            a {
                width: 130px;
                margin-left: 10px;
                text-align: center;
            }
        }
    }
`