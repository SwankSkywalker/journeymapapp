import React, { useState, useEffect } from 'react';
import LoadingPage from './components/Loader.js';
import LandingPage from './components/LandingPage.js'
import EasterEggOne from './components/bbone.js';
import './assets/jfry.jpeg';
import './styling/global.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const unlockPosition = { x: 625, y: 530}; //replace with actual lock position

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
        <>
          <LandingPage />
          <EasterEggOne unlockPosition={unlockPosition} />
        </>
      )}
    </div>
  );
}
