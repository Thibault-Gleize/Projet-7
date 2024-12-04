import { useLocation } from 'react-router'
import home_banner from '../../assets/home_banner.png'
import about_banner from '../../assets/about_banner.png'

export default function Banner () {
    const location = useLocation()
    const currentLocation = location.pathname

    return(
        <div className='banner'>
            <img src={ currentLocation === '/' ? home_banner : about_banner } alt='Bannière'></img>
            {currentLocation === '/' && <h1>Chez vous, partout et ailleurs</h1>}
        </div>   
    )
}