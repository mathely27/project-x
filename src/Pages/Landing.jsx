import { useNavigate } from "react-router-dom";
import ConstellationGrid from "../Components/ConstellationGrid";
import GlitchText from "../Components/GlitchText";

function Landing() {

    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <ConstellationGrid />
            <div className="landing-content">
                <GlitchText speed={0.5} enableShadows={true} enableOnHover={false}>
                    CLUTCH
                </GlitchText>
                <button onClick={() => navigate("/dashboard")}>
                    GET STARTED
                </button>
            </div>
        </div>
    );
}

export default Landing;