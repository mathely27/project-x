
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MemoryTyping.css";

const subjects = [
  "The young explorer",
  "A curious scientist",
  "A group of students",
  "The experienced traveler",
  "The little village",
  "A talented musician",
  "The ambitious inventor",
  "A team of researchers"
];

const actions = [
  "discovered an unusual path",
  "visited a beautiful old library",
  "explored a distant island",
  "started an interesting experiment",
  "walked through a peaceful forest",
  "travelled across the countryside",
  "found an ancient map",
  "noticed something unusual"
];

const places = [
  "near the edge of the forest",
  "beside a quiet river",
  "inside a small mountain village",
  "near an old stone building",
  "at the top of a distant hill",
  "beside the sea"
];

const endings = [
  "The experience taught everyone to remain patient and curious.",
  "Nobody expected the ordinary day to become so memorable.",
  "By sunset, everyone had learned something completely new.",
  "The discovery gave them a reason to continue exploring."
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateParagraph() {
  const sentences = [];

  for (let i = 0; i < 2; i++) {
    const sentence =
      `${randomItem(subjects)} ` +
      `${randomItem(actions)} ` +
      `${randomItem(places)}.`;

    sentences.push(sentence);
  }

  sentences.push(randomItem(endings));

  return sentences.join(" ");
}

function MemoryTyping() {
  const navigate = useNavigate();
  const [gameTime, setGameTime] = useState(15);
  const [phase, setPhase] = useState("setup");
  const [paragraph, setParagraph] = useState("");
  const [typedText, setTypedText] = useState("");
  const [countdown, setCountdown] = useState(10);
  const [timeLeft, setTimeLeft] = useState(60);
  const [result, setResult] = useState(null);

  function startGame() {
    const newParagraph = generateParagraph();
    setParagraph(newParagraph);
    setTypedText("");
    setCountdown(10);
    setTimeLeft(gameTime);
    setResult(null);
    setPhase("memorize");
  }

  useEffect(() => {
    if (phase !== "memorize") {
      return;
    }

    if (countdown === 0) {
      setPhase("typing");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [phase, countdown]);

  useEffect(() => {
    if (phase !== "typing") {
      return;
    }

    if (timeLeft === 0) {
      finishGame();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [phase, timeLeft]);

  function finishGame(finalText = typedText) {
    const typedWords = finalText
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const originalWords = paragraph
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    let correctCharacters = 0;

    for (
      let i = 0;
      i < Math.min(finalText.length, paragraph.length);
      i++
    ) {
      if (finalText[i] === paragraph[i]) {
        correctCharacters++;
      }
    }

    const accuracy =
      finalText.length === 0
        ? 0
        : (correctCharacters / finalText.length) * 100;

    const wordsTyped = typedWords.length;

    let correctWords = 0;

    for (let i = 0; i < typedWords.length; i++) {
      if (typedWords[i] === originalWords[i]) {
        correctWords++;
      }
    }

    const memoryScore =
      originalWords.length === 0
        ? 0
        : (correctWords / originalWords.length) * 100;

    const minutes = gameTime / 60;

    const wpm =
      minutes === 0
        ? 0
        : wordsTyped / minutes;

    setResult({
      wpm: Math.round(wpm),
      accuracy: Math.round(Math.min(100, accuracy)),
      memoryScore: Math.round(memoryScore),
      words: wordsTyped
    });

    setPhase("result");
  }

  function handleTyping(event) {
    const value = event.target.value;

    setTypedText(value);

    clearTimeout(window.typingTimer);

    window.typingTimer = setTimeout(() => {
      finishGame(value);
    }, 3000);
  }

  function playAgain() {
    setParagraph("");
    setTypedText("");
    setResult(null);
    setCountdown(5);
    setTimeLeft(gameTime);
    setPhase("setup");
  }

  return (
    <div className="memory-game">
      <header className="memory-header">
        <div className="memory-logo">
          <span className="brain-icon">🧠</span>
          <span className="logo-divider"></span>
          <span>MEMORY TYPING</span>
        </div>
      </header>

      {phase === "setup" && (
        <div className="memory-setup">
          <div className="hero-decoration"></div>

          <h1>
            MEMORY
            <br />
            TYPING
          </h1>

          <div className="title-rays">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="hero-line">
            <span></span>
            <span className="mini-brain">🧠</span>
            <span></span>
          </div>

          <p>
            Memorize the passage before it disappears.
            <br />
            Then type everything you remember.
          </p>

          <button
            className="start-game"
            onClick={startGame}
          >
            START MEMORY TEST
            <span className="arrow">→</span>
          </button>
        </div>
      )}

      {phase === "memorize" && (
        <div className="memorize-screen">
          <div className="top-info">
            <span>MEMORIZE</span>
            <strong>{countdown}</strong>
          </div>

          <h2>REMEMBER THIS PASSAGE</h2>

          <div className="paragraph">
            {paragraph}
          </div>
        </div>
      )}

      {phase === "typing" && (
        <div className="typing-screen">
          <div className="typing-header">
            <div>
              <span>MEMORY TYPING</span>
              <h2>TYPE WHAT YOU REMEMBER</h2>
            </div>

            <div className="game-timer">
              {timeLeft}
              <small>SEC</small>
            </div>
          </div>

          <textarea
            autoFocus
            value={typedText}
            onChange={handleTyping}
            className="typing-box"
            placeholder="Start typing here..."
          />
        </div>
      )}

      {phase === "result" && result && (
        <div className="result-screen">
          <div className="memory-tag">
            TEST COMPLETE
          </div>

          <h1>YOUR RESULT</h1>

          <div className="results">
            <div className="result-card">
              <span>WPM</span>
              <strong>{result.wpm}</strong>
            </div>

            <div className="result-card">
              <span>ACCURACY</span>
              <strong>{result.accuracy}%</strong>
            </div>

            <div className="result-card">
              <span>MEMORY</span>
              <strong>{result.memoryScore}%</strong>
            </div>

            <div className="result-card">
              <span>WORDS</span>
              <strong>{result.words}</strong>
            </div>
          </div>

          <button
            className="start-game"
            onClick={playAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}

export default MemoryTyping;