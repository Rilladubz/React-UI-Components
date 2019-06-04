import React from 'react';
import './CalculatorContainer.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorContainer = () => {
    return (
        <div className='container'>
            <CalculatorDisplay />
            <ActionButton />
        </div>
    );
};

export default CalculatorContainer;