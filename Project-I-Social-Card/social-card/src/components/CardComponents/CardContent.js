import React from 'react';
import './Card.css';

import CardContentTitle from './CardContentTitle';
import CardContentText from './CardContentText';
import CardContentlink from './CardContentlink';


const CardContent = () => {
    return (
        <div>
            <CardContentTitle />
            <CardContentText />
            <CardContentlink />
        </div>
    );
};

export default CardContent;