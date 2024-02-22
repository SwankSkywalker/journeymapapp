import React, { useState, useEffect } from 'react';
//import gsap from 'gsap';
import '../styling/global.css';

const EasterEggOne = ({ unlockPosition }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0});
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        const isInLockArea =
        Math.abs(mousePos.x - unlockPosition.x) < 10 &&
        Math.abs(mousePos.y - unlockPosition.y) < 10;

        if (isInLockArea) {
            setIsUnlocked(true);
            setTimeout(() => setIsUnlocked(false), 15000); //15 second animation timer
        }
    }, [mousePos, unlockPosition]);

    return (
        <div onMouseMove={handleMouseMove}>
            {isUnlocked && <div className='rainbowRoad'>journeymap</div>}
            {/* lock open animation class */}
            {<div className='lock' style={{ left: unlockPosition.x, top: unlockPosition.y}}></div>}
        </div>
    );
};

export default EasterEggOne;