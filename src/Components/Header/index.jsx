import { Container, Navigation } from "./styles"
import { Link } from "react-scroll/modules"

export const Header = () => {
    return (
        <Container>
            <h1>Travel</h1>
            <Navigation>
                <li>
                <Link 
                to="home"
                spy
                smooth
                // offset={50}
                duration={500}>
                    Home
                </Link>
                </li>
                <li>
                <Link 
                to="information"
                spy
                smooth
                // offset={50}
                duration={500}>
                    About
                </Link>
                </li>
                <li>
                <Link 
                to="discover"
                spy
                smooth
                // offset={50}
                duration={500}>
                    Discover
                </Link>
                </li>
                <li>
                <Link 
                to="explore"
                spy
                smooth
                // offset={50}
                duration={500}>
                    Place
                </Link>
                </li>
            </Navigation>
        </Container>
    )
}