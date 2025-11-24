import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown";

export function ClaudeRecipe ({listIngredients}) {
    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch('api/recipe', {
                    method: 'POST',
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({ listIngredients })
                })
            
                const {recipe} = await res.json()
                setRecipe(recipe)
                setLoading(false)
            } catch(err) {
                console.error(err)
                setError(err.message)
                setLoading(false)
            }
        }

        fetchRecipe()
    }, [listIngredients])

    if (loading) return <p>Loading recipe...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </section>)
}