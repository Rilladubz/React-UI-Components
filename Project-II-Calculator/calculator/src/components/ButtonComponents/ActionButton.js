import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div>
            <button className="Action-Btn">{props.text}</button>
        </div>
    )
};

export default ActionButton;