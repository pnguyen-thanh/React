import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function getDBConnection() {
    // store the database next to this file so all scripts open the same DB
    const dbPath = path.join(__dirname, 'database.db')

    return open({
        filename: dbPath,
        driver: sqlite3.Database
    })
}