import React, { useState } from 'react';

import QRCode from 'react-qr-code';
import './App.css';

function App() {

  const [inputVaue, setInputValue] = useState('');

  //https://github.com/PapakhinaIrina

  return (
    <div className="container">
      <h1 className='title'>Содержимое QR-кода </h1>
      <input 
        className='input' 
        placeholder='Введите ссылку для QR-кода'
        onChange={e => setInputValue(e.target.value)}>
      </input>
      <QRCode 
        className='code'
        value={inputVaue}
      />
    </div>
  );
}
export default App;
