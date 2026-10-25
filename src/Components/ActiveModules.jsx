import { Keyboard, Mouse, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function ActiveModules({ setActiveMenu }) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleGameClick = (game, available = false) => {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        if (!available) {
            return;
        }

        if (game === "colorClash") {
            navigate("/color-clash");
        } else if (game === "reaction") {
            setActiveMenu("reaction");
        } else {
            setActiveMenu(game);
        }
    };

    return (
        <div className="active-modules">
            <h2>ACTIVE_MODULES</h2>

            <div className="module-list">
                <div className="module-card">
                    <Keyboard />
                    <h3>MEMORY TYPING</h3>
                    <p>Test your typing speed and accuracy.</p>
                    <button onClick={() => handleGameClick("typing", true)}>
                        LAUNCH
                    </button>
                </div>
                <div className="module-card">
                    <Timer />
                    <h3>F1 REACTION</h3>
                    <p>Test your reaction when lights go out.</p>
                    <button onClick={() => handleGameClick("reaction", true)}>
                        LAUNCH
                    </button>
                </div>

                <div className="module-card">
                    <Mouse />
                    <h3>CPS KING</h3>
                    <p>Test how fast you can click.</p>
                    <button onClick={() => handleGameClick("cpsKing", true)}>
                        LAUNCH
                    </button>
                </div>

                <div className="module-card">
                    <Keyboard />
                    <h3>COLOUR CLASH</h3>
                    <p>Challenge your memory and focus.</p>
                    <button onClick={() => handleGameClick("colorClash", true)}>
                        LAUNCH
                    </button>
                </div>

                <div className="module-card">
                    <Timer />
                    <h3>NUMBER RUSH</h3>
                    <p>Test how quickly you can react.</p>
                    <button onClick={() => handleGameClick("numberRush")}>
                        COMING SOON!
                    </button>
                </div>

                <div className="module-card">
                    <Keyboard />
                    <h3>FLASH RECALL</h3>
                    <p>Challenge your speed with words.</p>
                    <button onClick={() => handleGameClick("flashRecall")}>
                        COMING SOON!
                    </button>
                </div>

                <div className="module-card">
                    <Mouse />
                    <h3>DON'T CLICK</h3>
                    <p>Improve your clicking precision.</p>
                    <button onClick={() => handleGameClick("dontClick")}>
                        COMING SOON!
                    </button>
                </div>

                {/*<div className="module-card">
          <Timer />
          <h3>F1 REACTION</h3>
          <p>Test your reaction when lights go out.</p>
          <button onClick={() => handleGameClick("reaction", true)}>
            LAUNCH
          </button>
        </div>*/}

                <div className="module-card">
                    <Mouse />
                    <h3>REFLEX SWITCH</h3>
                    <p>Test your accuracy and control.</p>
                    <button onClick={() => handleGameClick("reflexSwitch")}>
                        COMING SOON!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ActiveModules;
