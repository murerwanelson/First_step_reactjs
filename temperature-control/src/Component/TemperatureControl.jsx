import React, { useState } from 'react';
import './TemperatureControl.css';

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(20);

  const incrementTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decrementTemperature = () => {
    setTemperature(temperature - 1);
  };

  const getBackgroundColor = () => {
    if (temperature < 15) {
      return 'lightblue';
    } else if (temperature < 25) {
      return 'lightgreen';
    } else {
      return 'lightcoral';
    }
  };

  return (
    <div className="temperature-control" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="temperature-display">
        {temperature}°C
      </div>
      <div className="buttons">
        <button onClick={incrementTemperature}>+</button>
        <button onClick={decrementTemperature}>-</button>
      </div>
    </div>
  );
};

export default TemperatureControl;
