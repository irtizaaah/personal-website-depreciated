import './connect.css';
const thumbsUp = process.env.PUBLIC_URL + "../../resources/hand-emoji/thumbs-up-animation.gif";

function Connect() {
  return (
    <div className="connect">
       <img className="connect-image" src={thumbsUp} alt="iOS Thumps-Up Emoji"></img>
    </div>
  );
}

export default Connect;
