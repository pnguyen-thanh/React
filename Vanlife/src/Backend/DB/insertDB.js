import { getDBConnection } from "./db.js"
import { vans } from "../data.js"

async function insertDB () {
    let db
    // console.log(vans)
    try {
        db = await getDBConnection()

        for (const van of vans) {
            const { id, name, price, description, imageUrl, type, hostId } = van
            await db.run(`
                INSERT INTO vans (id, name, price, description, imageUrl, type, hostId)
                VALUES (?, ?, ?, ?, ?, ?, ?)`, [id, name, price, description, imageUrl, type, hostId]
            )
        }

    } catch (err) {
        console.error("Failed to insert database tables:", err)
    } finally {
        if (db) {
            try {
                await db.close()
            } catch (closeErr) {
                console.error("Failed to close database connection:", closeErr)
            }
        }
    }
}

insertDB()