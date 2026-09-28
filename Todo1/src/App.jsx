import { useState } from "react";

function App() {
  const [isBlue, setIsBlue] = useState(false);
  const [inputText, setInputText] = useState("");
  const [textColor, setTextColor] = useState("#ff0000");
  const [resultText, setResultText] = useState("");
  const [number, setNumber] = useState(1);

  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  const showText = () => {
    setResultText(inputText);
  };

  const countUp = () => {
    setNumber(number + 1);
  };

  const countDown = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button
        onClick={toggleColor}
        style={{
          backgroundColor: isBlue ? "blue" : "red",
          color: "white",
        }}
      >
        {isBlue ? "Go Red" : "Go Blue"}
      </button>

      <hr />

      <input
        type="text"
        placeholder="กรอกข้อความที่นี่"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <input
        type="color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />

      <button onClick={showText}>Click</button>

      <p style={{ color: textColor }}>{resultText}</p>

      <hr />

      <div>{number}</div>

      <button onClick={countUp}>Count Up</button>
      <button onClick={countDown}>Count Down</button>
    </div>
  );
}

export default App;