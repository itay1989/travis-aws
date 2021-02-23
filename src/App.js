import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          i was changed on the feature branch
        </p>
        <a
          className="App-link"
          href="https://github.com/itay1989/travisSetup-aws.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </header>
    </div>
  );
}

export default App;
