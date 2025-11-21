export async function fetchData() {
    try {
        const res = await fetch('/api/journals')

        if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
        }

        const { data } = await res.json()
        return data

    } catch (error) {
        console.error('Error fetching journals:', error)
        return []
    }
}
