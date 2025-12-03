import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function VanDetails () {

    const [van, setVan] = useState({})
    const { id } = useParams()
    console.log(id)

    
    const fetchVanDetail = async () => {
        const res = await fetch(`/api/vans/${id}`)
        const { data } = await res.json()
        setVan(data)
    }

    useEffect(() => {
        fetchVanDetail()
    }, [id])

    return (
        <div className="van-detail-container">
            <Link
                to={`..`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}