import { useState } from "react";

export default function App() {
  const [compMove, setCompmove] = useState(0);
  const [userMove, setUsermove] = useState(0);
  const [userscore, setuserScore] = useState(0);
  const [compscore, setcompScore] = useState(0);

  const emojidata = {
    0: "🪨",
    1: "📄",
    2: "✂",
  };

  function handleClick(move) {
    const comp = Math.floor(Math.random() * 3);

    setUsermove(move);
    setCompmove(comp);

    if (move === comp) return;

    if (
      (move === 0 && comp === 2) ||
      (move === 1 && comp === 0) ||
      (move === 2 && comp === 1)
    ) {
      setuserScore((prev) => prev + 1);
    } else {
      setcompScore((prev) => prev + 1);
    }
  }

  return (
    <>
      <h1>You : Computer</h1>
      <h2>
        {emojidata[userMove]} : {emojidata[compMove]}
      </h2>
      <h2>
        {userscore} : {compscore}
      </h2>

      <button onClick={() => handleClick(0)}>🪨</button>
      <button onClick={() => handleClick(1)}>📄</button>
      <button onClick={() => handleClick(2)}>✂</button>
    </>
  );
}