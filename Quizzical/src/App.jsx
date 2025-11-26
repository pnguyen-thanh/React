import { useState, useEffect } from "react"
import { Quizzes } from "../Components/Quizzes"
import { nanoid } from "nanoid"
import he from "he"

export function App() {
    const [questions, setQuestions] = useState([])
    const [showResults, setShowResults] = useState(false)

    // Fetch questions
    const startQuiz = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const { results } = await res.json()

        setQuestions(
            results.map((e) => ({
                question: he.decode(e.question),
                answers: [...e.incorrect_answers, e.correct_answer].map((a) => ({
                    answer: he.decode(a),
                    id: nanoid(),
                    isSelected: false,
                })),
                correct_answer: he.decode(e.correct_answer),
            }))
        )
        setShowResults(false)
    }

    useEffect(() => {
        setTimeout(() => startQuiz(), 0)
        }, [])


    // Handle selecting an answer (one per question)
    const handleSelected = (questionText, answerId) => {
        setQuestions((prev) =>
        prev.map((q) => {
            if (q.question !== questionText) return q
            return {
            ...q,
            answers: q.answers.map((a) =>
                a.id === answerId
                ? { ...a, isSelected: true }
                : { ...a, isSelected: false }
            ),
            }
        })
        )
    }

    // Check results
    const checkResults = () => {
        setShowResults(true)
        const score = questions.reduce((total, q) => {
        const selected = q.answers.find((a) => a.isSelected)
        return selected && selected.answer === q.correct_answer
            ? total + 1
            : total
        }, 0)
        alert(`You scored ${score} / ${questions.length}`)
    }

    // Check if all questions have an answer
    const isAnswered = questions.every((q) =>
        q.answers.some((a) => a.isSelected)
    )

    return (
        <main>
        <div className="quiz-container">
            {questions.map((q) => (
            <Quizzes
                key={q.question}
                question={q.question}
                answers={q.answers}
                correct_answer={q.correct_answer}
                handleSelected={handleSelected}
                showResults={showResults}
            />
            ))}

            {isAnswered && (
            <button
                onClick={() => {
                if (!showResults) checkResults()
                else startQuiz()
                }}
            >
                {!showResults ? "Check Answers" : "Play Again"}
            </button>
            )}
        </div>
        </main>
    )
}
