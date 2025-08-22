import '../css/scoreCard.css'


function ScoreCard({ score, resetScore }) {
  return (
    <>
      <div>
        Score : 
        <p>wins({score.wins})</p>
        <p>lose({score.lose})</p> 
        <p>Tie({score.tie})</p>
        <button onClick={resetScore} className="reset-btn">Reset</button>
      </div>
    </>
  )
}

export default ScoreCard;