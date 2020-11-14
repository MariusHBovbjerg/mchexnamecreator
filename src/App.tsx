import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Gamer } from './components/Gamer/Gamer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gamer textToDisplay="lol"/>
          
      </header>
    </div>
  );
}

export default App;
