import './App.css';
import ParentBox from './ParentBox.js'
import Die from './Die.js'
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

// example
import Dice1 from './images/Dice1.png'
import Dice2 from './images/Dice2.png'
import Dice3 from './images/Dice3.png'
import Dice4 from './images/Dice4.png'
import Dice5 from './images/Dice5.png'
import Dice6 from './images/Dice6.png'


function App() {
  
  const pictureArray = [
    {die: Dice2, num: 2},
    {die: Dice3, num: 3},
    {die: Dice4, num: 4},
    {die: Dice5, num: 5},
    {die: Dice6, num: 6},
    {die: Dice1, num: 1},
  ]

  const [newDice, setNewDice] = React.useState(allNewDice())


  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() =>{
    let heldDice = newDice.every(dice => dice.isHeld === true);
    let firstValue = newDice[0].value.num;
    let sameNumbers = newDice.every(dice => dice.value.num === firstValue);

    if(heldDice && sameNumbers){
      setTenzies(true)
    }
  }, [newDice])

  let dieNumber = newDice.map(dice => 
  <Die 
  value={dice.value.die} 
  key={dice.id} 
  isHeld={dice.isHeld} 
  hold={hold}
  id={dice.id}
  />
  )
  
  function allNewDice(){
    let numberArray = []
    for(let i = 0; i < 10; i++){
      let randomNumber = Math.floor(Math.random() * pictureArray.length)
      let randomImageArray = pictureArray[randomNumber]
      numberArray.push({
        value: randomImageArray, 
        isHeld: false,
        id: nanoid()
      })
    }
    return numberArray
  }

  
  function rollDice(){
    if(!tenzies){
      setNewDice(prevArr => prevArr.map(arr =>{
        let randomNumber = Math.floor(Math.random() * pictureArray.length)
        let randomImageArray = pictureArray[randomNumber]
        return arr.isHeld? arr : {
          value: randomImageArray, 
          isHeld: false,
          id: nanoid()
        }
      }))
    }else{
      setTenzies(false)
      setNewDice(allNewDice())
    }
    
  }
  
  function hold(id){
   setNewDice(prevDie => prevDie.map(die =>{
    return die.id === id? 
    {...die, isHeld: !die.isHeld} : die
   }))
  }


  return (
    <main>
      {tenzies && <Confetti />}
      <ParentBox />
      <div className='die-div'>
          {dieNumber}
      </div>
      <button className="btn" onClick={rollDice}> {tenzies? "New game" : 'Roll' } </button>
       {/* {images} */}
        
    </main>
  );
}

export default App;


