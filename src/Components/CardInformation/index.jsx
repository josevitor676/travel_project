import { ContainerImage } from "./styles"

export const CardInformation = ({image, alt}) => {
    return (
        <ContainerImage src={image} alt={alt}/>
    )
}