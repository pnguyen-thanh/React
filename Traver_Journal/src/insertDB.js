import { getDBConnection } from "./db/db.js"
import data from '../src/data.js'

export async function insertDB () {
    const db = await getDBConnection()

    try {
        const query = `
            INSERT INTO journals 
            (img_src, img_alt, title, country, google_map_link, dates, text)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `

        // console.log(data)

        for (const journal of data) {
            const {
                img: { src, alt },
                title,
                country,
                googleMapsLink,
                dates,
                text
            } = journal

            await db.run(query, [
                src,
                alt,
                title,
                country,
                googleMapsLink,
                dates,
                text
            ])
        }

        console.log("Insert completed")

    } catch (err) {
        console.error("Unable to insert data: ", err)
    } finally {
        await db.close()
    }
}

insertDB()
