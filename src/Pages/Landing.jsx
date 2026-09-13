import { useNavigate } from "react-router-dom";
import { BackgroundPixelStars } from "../Components/BackgroundPixelStars";

function Landing() {

    const navigate = useNavigate();

    return (
        <div className="landing-page">
              <BackgroundPixelStars />

            <div className="landing-content">
              

                <h1>CLUTCH</h1>

                

                <button onClick={() => navigate("/dashboard")}>
                    GET STARTED
                </button>

            </div>

        </div>
    );
}

export default Landing;