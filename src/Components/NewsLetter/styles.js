import styled from "styled-components";

export const Container = styled.div`
    background-color: #E5E5E5;
    font-family: 'Readex Pro', sans-serif;
    display: flex;
    justify-content: center;
    height: 50vh;
    align-items: center;
    div{
        background-color: #2B6F3E;
        border-radius: 16px;
        color: white;
        width: 80%;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            font-size: 22px;
            text-align: center;
            margin: 10px;
        }
        p {
            text-align: center;
            margin: 5px;
            font-weight: 100;
        }
        a {
            margin: 10px auto;
            background: white;
            padding: 7px;
            color: #2B6F3E;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
        }
        a:hover {
            background-color: #ddd;
            transition: ease-in-out 0.5s;
        }
    }
`