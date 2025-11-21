import { getDBConnection } from "../db/db.js"

export async function getData (req, res) {
    const db = await getDBConnection()

    try {
        const query = `SELECT * FROM journals`
        const data = await db.all(query)

        return res.json({ data })

    } catch (error) {
        console.log("Error fetching data:", error)
        return res.status(500).json({ message: "Server error" })
    } finally {
        await db.close()
    }
}
