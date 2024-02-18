import React from 'react';
import '../styling/global.css';

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