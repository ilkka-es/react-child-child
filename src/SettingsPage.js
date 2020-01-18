import React from 'react';
import './App.css';
import SettingsModal from './SettingsModal';

function SettingsPage() {
  const handleClick = message => {
    console.log(message);
  }

  return (
    <div className='App'>
      <SettingsModal onClick={handleClick} />
    </div>
  );  
}

export default SettingsPage;
