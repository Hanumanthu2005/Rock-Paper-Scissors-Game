import '../css/playButton.css'

function Playbutton({ image }) {
  return (
    <>
      <button className="play-btn">
        <img src={image} alt="" className="btn-emoji" />
      </button>
    </>)
}

export default Playbutton;