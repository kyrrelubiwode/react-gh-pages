import React from 'react';
import './Grid.css';
const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className='image'>
        <img
            className="grid-image"
            src={require("../resources/1746650.png")}
            alt="something"
          />
        </div>
        <div className='text'>
          <p>Jeśli chodzi o te ikony to są zdecydowanie placeholdery, potrzebujemy grafiki które przełamią białe kolory</p>
        </div>
      </div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
    </div>
  );
};

export default Grid;