import { useState } from "react"
import { IngredientList } from "./IngredientList"
import { ClaudeRecipe } from "./ClaudeRecipe"

export function Main () {

    const [listIngredients, setListIngredients] = useState([])

    const [isReady, setIsReady] = useState(false)

    // const [recipe, setRecipe] = useState("")

    const handleClick = (formData) => {
        const ingredient = formData.get('ingredient')
        setListIngredients(preVal => [...preVal, ingredient])
    }

    const getRecipe = () => {
        setIsReady(true)
    }

    return (
        <main>
            <form action={handleClick} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g oregano (Please add at least 4 ingredients)"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>

            {listIngredients.length > 0 && 
                <IngredientList 
                    listIngredients={listIngredients}
                    getRecipe={getRecipe}
                />}

            {isReady && <ClaudeRecipe listIngredients={listIngredients}/>}
        </main>
    )
}