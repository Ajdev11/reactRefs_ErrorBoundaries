import React from 'react';

function Hero(props) {
    if(props.heroName ==="Moses"){
        throw new Error('Not an Hero')
    }
    return ( 
      <h1>{props.heroName}</h1>
     );
}

export default Hero;
