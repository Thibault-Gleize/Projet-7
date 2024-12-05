import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

const aboutInfo = [
    {
        "title" : "Fiabilité",
        "info" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confirmes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
    },
    {
        "title" : "Respect",
        "info" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
    },
    {
        "title" : "Service",
        "info" : "La qualité de service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
        "title" : "Sécurité",
        "info" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
    }
]


export default function Apropos () {

    return (
        <main>
            <Banner />
            {aboutInfo.map(({title, info, index}) => (
                <div className="about_container" key={`${title} - ${index}`}>
                    <Collapse name={title} description={info} />
                </div> 
            ))}
        </main>
    )
}