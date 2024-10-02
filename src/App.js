import { useState } from "react";

const lowerCase = "abcefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
const numbers = "0123456789";
const symbols = `,.<>/?!@#$%^&*()|'+-_=`;
let passwordLength = 8;

function App() {
  const [isLowerCase, setIsAdded] = useState(false);
  const [isUpperCase, setCapital] = useState(false);
  const [isNumber, setNum] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [selectedAllNeeded, setSelectedAllNeeded] = useState(false);
  let [allCase, setAllCase] = useState("");
  let [password, setPassword] = useState("");
  function generationContainer() {
    if (isLowerCase) {
      allCase += lowerCase;
    }
    if (isUpperCase) {
      allCase += upperCase;
    }
    if (isNumber) {
      allCase += numbers;
    }
    if (isSymbol) {
      allCase += symbols;
    }
    for (let i = 0; i < passwordLength; i++) {
      password += allCase[Math.floor(Math.random() * allCase.length)];
    }
  }
  generationContainer();

  function toggleSmall() {
    setIsAdded(true);
  }

  function toggleCapital() {
    setCapital(true);
  }
  function toggleNum() {
    setNum(true);
  }
  function toggleSymbols() {
    setIsSymbol(true);
  }
  function generateFinalPassword() {
    setSelectedAllNeeded(true);
  }
  function setInitialStatesOfUsedStates() {
    setIsAdded(false);
    setCapital(false);
    setIsSymbol(false);
    setNum(false);
    setSelectedAllNeeded(false);
    setAllCase("");
    setPassword("");
    setPassword("");
  }
  return (
    <div className="app">
      <h1>password generator</h1>
      <div className="inputs">
        <p>{selectedAllNeeded ? password : "Press  the buttons bellow."}</p>
      </div>
      <div className="control-btn">
        <div>
          <button onClick={toggleSmall}>
            {isLowerCase ? "Checked" : "abcdefg"}
          </button>
          <button onClick={toggleCapital}>
            {isUpperCase ? "Checked" : "ABCDEF"}
          </button>
        </div>
        <div>
          <button onClick={toggleNum}>
            {isNumber ? "Checked" : "0123456"}
          </button>
          <button onClick={toggleSymbols}>
            {isSymbol ? "Checked" : "$%&@#!"}
          </button>
        </div>
      </div>
      <div className="ac-btn">
        <button className="gen" onClick={generateFinalPassword}>
          Generate
        </button>
        <button className="res" onClick={setInitialStatesOfUsedStates}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
