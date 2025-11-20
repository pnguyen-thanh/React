import x from '../images/icons/x.png'
import facebook from '../images/icons/facebook.png'
import instagram from '../images/icons/instagram.png'
import github from '../images/icons/github.png'

export function Footer () {
    return (
        <footer>
            <a href="/"><img src={x} alt='x logo'/></a>
            <a href="/"><img src={facebook} alt='facebook logo'/></a>
            <a href="/"><img src={instagram} alt='instagram logo'/></a>
            <a href="/"><img src={github} alt='github logo'/></a>
        </footer>
    )
}
