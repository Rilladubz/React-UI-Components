import React from 'react';
import './App.css';



import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <div className="row">
        <ActionButton text="clear" />
        <NumberButton buttonStyle="number" text="&divide;" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="7" />
        <NumberButton buttonStyle="number" text="8" />
        <NumberButton buttonStyle="number" text="9" />
        <NumberButton buttonStyle="number" text="&times;" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="&divide;" />
        <NumberButton buttonStyle="number" text="&divide;" />
        <NumberButton buttonStyle="number" text="&divide;" />
        <NumberButton buttonStyle="number" text="&divide;" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="&divide;" />
        <NumberButton buttonStyle="number" text="&divide;" />
        <NumberButton buttonStyle="number" text="&divide;" />
        <NumberButton buttonStyle="number" text="&divide;" />
      </div>
      <div className="row">
        <ActionButton text="clear" />
        <NumberButton buttonStyle="number" text="&divide;" />
      </div>

    </div>
  );
};

export default App;
