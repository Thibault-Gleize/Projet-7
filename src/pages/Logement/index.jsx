import { useParams } from "react-router"
import { dataAppt } from "../../datas/datasFile.js"
import Slideshow from "../../components/Slideshow/index.jsx"
import InfoLogement from "../../components/InfoLogement/index.jsx"

export default function Logement () {

    const { idLogement } = useParams()
    let apptId = dataAppt.find((item) => {
        return item.id === idLogement
        })

    return (
        <main>
            <Slideshow apptId={apptId} />
            <InfoLogement apptId={apptId} />
        </main>
    )
    
}