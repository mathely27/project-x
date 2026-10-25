import gamerImage from "../assets/pfplogo.png";

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
                <div className="global-rank">GLOBAL RANK #442</div>
                <p>Ready to beat your best?</p>
                
            
        
            </div>

        </div>

        </>
    )
}

export default WelcomeCard;
