import { NavLink } from "react-router-dom"

export function Header () {
    return (
        <nav className="text-margin">
            <h1>#VANLIFE</h1>
            <ul>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/vans">Vans</NavLink>
            </ul>
        </nav>
    )
}