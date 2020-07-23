import React, { useState } from 'react';
import IntroImage from '../img/FactoryImage1.png';

const Intro = (props) => {
    return (
        <div className="intro">
            <img className="intro-image" alt="automated factory" src={IntroImage} />
            <h1 className="intro-text">
                Data driven<br />
                AI-based<br />
                Discovery Platform<br />
                for Manufacturers
            </h1>
            {/*<h2 className="intro-text">
                AI-based
            </h2>
            <h2 className="intro-text">
                Discovery Platform for Manufacturers
            </h2>
    */}
        </div>
    )
}

export default Intro;