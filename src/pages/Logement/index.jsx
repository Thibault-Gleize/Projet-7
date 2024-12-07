import { useParams, useNavigate} from "react-router"
import { dataAppt } from "../../datas/datasFile.js"
import Slideshow from "../../components/Slideshow/index.jsx"
import InfoLogement from "../../components/InfoLogement/index.jsx"
import { useEffect } from "react"


export default function Logement () {

    const { idLogement } = useParams()
    const navigate = useNavigate()

    const pushError = () => {
        navigate("*", {replace: true})
    }
    
    let apptId = dataAppt.find((item) => {
        return (item.id === idLogement)
        })

    useEffect(() => {
        if (!apptId) {
            pushError()
        }
    })

    return apptId?.id && (
        <main>
            <Slideshow apptId={apptId} />
            <InfoLogement apptId={apptId} />
        </main>       
    )
}