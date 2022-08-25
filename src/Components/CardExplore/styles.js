import styled from "styled-components";

export const ExploreCard = styled.div`
    width: 240px;
    height: 300px;
    background-image: url(${({explore}) => explore});
    font-family: 'Readex Pro', sans-serif;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: flex-end;
    align-items: center;
    margin: 15px;
    div {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 10px;
        background: white;
        align-items: flex-start;
        border-radius: 10px;
        margin-bottom: 15px;
        h4 {
            color: #202020;
        }
        span {
            color: #959595;
        }
    }
`