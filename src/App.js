import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card'
import champions from './champions';


function App() {
  const [currentCards, setCurrentCards] = useState(champions);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  //state array with clickedcards. if duplicate then reset

  useEffect(() => {
    let newCards = currentCards;
    let currentIndex = newCards.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [newCards[currentIndex], newCards[randomIndex]] = [
        newCards[randomIndex], newCards[currentIndex]];
    }

    setCurrentCards(newCards);   

    const findDuplicate = clickedCards.some((element, index) => {
      return clickedCards.indexOf(element) !== index
    });

    if(findDuplicate) {
      setClickedCards([]);
      setScore(0);
    }

    setIsLoading(false);
   
  }, [clickedCards, currentCards])

  const handleClick = (name) => {
    setIsLoading(true);
    setScore(score + 1);
    setClickedCards([...clickedCards, name]);
  
    
   
  }

  return (
    <div className="App">
      <div className="header is-flex is-flex-direction-column is-justify-content-center is-align-items-center py-6">
        <h3 className="title is-2 has-text-white">League of Legends Memory Game</h3>
        <h3 className="subtitle is-2 has-text-white">Score: {score} </h3>
      </div>

      <div className="cards-container">
        {isLoading ?
        currentCards.map((champ, key) => {

          const output = Object.keys(champ);
          return <Card click={handleClick} key={key} name={champ[output].name} image={champ[output].image} />

        }) :
          currentCards.map((champ, key) => {

            const output = Object.keys(champ);
            return <Card click={handleClick} key={key} name={champ[output].name} image={champ[output].image} />

          })}
      </div>
    </div>
  );
}

export default App;
