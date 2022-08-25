import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    h1 {
        font-family: 'Pacifico', cursive;
        font-size: 32px;
        color: white;
        font-weight: 100;
    }

    @media (min-width:425px) and (max-width:768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    @media (min-width:769px) and (max-width:1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    @media (min-width:1025px) and (max-width:1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    @media (min-width:1441px) and (max-width:1920px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        h1 {
            font-size: 35px;
        }
    }
`

export const Navigation = styled.div`
    li {
        margin: 7px;
        color: white;
        font-family: 'Readex Pro', sans-serif;
        font-size: 16px;
        display: flex;
        justify-content: center;
        a {
            color: white;
            padding: 3px;
            border-bottom: 1px solid transparent;
        }
        a:hover {
            border-bottom: 1px solid white;
            transition: ease 0.6s;
        }
    }

    @media (min-width:425px) and (max-width:768px) {
        display: flex;
        li {
            margin: 10px;
        }
    }

    @media (min-width:769px) and (max-width:1024px) {
        display: flex;
        li {
            margin: 15px;
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        display: flex;
        li {
            margin-left: 20px;
            margin-right: 20px;
            a {
                font-size: 18px;
            }
        }
    }
    @media (min-width:1441px) and (max-width:1920px) {
        display: flex;
        li {
            margin-left: 30px;
            margin-right: 30px;
            a {
                font-size: 18px;
            }
        }
    }
`