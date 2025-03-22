import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

import HeroImage from './Hero';
const Home = () => {
    
    return (
       <>
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">حسین اکبری</h1>
                <span className="home__education">یک توسعه دهنده نرم افزار</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> ارتباط با من</a>

                <ScrollDown />
            </div>

        </section>
        {/* <div className='hero__background'>
        <HeroImage/>
        </div> */}
       </>
    )
}

export default Home