import { dataAppt } from "../../datas/datasFile"
import { Link } from "react-router"

export default function Card () {
    return(
        <div className="container">
            {dataAppt.map(({cover, title, id}) => (
                <Link key={id} to={`/${id}`}>
                <div className="card">
                    <img src={cover} alt={title}></img>
                    <h2>{title}</h2>
                </div>
                </Link>
            ))}
        </div>
    )
}