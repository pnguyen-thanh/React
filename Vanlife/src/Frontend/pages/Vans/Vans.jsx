import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Vans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchVans = async () => {
        setLoading(true)    

        try {
            const res = await fetch('/api/vans')
            const { data } = await res.json()
            setVans(data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchVans()
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if (loading) return <h1>Loading...</h1>

    return (
        <div className='text-margin'>
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
