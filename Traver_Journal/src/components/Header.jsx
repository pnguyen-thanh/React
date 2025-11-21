import global from '../images/globe.png'

export function Header () {
    return (
        <header>
            <img src={global} alt='global icon'/>
            <h1>My Travel Journal</h1>
        </header>
    )
}