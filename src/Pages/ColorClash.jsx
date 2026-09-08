import React, { useEffect, useRef, useState } from "react";
import "./ColorClash.css";

const COLORS = [
  { name: "RED", value: "#ef4444" },
  { name: "BLUE", value: "#3b82f6" },
  { name: "GREEN", value: "#22c55e" },
  { name: "YELLOW", value: "#facc15" },
];

const TOTAL_QUESTIONS = 10;
const TIME_PER_QUESTION = 5;

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const createQuestion = () => {
  const word = COLORS[Math.floor(Math.random() * COLORS.length)];

  let visualColor;

  do {
    visualColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  } while (visualColor.name === word.name);

  return {
    word: word.name,
    visualColor: visualColor.name,
    visualColorValue: visualColor.value,
  };
};

const createOptions = () => shuffleArray(COLORS);

export default function ColorClashGame({ username = "Player", onGameComplete }) {
  const [step, setStep] = useState("INTRO");
  const [question, setQuestion] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(createQuestion);
  const [options, setOptions] = useState(createOptions);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [totalTime, setTotalTime] = useState(0);

  const timerRef = useRef(null);
  const gameStartTimeRef = useRef(null);

  const startGame = () => {
    clearInterval(timerRef.current);

    setQuestion(1);
    setScore(0);
    setStreak(0);
    setCorrectAnswers(0);
    setTotalTime(0);
    setCurrentQuestion(createQuestion());
    setOptions(createOptions());
    setTimeLeft(TIME_PER_QUESTION);

    gameStartTimeRef.current = Date.now();
    setStep("PLAYING");
  };

  const finishGame = () => {
    clearInterval(timerRef.current);

    const elapsed = gameStartTimeRef.current
      ? (Date.now() - gameStartTimeRef.current) / 1000
      : totalTime;

    setTotalTime(elapsed);
    setStep("RESULT");

    if (onGameComplete) {
      onGameComplete({
        username: username || "Player",
        score,
        accuracy: Math.round((correctAnswers / TOTAL_QUESTIONS) * 100),
        completionTime: elapsed,
      });
    }
  };

  const nextQuestion = () => {
    if (question >= TOTAL_QUESTIONS) {
      finishGame();
      return;
    }

    setQuestion((prev) => prev + 1);
    setCurrentQuestion(createQuestion());
    setOptions(createOptions());
    setTimeLeft(TIME_PER_QUESTION);
  };

  useEffect(() => {
    if (step !== "PLAYING") return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(timerRef.current);
          setStreak(0);
          nextQuestion();
          return TIME_PER_QUESTION;
        }

        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(timerRef.current);
  }, [step, question]);

  const handleAnswer = (selectedColor) => {
    clearInterval(timerRef.current);

    const isCorrect =
      selectedColor.name === currentQuestion.visualColor;

    const questionTime = TIME_PER_QUESTION - timeLeft;

    const newScore = isCorrect
      ? score + 10 + streak * 2
      : score;

    const newCorrectAnswers = isCorrect
      ? correctAnswers + 1
      : correctAnswers;

    const newStreak = isCorrect ? streak + 1 : 0;

    setScore(newScore);
    setCorrectAnswers(newCorrectAnswers);
    setStreak(newStreak);
    setTotalTime((prev) => prev + questionTime);

    if (question >= TOTAL_QUESTIONS) {
      const elapsed = gameStartTimeRef.current
        ? (Date.now() - gameStartTimeRef.current) / 1000
        : totalTime + questionTime;

      setTotalTime(elapsed);
      setStep("RESULT");

      if (onGameComplete) {
        onGameComplete({
          username: username || "Player",
          score: newScore,
          accuracy: Math.round(
            (newCorrectAnswers / TOTAL_QUESTIONS) * 100
          ),
          completionTime: elapsed,
        });
      }

      return;
    }

    setQuestion((prev) => prev + 1);
    setCurrentQuestion(createQuestion());
    setOptions(createOptions());
    setTimeLeft(TIME_PER_QUESTION);
  };

  const playAgain = () => {
    clearInterval(timerRef.current);
    setStep("INTRO");
  };

  if (step === "INTRO") {
    return (
      <div className="cc-game">
        <div className="cc-glow cc-glow-one" />
        <div className="cc-glow cc-glow-two" />

        <div className="cc-intro">
          <div className="cc-mini-label">REACTION GAME</div>

          <h1 className="cc-title">
            COLOR <span>CLASH</span>
          </h1>

          <p className="cc-subtitle">
            Don't read it. See it.
          </p>

          <div className="cc-example">
            <span className="cc-example-label">EXAMPLE</span>

            <div
              className="cc-example-word"
              style={{ color: "#22c55e" }}
            >
              BLUE
            </div>

            <p>
              Click <strong>GREEN</strong>
            </p>
          </div>

          <button className="cc-start-btn" onClick={startGame}>
            START GAME
          </button>
        </div>
      </div>
    );
  }

  if (step === "PLAYING") {
    const timerPercentage =
      (timeLeft / TIME_PER_QUESTION) * 100;

    return (
      <div className="cc-game">
        <div className="cc-glow cc-glow-one" />
        <div className="cc-glow cc-glow-two" />

        <div className="cc-play-area">
          <div className="cc-top-bar">
            <div>
              <div className="cc-small-heading">
                COLOR CLASH
              </div>

              <div className="cc-question">
                Question {question} / {TOTAL_QUESTIONS}
              </div>
            </div>

            <div className="cc-score-box">
              <span>SCORE</span>
              <strong>{score}</strong>
            </div>
          </div>

          <div className="cc-timer-wrapper">
            <div className="cc-timer-info">
              <span>TIME</span>
              <strong>{Math.ceil(timeLeft)}s</strong>
            </div>

            <div className="cc-timer-track">
              <div
                className="cc-timer-fill"
                style={{ width: `${timerPercentage}%` }}
              />
            </div>
          </div>

          <div className="cc-center">
            <div className="cc-instruction">
              CLICK THE <span>TEXT COLOR</span>
            </div>

            <div
              className="cc-word"
              style={{
                color: currentQuestion.visualColorValue,
              }}
            >
              {currentQuestion.word}
            </div>

            <div className="cc-options">
              {options.map((color) => (
                <button
                  key={color.name}
                  className="cc-option"
                  onClick={() => handleAnswer(color)}
                >
                  <span
                    className="cc-option-dot"
                    style={{
                      backgroundColor: color.value,
                    }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className="cc-bottom-bar">
            <span>
              STREAK
              <strong>{streak}</strong>
            </span>

            <span>{correctAnswers} correct</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cc-game">
      <div className="cc-glow cc-glow-one" />
      <div className="cc-glow cc-glow-two" />

      <div className="cc-result">
        <div className="cc-mini-label">
          GAME COMPLETE
        </div>

        <h1 className="cc-title">
          COLOR <span>CLASH</span>
        </h1>

        <div className="cc-final-score">
          <span>FINAL SCORE</span>
          <strong>{score}</strong>
        </div>

        <div className="cc-stats">
          <div className="cc-stat">
            <span>ACCURACY</span>
            <strong>
              {Math.round(
                (correctAnswers / TOTAL_QUESTIONS) * 100
              )}
              %
            </strong>
          </div>

          <div className="cc-stat">
            <span>CORRECT</span>
            <strong>
              {correctAnswers}/{TOTAL_QUESTIONS}
            </strong>
          </div>

          <div className="cc-stat">
            <span>TIME</span>
            <strong>{totalTime.toFixed(1)}s</strong>
          </div>
        </div>

        <button
          className="cc-start-btn"
          onClick={playAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}