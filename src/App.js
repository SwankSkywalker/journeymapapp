import React, { useState, useEffect } from 'react';
import LoadingPage from './components/Loader.js';
import logo from './logo.svg';
import './styling/global.css';
import './styling/LoadingPage.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); //Clear the timer
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />//Render the Loading comp while loading
      ):(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}
