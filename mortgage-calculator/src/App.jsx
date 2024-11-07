import { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
  const [years, setYears] = useState(null);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [resultCalculated, setResultCalculated] = useState(false);

  function calculateMonthlyMortgage(principal, annualInterestRate, years) {
    const monthlyRate = annualInterestRate / 100 / 12;
    const totalPayments = years * 12;

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    return monthlyPayment.toFixed(2);
  }

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.id === "principal") {
      setPrincipal(value);
    } else if (e.target.id === "interest-rate") {
      setInterestRate(value);
    } else if (e.target.id === "loan-term") {
      setYears(value);
    }
  };

  const handleclick = () => {
    const result = calculateMonthlyMortgage(principal, interestRate, years);
    setMonthlyPayment(result);
    setResultCalculated(true); 
  };

  return (
    <div className="mortgage-calculator">
      <h1>Mortgage calculator</h1>
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="principal">Principal Loan Amount</label>
          <input
            type="number"
            id="principal"
            value={principal} 
            onChange={handleInput}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="interest-rate">Interest Rate (in %)</label>
          <input
            type="number"
            id="interest-rate"
            value={interestRate} 
            onChange={handleInput}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="loan-term">Length of Loan (years)</label>
          <input
            type="number"
            id="loan-term"
            value={years}
            onChange={handleInput}
            className="input-field"
          />
        </div>
      </div>
      <button className="calculate-btn" onClick={handleclick}>
        Calculate
      </button>

      {resultCalculated && (
        <div className="result">
          <h2>
            Your monthly mortgage payment will be :{" "}
            <span style={{color: "blue"}}>${monthlyPayment}</span>{" "}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
