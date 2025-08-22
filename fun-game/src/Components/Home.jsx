import Playbutton from "./playButton";
import '../css/Home.css'

function Home() {
  return (
    <>
      <div className="title">Rock Paper Scissors</div>
      <div className="play-btns">
        <Playbutton image="/emoji/rock-emoji.png" />
        <Playbutton image="/emoji/paper-emoji.png" />
        <Playbutton image="/emoji/scissors-emoji.png" />
      </div>
    </>
  )
}

export default Home;