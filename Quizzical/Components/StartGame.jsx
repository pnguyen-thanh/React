export function StartGame ({start}) {
    return (
        <section className="start-game">
            <h1>Quizzical</h1>
            <button onClick={start}>Start Quiz</button>
        </section>
    )
}