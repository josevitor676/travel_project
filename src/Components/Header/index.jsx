import { Container, Navigation } from "./styles"
import 'animate.css';


export const Header = () => {
    return (
        <Container>
            <h1>Travel</h1>
            <Navigation>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Place</a></li>
            </Navigation>
        </Container>
    )
}