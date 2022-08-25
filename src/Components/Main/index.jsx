import { Header } from "../Header"
import { Container, Content } from "./styles"
import {BsTwitter } from "react-icons/bs"
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai"

export const Main = () => {
    return (
        <Container id="home">
            <Header/>
            <Content>
                <p>Discover your place</p>
                <h2>Explore The Best <b>Beautiful Beachs</b></h2>
                <a href="#" className="btn_explore">Explore</a>
                <div>
                    <a href="#"><BsTwitter className="icons"/></a>
                    <a href="#"><AiFillFacebook className="icons"/></a>
                    <a href="#"><AiOutlineInstagram className="icons"/></a>
                </div>
            </Content>
        </Container>
    )
}