import { ExploreCard } from "./styles"

export const CardExplore = ({explore, title, desc}) => {
    return (
        <ExploreCard explore={explore}>
            <div>
                <h4>{title}</h4>
                <span>{desc}</span>
            </div>
        </ExploreCard>
    )
}