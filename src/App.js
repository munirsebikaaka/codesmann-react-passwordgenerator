import { useState } from "react";

const lowerCase = "abcefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";

function App() {
  let [smallLetters, setSmallLetters] = useState("");
  function genSmall() {
    smallLetters += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(smallLetters);
  }
  function genBig() {
    smallLetters += upperCase[Math.floor(Math.random() * upperCase.length)];
    console.log(smallLetters);
  }
  return (
    <div>
      <SmallCase
        onGenSmall={genSmall}
        onSmallLetter={smallLetters}
        onGenBig={genBig}
      />
    </div>
  );
}
function SmallCase({ onGenSmall, onSmallLetter, onGenBig }) {
  return (
    <div>
      <h1>{onSmallLetter}</h1>
      <button onClick={onGenSmall}>ab</button>
      <button onClick={onGenBig}>AB</button>
    </div>
  );
}
export default App;
