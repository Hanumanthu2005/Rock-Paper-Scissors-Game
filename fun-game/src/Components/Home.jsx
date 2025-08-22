import Playbutton from "./playButton";
import '../css/Home.css'
import Result from "./result";
import { useState } from 'react';


function Home() {
  const [gameResult, setGameResult] = useState(null);

  return (
    <>
      <div className="main">
        <div className="title">
          Rock Paper Scissors
        </div>
        <div className="play-btns">
          <Playbutton 
            setGameResult={setGameResult}
            playerMove="rock" 
            image="/emoji/rock-emoji.png" 
          />
          <Playbutton
            setGameResult={setGameResult}
            playerMove="paper" 
            image="/emoji/paper-emoji.png" 
          />
          <Playbutton
            setGameResult={setGameResult} 
            playerMove="scissors" 
            image="/emoji/scissors-emoji.png" 
          />
        </div>
        <Result result={gameResult}/>
      </div>
      
    </>
  )
}

export default Home;