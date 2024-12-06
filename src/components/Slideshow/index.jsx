import { useState } from "react"
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from '../../assets/right-arrow.svg'

export default function Slideshow ({idLogement, dataAppt, apptId}) {
    // Création du tableau pour acceuillir les pictures de l'appt
    let picturesList = ["pictures"]
    // Permet de créer le tableau avec les images de l'appt
    let apptPictures = apptId[picturesList]
    // State qui seront utilisé pour l'indice du tableau et afficher le nombre d'image
    let [Number, SetNumber] = useState(0)


    let increase = () => {
        Number === apptPictures.length - 1 ? SetNumber(Number = 0) : SetNumber(Number + 1)
    }

    let decreased  = () => {
        Number === 0 ? SetNumber(Number = apptPictures.length - 1) : SetNumber(Number - 1)
    }

    return (
        <div className="slideshow">
            {/* <a href={apptPictures[Number]}> */}
                <img className="appt-picture" src={apptPictures[Number]} alt="photos de l'appartement" />
            {/* </a> */}
            {apptPictures.length !== 1 && <img className="left-arrow" onClick={decreased} src={leftArrow} alt="flèche de défilement vers la gauche" />}
            {apptPictures.length !== 1 && <img className="right-arrow" onClick={increase} src={rightArrow} alt="flèche de défilement vers la droite" />}
            {apptPictures.length !== 1 && <p>{Number + 1}/{apptPictures.length}</p>}
        </div>
        )
}