import { getDBConnection } from "./db.js"

// async function removeDB() {
//     const db = await getDBConnection()

//     const query = `DELETE FROM vans`

//     await db.run(query)

//     await db.close()
//     console.log("Delete the records successfully")
// }

async function createDB () {
    let db
    try {
        db = await getDBConnection()

        const vansTable = `
            CREATE TABLE IF NOT EXISTS vans (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                price INTEGER NOT NULL,
                description TEXT NOT NULL,
                imageUrl TEXT NOT NULL,
                type TEXT NOT NULL,
                hostId TEXT NOT NULL
            )`

        await db.exec(vansTable)
    } catch (err) {
        console.error("Failed to create database tables:", err)
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

createDB().catch(err => console.error("Unhandled error in createDB():", err))