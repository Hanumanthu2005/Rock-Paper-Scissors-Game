import Playbutton from "./playButton";
import '../css/Home.css'
import Result from "./result";
import { useEffect, useState } from 'react';
import GameMoves from "./gameMoves";
import ScoreCard from "./scoreCard";


function Home() {
  const [gameResult, setGameResult] = useState(null);
  const [gameMoves, setGameMoves] = useState({player : null, computer : null});
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return (savedScore) ? JSON.parse(savedScore) : {wins : 0, lose : 0, tie : 0};
  });

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);


  const resetScore = () => {
    setScore({wins : 0, lose : 0, tie : 0});
  }

  const updateScore = (res) => {
    setScore((prevScore) => {
      const newScore = {...prevScore};
      if(res === 'You lose') newScore.lose++;
      else if(res === 'You win') newScore.wins++;
      else newScore.tie++;
      return newScore;
    })
  }

  

  return (
    <>
      <div className="main">
        <div className="title">
          Rock Paper Scissors
        </div>
        <div className="play-btns">
          <Playbutton 
            setGameMoves={setGameMoves}
            setGameResult={setGameResult}
            updateScore={updateScore}
            playerMove="rock" 
            image="/emoji/rock-emoji.png" 
          />
          <Playbutton
            setGameMoves={setGameMoves}
            setGameResult={setGameResult}
            updateScore={updateScore}
            playerMove="paper" 
            image="/emoji/paper-emoji.png" 
          />
          <Playbutton
            setGameMoves={setGameMoves}
            setGameResult={setGameResult} 
            updateScore={updateScore}
            playerMove="scissors" 
            image="/emoji/scissors-emoji.png" 
          />
        </div>
        <div className="result">
          <Result result={gameResult}/>
        </div>
        <div className="game-moves">
          <GameMoves gameMoves={gameMoves}/>
        </div>
        <div className="score-card">
          <ScoreCard resetScore={resetScore} score={score} />
        </div>

      </div>
      
    </>
  )
}

export default Home;