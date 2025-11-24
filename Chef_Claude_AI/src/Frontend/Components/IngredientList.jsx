export function IngredientList ({listIngredients, getRecipe}) {
    console.log(listIngredients)

    const res = listIngredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{res}</ul>
            {listIngredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}