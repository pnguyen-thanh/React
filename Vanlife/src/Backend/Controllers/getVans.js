import { getDBConnection } from "../DB/db.js"

export async function getVans (req, res) {
    let db
    try {
        db = await getDBConnection()
        const data = await db.all(`SELECT * FROM vans`)

        if (data) {
            // console.log(data)
            return res.json({data})
        } else {
            throw new Error ("Fail to fetch data")
        }
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch vans collection: ", details: err.message})
    }
}