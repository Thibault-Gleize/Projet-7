import filledStar from "../../assets/filled_star.svg"
import emptyStar from "../../assets/empty_star.svg"

export default function InfoLogementRate ({rate}) {
    const range = [1,2,3,4,5]
    const maxRange = 5

    return (
        <div>
            {range.map((rateElem, i) => rate >= rateElem ? (
                <span key={range[i]}><img src={filledStar} alt="étoile remplie" /></span>  
            )
            : rateElem <= maxRange && (<span key={range[i]}><img src={emptyStar} alt="étoile vide" /></span>)
        )}
        </div>
    )
    
}