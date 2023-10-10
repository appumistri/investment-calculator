import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import InvestmentInputForm from "./components/InvestmentInputForm";
import InvestmentReturnsList from "./components/InvestmentReturnsList";
import styles from "./index.module.css";

function App() {

  const [yearlyReturns, setYearlyReturns] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlyContribution'];
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];
    let investedCapital = currentSavings;
    let totalinterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      totalinterest += yearlyInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalinterest: totalinterest,
        investedCapital: investedCapital 
      });
    }

    return yearlyData;
  };

  const investmentSubmitHandler = (investmentData) => {
    setYearlyReturns(calculateHandler(investmentData));
  };

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentInputForm onSubmit={investmentSubmitHandler} />
      <InvestmentReturnsList yearlyReturns={yearlyReturns} />
    </div>
  );
}

export default App;
