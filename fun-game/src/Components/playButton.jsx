import '../css/playButton.css'
import Result from './result';

function Playbutton({ image, playerMove, setGameResult }) {

  
  function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];

  }

  function result(playerMove) {
    const computerMove = getComputerMove();
    console.log(computerMove);
    if(computerMove === playerMove) {
      return "Tie";
    } else if(
      (computerMove === 'rock' && playerMove === 'scissors') || 
      (computerMove === 'scissors' && playerMove === 'paper') || 
      (computerMove === 'paper' && playerMove === 'rock') ) {
      return 'You lose';
    } else {
      return 'You win'
    }
  }

  function generateResult() {
    setGameResult(result(playerMove));
  }

  return (
    <>
      <button onClick={generateResult} className="play-btn">
        <img src={image} alt="" className="btn-emoji" />
      </button>
      {/* {gameResult && <Result result = {gameResult} />} */}
    </>)
}

export default Playbutton;