import location from '../../src/images/marker.png'

export function Journal (props) {
    const {country, dates, google_map_link, img_alt, img_src, text, title} = props
    
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={img_src}
                    alt={img_alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={location}
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={google_map_link} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
            
        </article>
    )
}