
function ScoreCard({ score }) {
  return (
    <>
      <div className="score-card">
        Score : 
        <p>wins({score.wins})</p>
        <p>lose({score.lose})</p> 
        <p>Tie({score.tie})</p>
      </div>
    </>
  )
}

export default ScoreCard;