import { Link, useLocation } from 'react-router'
import header_logo from '../../assets/header_logo.png'

export default function Header () {
    const location = useLocation()
    const currentLocation = location.pathname
    
    return (
        <header>
            <img src={header_logo} alt='logo Kasa'></img>
            <nav>
                <Link to="/" className={ currentLocation === "/" ? "active" : ""}>Accueil</Link>
                <Link to="/a-propos" className={ currentLocation === "/a-propos" ? "active" : ""}>A Propos</Link>
            </nav>
        </header> 
    )
}