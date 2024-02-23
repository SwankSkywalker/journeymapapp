import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import '../styling/global.css';

const EasterEggOne = ({ unlockPosition }) => {

    const textRef = useRef(null);

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
    }, []);

    return (
        <div className='rainbowRoad' ref={textRef}>
            {<>
                <span>J</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
                <span>N</span>
                <span>E</span>
                <span>Y</span>
                <span>M</span>
                <span>A</span>
                <span>P</span>
            </>}
            {'journeymap'.split('').map((letter, index) => (
                <span key={index} className='letter'>{letter}</span>
                ))
            }
            {<div className='lock' style={{ left: unlockPosition.x, top: unlockPosition.y}}></div>}
        </div>
    );
};

export default EasterEggOne;