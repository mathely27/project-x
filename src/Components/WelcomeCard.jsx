
import gamerImage from "../assets/pfplogo.png";
import { useAuth } from "../Context/AuthContext";

function WelcomeCard() {
  const { user } = useAuth();
  const stageName = user?.stageName || "PLAYER";

  return (
    <div className="welcome-card">
      <div className="welcome-image">
        <img
          className="welcome-img"
          src={gamerImage}
          alt="Clutch gamer"
        />
      </div>

      <div className="welcome-info">
        <h1>WELCOME BACK,</h1>
        <h3>{stageName}</h3>
        <div className="global-rank">GLOBAL RANK #442</div>
        <p>Ready to beat your best?</p>
      </div>
    </div>
  );
}

export default WelcomeCard;
