import React, { useState, useEffect } from 'react';
import LoadingPage from './components/Loader';
import logo from './logo.svg';
import './App.css';
import './components/styling/LoadingPage.css';

export default function App() {
  //Need to figure out the loading logic in order to add the component
  //to load before the main app

  /*const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Loading logic goes here
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);*/

  return (
    <div className="App">
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
    </div>
  );
}
