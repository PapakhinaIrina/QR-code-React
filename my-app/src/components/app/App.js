import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import Buttons from '../buttons/buttons';
import './App.css';

function App() {
  const [inputVaue, setInputValue] = useState('');
  
  return (
    <div className='container'>
        <div className='code_box'>
          <h1 className='title'> Содержимое QR-кода </h1>
        <input 
          className='input' 
          placeholder='Введите ссылку для QR-кода'
          onChange={e => setInputValue(e.target.value)}>
        </input>


        <QRCode 
          className='qr_code'
          value={inputVaue}
          />

          <Buttons/>
          </div>
    </div>
  )
};

export default App;