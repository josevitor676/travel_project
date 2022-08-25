import styled from "styled-components";

export const DiscoverCard = styled.div`
    background-image: url(${({discover}) => discover});
    height: ${({heigth}) => heigth};
    width: 220px;
    font-family: 'Readex Pro', sans-serif;
    color: white;
    display: flex;
    margin: 10px;
    padding: 5px;
    opacity: 0.8;
    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        h4{
            font-size: 20px;
            font-weight: 500;
        }
        span {
            font-size: 16px;
        }
    }
` 