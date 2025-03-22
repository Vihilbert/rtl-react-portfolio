import React from 'react';
import './En-Home.css';
import Me from '../../assets/avatar-1.svg';
import EnHeaderSocials from './En-Headersocials';
import EnScrollDown from './En-Scrolldown';
import EnShapes from './En-Shapes';

const EnHome = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Greg Sithole</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <EnHeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <EnScrollDown />
            </div>

            <EnShapes />
        </section>
    )
}

export default EnHome