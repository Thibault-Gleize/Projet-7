import { dataAppt } from "../../datas/datasFile"

export default function Card () {
    return(
        <div className="container">
            {dataAppt.map(({cover, title, id}) => (
                <div className="card" key={id}>
                    <img src={cover} alt={title}></img>
                    <h2>{title}</h2>
                </div>
            ))}
        </div>
    )
}