import { Container } from "./styles"
import explore1 from "../../Assets/explore1.jpg"
import explore2 from "../../Assets/explore2.jpg"
import explore3 from "../../Assets/explore3.jpg"
import { CardExplore } from "../CardExplore"


export const Explore = () => {
    return (
        <Container>
            <div className="title">
                <h2>Explore Beautiful Place</h2>
            </div>
            <div className="container_Explore">
                <CardExplore explore={explore3} title="Drini Beach" desc="Yogyakarta, Indonesia"/>
                <CardExplore explore={explore2} title="Baron Beach" desc="Yogyakarta, Indonesia"/>
                <CardExplore explore={explore1} title="Trisik Beach" desc="Yogyakarta, Indonesia"/>
            </div>
        </Container>
    )
}