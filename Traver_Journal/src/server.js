import express from 'express'
import cors from 'cors'
import { journalRoute } from './routes/journal.js'

const app = express()
const PORT = 8000

app.use(cors())

app.use(express.json())

app.use('/api/journals', journalRoute)

// 404 handler
app.use((req, res) => {
    console.error(`404: ${req.method} ${req.path} not found`)
    res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
    console.error('Failed to start server: ', err)
})