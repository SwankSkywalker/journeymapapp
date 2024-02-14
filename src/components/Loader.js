import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './styling/LoadingPage.css';

const LoadingPage = () => {
    const loadingRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        // Timeline that will manage the sequence of animations
        const tl = gsap.timeline();


        // Assuming i'm simulating loading and will replace this with actual loading log
        tl.to(loadingRef.current, {
            innerHTML: 100,
            duration: 2,
            snap: { innerHTML: 1 }, //Snap to integers to avoid decimal numbers during count
            ease: 'power1.out',
            onUpdate: () => updateProgressBar(loadingRef.current.innerHTML) //Update the progress bar width
        });
    },[]);

    const updateProgressBar = (progress) => {
        gsap.to(progressBarRef.current, {
            width: progress + '%',
            ease: 'power1.out',
            duration: 0.5,
        });
    };

    return (
        <div className='loading-container'>
            <div className='loading-number' ref={loadingRef}>0</div>
            <div className='loading-bar-outer'>
                <div className='loading-bar-inner' ref={progressBarRef}></div>
            </div>
        </div>
    );
};

export default LoadingPage;