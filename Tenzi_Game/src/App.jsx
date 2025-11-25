import { Die } from "./Components/Die"
import { useState } from "react"
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

export function App () {

    const generateAllNewDice = () => {
        const randList = []
        for (let i = 0; i < 10; i++) {
            const rand = (Math.floor(Math.random() * 6) + 1)
            randList.push({value: rand, isHeld: false, id: nanoid()})
        }

        // console.log(randList)
        return randList
    }
    
    const [dice, setDice] = useState(() => generateAllNewDice())
    
    const isWon =
        dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)


    const hold = id => {
        setDice(preVal => {
            return preVal.map(e => e.id === id 
                                        ? {...e, isHeld : !e.isHeld} 
                                        : e
            )
        })
    }

    const diceElements = dice.map(e => <Die 
                                            hold={hold} 
                                            key={e.id} 
                                            value={e.value} 
                                            isHeld={e.isHeld} 
                                            id={e.id}
                                        />)

    const rollDice = () => {
        if (isWon) {
            setDice(generateAllNewDice())
        } else {
            setDice(prevVal => {
            return prevVal.map(e => 
                e.isHeld 
                ? { ...e } 
                : { ...e, value: Math.floor(Math.random() * 6) + 1 }
            )
            })
        }
    }

    // console.log(dice)

    return (
        <>  
            {isWon && <Confetti />}
            <main>
                <div className="title-conatiner">
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>

                <div className="dice-container">
                    {diceElements}
                </div>

                <button onClick={rollDice} className="roll-dice">{isWon ? 'New Game' : 'Roll'}</button>
            </main>
        </>
    )
}