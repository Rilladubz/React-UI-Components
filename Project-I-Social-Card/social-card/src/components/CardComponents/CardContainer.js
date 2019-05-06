import React from 'react';
import './Card.css';


// Component Imports
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
    return (
        <div>
            <a href="https://reactjs.org">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    );
};

export default CardContainer;