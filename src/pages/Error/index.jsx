import { Link } from "react-router"

export default function Error () {
    return (
        <div className="error-container">
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}