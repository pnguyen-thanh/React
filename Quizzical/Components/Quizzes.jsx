import clsx from "clsx"

export function Quizzes({ question, answers, correct_answer, handleSelected, showResults }) {
    return (
        <div className="question-block">
            <h2>{question}</h2>

            <ul className="options">
                {answers.map(a => {
                    const { answer, id, isSelected } = a
                    
                    const className = clsx({
                        selected: !showResults && isSelected,

                        correct: showResults && answer === correct_answer,

                        wrong: showResults && isSelected && answer !== correct_answer,

                        faded: showResults && !isSelected && answer !== correct_answer,
                    })

                    return (
                        <li
                            key={id}
                            className={className}
                            onClick={() => !showResults && handleSelected(question, id)}
                        >
                            {answer}
                        </li>
                    )
                })}
            </ul>

            <hr />
        </div>
    )
}
