import {useState} from "react"
import "./style.css"

const data = ["😎","😈","💀","🎂","🎃"];

function MemoryGame() {
    const [cards, setCards] = useState(prepareCards);
    const [firstClickIndex, setFirstClickIndex] = useState(null);
    const [secondClickIndex, setSecondClickIndex] = useState(null);
    const [turns, setTurns] = useState(0);
    const [matchingIndices, setMatchingIndices] = useState([]);

    function prepareCards() {
        const array = [...data, ...data];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        return array;
    }

    function handleClick(index){
        return () => {
            if(firstClickIndex === null) {
                setFirstClickIndex(index)
                setTurns(turns + 1)
            } else {
                const firstValue = cards[firstClickIndex];
                const secondValue = cards[index];
                console.log(firstValue, secondValue);
                if(firstValue === secondValue) {
                    setFirstClickIndex(null);
                    const newWinning = [...matchingIndices, firstClickIndex, index]
                    if(newWinning.length === cards.length){
                        alert("You won");
                        setCards(prepareCards());
                        setFirstClickIndex(null);
                        setSecondClickIndex(null);
                        setMatchingIndices([]);
                        setTurns(turns + 1)
                    } else {
                        setMatchingIndices(newWinning)
                    }
                    
                } else {
                    setSecondClickIndex(index);
                    setTurns(turns + 1)
                    setTimeout(() => {
                        setFirstClickIndex(null);
                        setSecondClickIndex(null)
                    }, 2000);
                }
                
            }
        }
    }
    return (
        <div>
            <span>Turns: {turns}</span>
            <button onClick={()=> {
                    setCards(prepareCards())
                    setFirstClickIndex(null)
                    setSecondClickIndex(null)
                }}>Restart Game</button>
            <div className="memory-game">              
            {cards.map((emoji, index)=> {
                return (
                    <div
                    data-active={matchingIndices.includes(index)} 
                    data-toggle={index === firstClickIndex || index === secondClickIndex}
                    data-disabled = {index=== firstClickIndex }
                    data-disable-all = {firstClickIndex !== null && secondClickIndex !== null}
                    onClick={handleClick(index)}
                    className="card" key={index}>
                        <div className="front"></div>
                        <div className="back">{emoji}</div>
                    </div>
                )
            } )}
            </div>

            </div>
        )   
}
export default MemoryGame;