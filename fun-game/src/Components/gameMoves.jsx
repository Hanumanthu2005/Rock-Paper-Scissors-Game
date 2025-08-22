import '../css/gameMoves.css'

function GameMoves({gameMoves}) {
  if(!gameMoves.player && !gameMoves.computer) {
    return null;
  }

  return (
    <>
      <p className="game-moves">
        You: 
        <img className="move-emoji" src={gameMoves.player} alt="" /> VS 
        <img className="move-emoji" src={gameMoves.computer} alt="" />
         :Computer
      </p>
    </>
  ) 
}

export default GameMoves;