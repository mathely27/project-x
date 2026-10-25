import { useEffect, useRef, useState } from "react";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackgroundPixelStars from "../Components/BackgroundPixelStars";
import "./F1Reaction.css";

export default function F1Reaction({ onBack }) {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState("IDLE");
  const [litTowers, setLitTowers] = useState(0);
  const [reactionTime, setReactionTime] = useState(null);
  const [bestTime, setBestTime] = useState(() => {
    const saved = localStorage.getItem("clutch_f1_best");
    return saved ? parseFloat(saved) : null;
  });

  const gameStateRef = useRef("IDLE");
  const bestTimeRef = useRef(bestTime);
  const sequenceTimeoutsRef = useRef([]);
  const lightsOutTimerRef = useRef(null);
  const startTimeRef = useRef(0);
  const startTimestampRef = useRef(0);

  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  useEffect(() => {
    bestTimeRef.current = bestTime;
  }, [bestTime]);

  const clearAllTimers = () => {
    sequenceTimeoutsRef.current.forEach((t) => clearTimeout(t));
    sequenceTimeoutsRef.current = [];
    if (lightsOutTimerRef.current) {
      clearTimeout(lightsOutTimerRef.current);
      lightsOutTimerRef.current = null;
    }
  };

  const handleBack = (e) => {
    if (e) e.stopPropagation();
    clearAllTimers();
    if (onBack) {
      onBack();
    } else {
      navigate("/dashboard");
    }
  };

  const startSequence = () => {
    clearAllTimers();
    setReactionTime(null);
    setLitTowers(0);
    setGameState("COUNTDOWN");
    gameStateRef.current = "COUNTDOWN";
    startTimestampRef.current = performance.now();

    const towerInterval = 1000;
    for (let i = 1; i <= 5; i++) {
      const timeout = setTimeout(() => {
        setLitTowers(i);
        if (i === 5) {
          const randomDelay = 1500 + Math.random() * 4500;
          lightsOutTimerRef.current = setTimeout(() => {
            setLitTowers(0);
            setGameState("LIGHTS_OUT");
            gameStateRef.current = "LIGHTS_OUT";
            startTimeRef.current = performance.now();
          }, randomDelay);
        }
      }, i * towerInterval);
      sequenceTimeoutsRef.current.push(timeout);
    }
  };

  const handleTrigger = () => {
    const currentState = gameStateRef.current;

    if (currentState === "IDLE" || currentState === "RESULT" || currentState === "JUMP_START") {
      startSequence();
      return;
    }

    if (currentState === "COUNTDOWN") {
      if (performance.now() - startTimestampRef.current < 200) {
        return;
      }
      clearAllTimers();
      setLitTowers(5);
      setGameState("JUMP_START");
      gameStateRef.current = "JUMP_START";
      return;
    }

    if (currentState === "LIGHTS_OUT") {
      const elapsedMs = performance.now() - startTimeRef.current;
      const elapsedSec = elapsedMs / 1000;
      setReactionTime(elapsedSec);
      setGameState("RESULT");
      gameStateRef.current = "RESULT";

      const currentBest = bestTimeRef.current;
      if (!currentBest || elapsedSec < currentBest) {
        setBestTime(elapsedSec);
        localStorage.setItem("clutch_f1_best", elapsedSec.toString());
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleTrigger();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearAllTimers();
    };
  }, []);

  const formatTimer = (seconds) => {
    if (seconds == null) return "00.000";
    const sec = Math.floor(seconds);
    const ms = Math.floor((seconds - sec) * 1000);
    return `${sec.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
  };

  return (
    <div className="f1-game" onClick={handleTrigger}>
      <BackgroundPixelStars />

      <button className="back-button" onClick={handleBack}>
        <House size={44} />
      </button>

      <div className="f1-content">
        <div className="f1-title">F1 REACTION TEST</div>

        <div className="f1-gantry-wrapper">
          <div className="f1-gantry-bar" />
          <div className="f1-gantry-towers">
            {[1, 2, 3, 4, 5].map((towerIdx) => {
              const isLit = litTowers >= towerIdx;
              return (
                <div key={towerIdx} className="f1-tower">
                  <div className="f1-light" />
                  <div className="f1-light" />
                  <div className={`f1-light ${isLit ? "f1-red-active" : ""}`} />
                  <div className={`f1-light ${isLit ? "f1-red-active" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>

        {gameState === "IDLE" && (
          <>
            <p className="f1-instruction">
              Tap/click when you're ready to race, then tap again when the lights go out.
            </p>
            <div className="f1-timer-display">00.000</div>
          </>
        )}

        {gameState === "COUNTDOWN" && (
          <>
            <p className="f1-instruction">WAIT FOR LIGHTS OUT...</p>
            <div className="f1-timer-display">00.000</div>
          </>
        )}

        {gameState === "LIGHTS_OUT" && (
          <>
            <p className="f1-instruction" style={{ color: "#22c55e" }}>
              LIGHTS OUT!
            </p>
            <div className="f1-timer-display f1-live">00.000</div>
          </>
        )}

        {gameState === "JUMP_START" && (
          <>
            <p className="f1-instruction" style={{ color: "#ff2222" }}>
              JUMP START!
            </p>
            <div className="f1-timer-display f1-jump">FALSE START</div>
            <button
              className="f1-action-btn"
              onClick={(e) => {
                e.stopPropagation();
                startSequence();
              }}
            >
              TRY AGAIN
            </button>
          </>
        )}

        {gameState === "RESULT" && reactionTime !== null && (
          <>
            <p className="f1-instruction">
              Tap/click when you're ready to race, then tap again when the lights go out.
            </p>
            <div className="f1-timer-display">
              {formatTimer(reactionTime)}
            </div>
            <button
              className="f1-action-btn"
              onClick={(e) => {
                e.stopPropagation();
                startSequence();
              }}
            >
              RACE AGAIN
            </button>
          </>
        )}

        {bestTime !== null && (
          <div className="f1-best-display">
            Your best: <strong>{formatTimer(bestTime)}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
