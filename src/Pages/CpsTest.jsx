import { useEffect, useRef, useState } from "react";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackgroundPixelStars from "../Components/BackgroundPixelStars";
import "./CpsTest.css";

const GAME_DURATION = 5;

export default function CpsTest({ onBack }) {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState("IDLE");
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [bestCps, setBestCps] = useState(() => {
    const saved = localStorage.getItem("clutch_cps_best");
    return saved ? parseFloat(saved) : null;
  });

  const timerRef = useRef(null);
  const clicksRef = useRef(0);

  const handleBack = () => {
    clearInterval(timerRef.current);
    if (onBack) {
      onBack();
    } else {
      navigate("/dashboard");
    }
  };

  const finishGame = () => {
    clearInterval(timerRef.current);
    setGameState("FINISHED");

    const finalCps = parseFloat((clicksRef.current / GAME_DURATION).toFixed(1));
    const currentBest = localStorage.getItem("clutch_cps_best");
    const numBest = currentBest ? parseFloat(currentBest) : 0;

    if (finalCps > numBest) {
      setBestCps(finalCps);
      localStorage.setItem("clutch_cps_best", finalCps.toString());
    }
  };

  const handlePadClick = () => {
    if (gameState === "FINISHED") return;

    if (gameState === "IDLE") {
      setGameState("PLAYING");
      clicksRef.current = 1;
      setClicks(1);
      setTimeLeft(GAME_DURATION);

      const startTime = Date.now();
      timerRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const remaining = Math.max(0, GAME_DURATION - elapsed);
        setTimeLeft(remaining);

        if (remaining <= 0) {
          finishGame();
        }
      }, 50);
      return;
    }

    if (gameState === "PLAYING") {
      clicksRef.current += 1;
      setClicks(clicksRef.current);
    }
  };

  const resetGame = () => {
    clearInterval(timerRef.current);
    clicksRef.current = 0;
    setClicks(0);
    setTimeLeft(GAME_DURATION);
    setGameState("IDLE");
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const elapsed = GAME_DURATION - timeLeft;
  const liveCps = elapsed > 0 ? (clicks / elapsed).toFixed(1) : "0.0";
  const finalCps = (clicks / GAME_DURATION).toFixed(1);

  const getRank = (score) => {
    const num = parseFloat(score);
    if (num >= 12) return "GODSPEED";
    if (num >= 9) return "CHEETAH SPEED";
    if (num >= 6) return "FAST CLICKER";
    return "CASUAL CLICKER";
  };

  return (
    <div className="cps-game">
      <BackgroundPixelStars />

      <button className="back-button" onClick={handleBack}>
        <House size={44} />
      </button>

      <div className="cps-content">
        <div className="cps-title">CPS KING</div>

        <div className="cps-hud">
          <div className="cps-hud-box">
            <span className="cps-hud-label">TIME</span>
            <span className="cps-hud-value">{timeLeft.toFixed(1)}s</span>
          </div>

          <div className="cps-hud-box">
            <span className="cps-hud-label">CLICKS</span>
            <span className="cps-hud-value">{clicks}</span>
          </div>

          <div className="cps-hud-box">
            <span className="cps-hud-label">BEST CPS</span>
            <span className="cps-hud-value">{bestCps ? `${bestCps}` : "--"}</span>
          </div>
        </div>

        <div className="cps-timer-bar-track">
          <div
            className="cps-timer-bar-fill"
            style={{ width: `${(timeLeft / GAME_DURATION) * 100}%` }}
          />
        </div>

        <div className="cps-click-pad" onClick={handlePadClick}>
          {gameState === "IDLE" && (
            <>
              <div className="cps-pad-heading">CLICK TO START</div>
              <div className="cps-pad-subtext">5 second speed challenge</div>
            </>
          )}

          {gameState === "PLAYING" && (
            <>
              <div className="cps-pad-count">{clicks}</div>
              <div className="cps-pad-live-rate">{liveCps} CPS</div>
            </>
          )}
        </div>
      </div>

      {gameState === "FINISHED" && (
        <div className="cps-modal-overlay">
          <div className="cps-modal-card">
            <div className="cps-modal-title">TIME'S UP!</div>

            <div className="cps-modal-score">{finalCps}</div>
            <div className="cps-modal-score-label">CLICKS PER SECOND</div>

            <div className="cps-modal-stats">
              <div className="cps-modal-stat-item">
                <span className="cps-modal-stat-label">TOTAL CLICKS</span>
                <span className="cps-modal-stat-val">{clicks}</span>
              </div>

              <div className="cps-modal-stat-item">
                <span className="cps-modal-stat-label">TIME</span>
                <span className="cps-modal-stat-val">5.0s</span>
              </div>

              <div className="cps-modal-stat-item">
                <span className="cps-modal-stat-label">BEST CPS</span>
                <span className="cps-modal-stat-val">{bestCps || finalCps}</span>
              </div>
            </div>

            <div className="cps-rank-tag">{getRank(finalCps)}</div>

            <button className="cps-btn" onClick={resetGame}>
              TRY AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
