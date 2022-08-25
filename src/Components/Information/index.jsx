import { CardInformation } from "../CardInformation"
import { Container } from "./styles"
import Paisagem1 from "../../Assets/paisagem1.jpg"
import Paisagem2 from "../../Assets/paisagem2.jpg"

export const Information = () => {
    return (
        <Container id="information">
            <div className="imagens">
            <CardInformation image={Paisagem1} alt="Paisagem de uma Praia"/>
            <CardInformation image={Paisagem2} alt="Paisagem de uma Praia com um deck de madeira"/>
            </div>
            <div>
                <h2>More information about the best beachs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, otestate. Quae omnia in nostra sententia, pursuit</p>
                <a href="#">Explore Now</a>
            </div>
        </Container>
    )
}