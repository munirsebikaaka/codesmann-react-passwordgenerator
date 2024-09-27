import { useState } from "react";

const lowerCase = "abcefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
const numbers = "0123456789";
let allCase = "";

function App() {
  const [isAdded, setIsAdded] = useState(false);
  const [capitals, setCapital] = useState(false);
  const [num, setNum] = useState(false);
  if (isAdded) {
    allCase += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  if (capitals) {
    allCase += upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  if (num) {
    allCase += numbers[Math.floor(Math.random() * numbers.length)];
  }

  function toggleSmall() {
    setIsAdded(true);
  }

  function toggleCapital() {
    setCapital(true);
  }
  function toggleNum() {
    setNum(true);
  }
  return (
    <div>
      <h1>{allCase}</h1>
      <button onClick={toggleSmall}>a-z</button>
      <button onClick={toggleCapital}>A-Z</button>
      <button onClick={toggleNum}>0-1</button>
    </div>
  );
}

export default App;
