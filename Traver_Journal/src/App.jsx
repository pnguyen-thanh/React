import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Journal } from "./components/Journal"
import { fetchData } from "./fetchData.js"

export function App () {
    const [journals, setJournals] = useState([])

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchData()
            setJournals(data)
        }
        loadData()
    }, [])


    const journalElements = journals.map((e, idx) => <Journal key={idx} {...e}/>)

    return (
        <>
            <Header />
            <main className="container">
                {journalElements} 
            </main>
        </>
    )
}