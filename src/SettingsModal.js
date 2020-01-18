import React, { useState } from 'react';
import './App.css';
import SettingsModalControl from './SettingsModalControl';

function SettingsModal(props) {
    const [message, setMessage] = useState();

    const onClick = (e) => {
        props.onClick(e.target.value)
    }

    const onChange = (text) => {
        setMessage(text);
    }

  return (
    <div>
      <SettingsModalControl onChange={onChange} />
      <button type='button' onClick={onClick} value={message}>
        Button inside modal
      </button>
    </div>
  ); 
}

export default SettingsModal;
