import { getDBConnection } from "../DB/db.js";

export async function getVanDetails (req, res) {
    let db
    try {
        db = await getDBConnection()
        const id = req.params.id

        if (id) {
            const data = await db.get(`SELECT * FROM vans WHERE id=?`, [id])
            return res.status(200).json({data})
        } else {
            throw new Error ("Fail to fetch data")
        }
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch van details: ", details: err.message})
    }
}