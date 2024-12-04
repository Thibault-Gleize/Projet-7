import { useParams } from "react-router"

export default function Logement () {
    const { idLogement } = useParams()

    return <h2>Bienvenue sur le Logement {idLogement}</h2>
}