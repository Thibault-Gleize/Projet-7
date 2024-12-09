import { useParams, useNavigate} from "react-router"
import { dataAppt } from "../../datas/datasFile.js"
import Slideshow from "../../components/Slideshow/index.jsx"
import InfoLogement from "../../components/InfoLogement/index.jsx"
import { useEffect } from "react"


export default function Logement () {
    // Utilisation du paramètre indiqué sur l'url
    const { idLogement } = useParams()
    // Utilisation de useNavigate pour rediriger vers la page d'erreur
    const navigate = useNavigate()
    // Fonction permettant d'ajouter /* sur l'url
    const pushError = () => {
        navigate("*", {replace: true})
    }
    // Vérification dans la liste des apparatement pour retrouver le bon objet basé sur le paramètre (id du logement)
    let apptId = dataAppt.find((item) => {
        return (item.id === idLogement)
        })
    // Effectue un rendue en vérifiant que l'id de l'appartement est correct sinon redirection vers la page d'erreur
    useEffect(() => {
        if (!apptId) {
            pushError()
        }
    })
    // renvoie les info du logement uniquement si l'id est vérifié.
    return apptId?.id && (
        <main>
            <Slideshow apptId={apptId} />
            <InfoLogement apptId={apptId} />
        </main>       
    )
}