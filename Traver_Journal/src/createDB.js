import { getDBConnection } from "./db/db.js"

async function createDB() {
    const db = await getDBConnection()

    try {
        const query = 
        `CREATE TABLE IF NOT EXISTS journals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            img_src TEXT NOT NULL,
            img_alt TEXT,
            title TEXT NOT NULL,
            country TEXT NOT NULL,
            google_map_link TEXT,
            dates TEXT,
            text TEXT
        )`

        await db.exec(query)
    } catch(err) {
        console.error("Error creating table: ", err)
    } finally {
        await db.close()
    }
}

createDB()