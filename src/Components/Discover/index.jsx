import { Container } from "./styles"
import Discover1 from "../../Assets/discover1.jpg"
import Discover2 from "../../Assets/discover2.jpg"
import Discover3 from "../../Assets/discover3.jpg"
import { CardDiscover } from "../CardDiscover"


export const Discover = () => {
    return (
        <Container id="discover">
            <div className="title">
                <h2>Discover The Most Attractive Places</h2>
            </div>
            <div className="content_discover">
                <CardDiscover discover={Discover2} heigth={"300px"} title="Pakis Beach" desc="Karawang, Indonesian"/>
                <CardDiscover discover={Discover3} heigth={"330px"} title="Suluban Beach" desc="Bail, Indonesian"/>
                <CardDiscover discover={Discover1} heigth={"300px"} title="Karimun Java" desc="Karimun, Indonesian"/>
            </div>
        </Container>
    )
}