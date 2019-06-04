import React from 'react';
import './App.css';

// component imports below

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (

    <div className='container'>
      <CalculatorDisplay text='0' />
      <ActionButton text='clear' />
      <NumberButton buttonStyle='factorial' text='&divide;' />
      <NumberButton buttonStyle='number' text='7' />
      <NumberButton buttonStyle='number' text='8' />
      <NumberButton buttonStyle='number' text='9' />
      <NumberButton buttonStyle='factorial' text='&times;' />
      <NumberButton buttonStyle='number' text='4' />
      <NumberButton buttonStyle='number' text='5' />
      <NumberButton buttonStyle='number' text='6' />
      <NumberButton buttonStyle='factorial' text='&minus;' />
      <NumberButton buttonStyle='number' text='1' />
      <NumberButton buttonStyle='number' text='2' />
      <NumberButton buttonStyle='number' text='3' />
      <NumberButton buttonStyle='factorial' text='+' />
      <ActionButton text='0' />
      <NumberButton buttonStyle='factorial' text='=' />

    </div>

  );
};

export default App;
