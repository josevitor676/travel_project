import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    font-family: 'Readex Pro', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    border-bottom: 2px solid #ccc;
    .title {
        width: 300px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        h2 {
            text-align: center;
            color: #202020;
        }
    }
    
    @media (min-width:651px) and (max-width:1024px) {
        flex-direction: column;
        height: 100vh;
        .title {
            h2 {
                font-size: 25px;
            }
        }
        .content_discover {
            display: flex;
            height: 100%;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media (min-width:1025px) and (max-width:1440px)  {
        flex-direction: column;
        height: 100vh;
        .title {
            h2 {
                font-size: 25px;
            }
        }
        .content_discover {
            display: flex;
            height: 100%;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    @media (min-width:1441px) and (max-width:1920px) {
        flex-direction: column;
        height: 100vh;
        .title {
            h2 {
                font-size: 25px;
            }
        }
        .content_discover {
            display: flex;
            height: 100%;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`    
