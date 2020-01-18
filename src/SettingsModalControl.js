import React, { useState } from 'react';
import './App.css';

function SettingsModalControl(props) {
    const [sliderValue, setSliderValue] = useState(50);


    const handleChange = (e) => {
        props.onChange(e.target.value);
        setSliderValue(e.target.value)
    }

  return (
    <div>
      <input 
        type="range" 
        min="0"
        max="100" 
        value={sliderValue} 
        onChange={handleChange}
        step="1" 
      />
    </div>
  ); 
}

export default SettingsModalControl;
