import React, { useState, useEffect }from 'react';
import '../styling/global.css';

/* const easterEggOne = () => {

    const [mousePos, setMousePos] = useState({ x: null, y: null});
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleMouse = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY })
    };

    useEffect(() => {
        const lockPosition = { x: 100, y: 100}; //Replace with actual position of the "lock"
        const isInLockArea = Math.abs(mousePos.x - lockPosition.x) < 10 && Math.abs(mousePos.y - lockPosition.y) < 10;

        if (isInLockArea) {
            setIsUnlocked(true);
            setTimeout(() => setIsUnlocked(false), 15000); //15 seconds animation
        }
    }, [mousePos]);

    return (
        <div className='easterOneContainer' onMouseMove={handleMouse}>
            {isUnlocked && <div className='rainbow-wave'>journeymap</div>}
            <div className='lock' style={{ left: '100px', top: '100px' }}></div>

        </div>
    );
}; */

const LandingPage = () => {
    return (
        <div className='landing'>
            <header className='landing-header'>
                <h1>JOURNEYMAP</h1>
                <p>Let's build the journey of a lifetime.</p>
            </header>

            <div className='landing-interactive'>
                {/*interactive globe here*/}
            </div>

            <div className='landing-navigation-cues'>

            </div>
        </div>
    );
};

export default LandingPage;