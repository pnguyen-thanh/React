import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"

export function Layout () {
    return (
        <div className="main">
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}