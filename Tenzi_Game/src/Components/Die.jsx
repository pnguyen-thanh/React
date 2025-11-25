export function Die ({value, isHeld, id, hold}) {

    const style = {
        backgroundColor: isHeld ? "#59E391" : ""
    }

    return (
        <button 
            style={style} 
            onClick={() => hold(id)}
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
        >{value}</button>
    )
}