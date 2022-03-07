
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const url= `https://api.adviceslip.com/advice`;

  const[quote, setQuote] = useState('Just do it!');

  useEffect(()=>{
    getQuote();
  }, [])

  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data.slip.advice);
  }

  return (
    <div className="App">
        <div className="container">
          <p>{quote}</p>
          <button onClick={getQuote}>Get Quote</button>
          </div>
    </div>
  );
}

export default App;
