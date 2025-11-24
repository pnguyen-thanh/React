import express from 'express'
import dotenv from 'dotenv'
import { InferenceClient } from '@huggingface/inference'

dotenv.config()

const PORT = 8000

const SYSTEM_PROMPT = `
                        You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
                        You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
                        Format your response in markdown to make it easier to render to a web page.
                    `

const app = express()
app.use(express.json())

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN)

app.post('/api/recipe', async (req, res) => {
    try {
        const ingredients = req.body.listIngredients

        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` }
            ]
        })

        return res.json({ recipe: response.choices[0].message.content })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Something went wrong" })
    }
})

app.listen(PORT, () => console.log("Server running on port " + PORT))
