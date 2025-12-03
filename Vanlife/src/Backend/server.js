import express from 'express'
import cors from 'cors'
import { vansRouter } from './Routes/vans.js'

const PORT = 8000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/vans', vansRouter)

app.use((req, res) => {
    console.error(`404: ${req.method} ${req.path} not found`)
    res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
    console.error('Failed to start server: ', err)
})