import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import TestComponent from './components/TestComponent.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="StepWave logo" />
        <TestComponent />
        <p>
          Welcome to StepWave.
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Come on in
        </a>
      </header>
  */}
      <Intro />
    </div>
  );
}

export default App;
