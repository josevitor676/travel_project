import { DiscoverCard } from "./styles"

export const CardDiscover = ({discover, title, desc, heigth}) => {
    return (
        <DiscoverCard discover={discover} heigth={heigth}>
            <div>
                <h4>{title}</h4>
                <span>{desc}</span>
            </div>
        </DiscoverCard>
    )
}