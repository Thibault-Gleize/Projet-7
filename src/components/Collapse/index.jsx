import arrow from '../../assets/arrow.svg'
import { useState } from 'react'

export default function Collapse (props) {
    let [visible, setVisible] = useState(0);

    function handleClick() {
        setVisible(visible === 0 || visible === 1 ? visible + 1 : visible - 1)
   }


    return(   
        <div>
            <div>
                <h2>{props.name}</h2>
                <img className={`rotate${visible}`} onClick={() => handleClick()} src={arrow} alt="flèche d'affichage de la description"></img>
            </div>
            <span className={`visible${visible}`}>
                {props.description}
            </span>
        </div>
    )
}

// Définir l'état du span (de base mask)
// 3 différent état de span et flèche => 
    // 1er : défault (sans classe)
    // 2eme : show
    // 3eme : unshow
// onclick = appel la fonction et si 2 alors click fait -1  