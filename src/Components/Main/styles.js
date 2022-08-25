import styled from "styled-components";
import BG from "../../Assets/ground.jpg"


export const Container = styled.div`
    height: 100vh;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    
`
export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p {
        color: white;
        font-family: 'Readex Pro', sans-serif;
        font-weight: 500;
        font-size: 15px;
    }
    h2 {
        text-align: center;
        color: white;
        margin-top: 5px;
        font-family: 'Readex Pro', sans-serif;
        font-weight: 300;
    }
    .btn_explore {
        font-family: 'Readex Pro', sans-serif;
        color: white;
        padding: 8px;
        background-color: #2B6F3E ;
        border-radius: 5px;
        margin: 10px;
        font-size: 15px;
    }
    div {
        margin-top: 10px;
        .icons {
            color: white;
            font-size: 22px;
            margin-left: 15px;
            margin-right: 15px;
            cursor: pointer;
        }
    }
    @media (min-width:425px) and (max-width:768px) {
        p {
            font-size: 17px;
        }
        h2 {
            font-size: 28px;
        }
        div {
            .icons {
                font-size: 26px;
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        p {
            font-size: 17px;
        }
        h2 {
            font-size: 28px;
        }
        div {
            .icons {
                font-size: 26px;
            }
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        p {
            font-size: 19px;
        }
        h2 {
            font-size: 30px;
        }
        div {
            .icons {
                font-size: 28px;
                margin-left: 20px;
                margin-right: 20px;
            }
        }
    }
    @media (min-width:1441px) and (max-width:1920px) {
        p {
            font-size: 19px;
        }
        h2 {
            font-size: 30px;
        }
        div {
            .icons {
                font-size: 28px;
                margin-left: 20px;
                margin-right: 20px;
            }
        }
    }
`