import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 10,
    duration: 10,
  });
  console.log(userInput);

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!validInput && (
        <p className="center">Please enter a duration greater than zero!!</p>
      )}
      {validInput && <Results input={userInput}></Results>}
    </>
  );
}

export default App;
