import gamerImage from "../assets/welcome-image.png";

function WelcomeCard() {
    return(
        <>
        <div className="welcome-card">
            <div className="welcome-image">
                <img className="welcome-img" src={gamerImage} />
            </div>


            <div className="welcome-info">
                <h1>WELCOME BACK,</h1>
                <h3>PROGRAMER_99</h3>
                <p>Ready to beat your best?</p>
                
            
            <div className="welcome-stats">
                <div className="stat">
                    <h4>BEST SCORE</h4>
                    <p>95</p>
                </div>

                <div className="stat">
                    <h4>RANK</h4>
                    <p>#12</p>
                </div>

                <div className="stat">
                    <h4>GAMES PLAYED</h4>
                    <p>48</p>
                </div>
            </div>
            </div>

        </div>

        </>
    )
}

export default WelcomeCard;