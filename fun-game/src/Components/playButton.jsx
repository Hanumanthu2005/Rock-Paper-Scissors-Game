import '../css/playButton.css'

function Playbutton({ image, playerMove, setGameResult, setGameMoves, updateScore }) {

  
  function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];

  }

  function result(playerMove, computerMove) {
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

  function getComputerImage(move) {
    if(move === 'rock') {
      return '/emoji/rock-emoji.png'
    } else if (move === 'paper') {
      return '/emoji/paper-emoji.png'
    } else {
      return '/emoji/scissors-emoji.png'
    }
  }

  function generateResult() {
    const computerMove = getComputerMove();
    const res = result(playerMove, computerMove);
    setGameResult(res);
    setGameMoves({player : image, computer : getComputerImage(computerMove)});
    updateScore(res);
  }

  return (
    <>
      <button onClick={generateResult} className="play-btn">
        <img src={image} alt="" className="btn-emoji" />
      </button>
    </>
  )
}

export default Playbutton;