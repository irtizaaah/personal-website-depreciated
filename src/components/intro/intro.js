import './intro.css';
const profile = process.env.PUBLIC_URL + "/resources/profile/headshot.png";
const handwave = process.env.PUBLIC_URL + "/resources/hand-emoji/waving-hand-animation.gif";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-header">
        <img className = "header-image" src={profile} alt="Irtiza"/>
        <div className = "header-greeting">
            <div className="greeting-title">
              <h1 className="title-text">Hi, I'm <span className ="text-name title-text">Irtiza K.</span></h1>
              <img className="title-image" src={handwave} alt="iOS Hand-wave Emoji"></img>
            </div>
            <h2 className="greeting-subtitle">Computer Science Major at California State University, East Bay</h2>
        </div>
      </div>
      <div className = "intro-description">
        <p>
          I'm a fourth year Computer Science Major with an associates degree in Mathematics. 
          I love coding, sitcoms, pretty art, sad music, and basketball (Go Warriors!)... 
          Feel free to hit me up.
        </p>
      </div>
    </div>
  );
}

export default Intro;
