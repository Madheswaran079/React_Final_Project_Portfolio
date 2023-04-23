import React from 'react';
import AboutImg from './Assets/About_img.jpeg';

import '../about.css';

function About()
{
    return(
        <div id='about'>
            <h1>About</h1>
            <div id='display'>
                <img src={AboutImg} alt="" />
            </div>
            <h6>A web developer is a skilled professional who specializes in building and maintaining websites using various programming languages and tools.</h6>
        </div>
    );
}

export default About;