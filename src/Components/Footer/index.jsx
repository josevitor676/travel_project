import {AiOutlineCopyrightCircle, AiOutlineArrowUp} from "react-icons/ai"
import { Link } from "react-scroll/modules"
import {ContainerFooter} from "./styles"


export const Footer = () => {
    return (
        <ContainerFooter>
            <span><AiOutlineCopyrightCircle/>2022 Travel - By Jose Vitor</span>
            <Link 
            to="home"
            spy
            smooth
            duration={500}
            className="BackToTop"
            >
                <AiOutlineArrowUp/>
            </Link>
        </ContainerFooter>
    )
}