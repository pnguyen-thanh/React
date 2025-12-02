export function Footer () {

    const year = new Date().getFullYear()
    
    return (
        <footer>
            <span>© {year} #VANLIFE</span>
        </footer>
    )
}