import footer_logo from '../../assets/footer_logo.png'

export default function Footer () {
    return (
        <footer>
            <img src={footer_logo} alt='logo Kasa'></img><br/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}