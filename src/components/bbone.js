import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import '../styling/global.css';

const EasterEggOne = ({ unlockPosition }) => {

    const textRef =useRef(null);
    const [mousePos, setMousePos] = useRef({ x: 0, y: 0});
    const [isUnlocked, setIsUnlocked] = useRef(false);

    const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        if (textRef.current) {
            const tl = gsap.timeline({ repeat: -1, yoyo: true});

            //Select each letter and create the wave animation
            gsap.utils.toArray('.letter').forEach((letter, i) => {
                tl.to(letter, {
                    color: `hsl(${i * 30}, 100%, 50%'`,//rainbow color
                    y: -20, //move up
                    duration: 0.5,
                    ease: 'sine.out',
                    repeat: 1,
                    yoyo: true,
                    delay: i * 0.1 // stagger the start of each letter
                },0); // start all animations at the same time for a wave effect
            });

        }
        const isInLockArea =
        Math.abs(mousePos.x - unlockPosition.x) < 10 &&
        Math.abs(mousePos.y - unlockPosition.y) < 10;

        if (isInLockArea) {
            setIsUnlocked(true);
            setTimeout(() => setIsUnlocked(false), 15000); //15 second animation timer
        }
    }, []);

    return (
        <div onMouseMove={handleMouseMove} ref={textRef}>
            {isUnlocked && <div className='rainbowRoad'>journeymap</div>}
            {/* lock open animation class */}
            {<div className='lock' style={{ left: unlockPosition.x, top: unlockPosition.y}}></div>}
        </div>
    );
};

export default EasterEggOne;