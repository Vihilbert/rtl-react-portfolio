import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';

import { SiNextdotjs, SiReact, SiPython, SiPytorch, SiTensorflow } from 'react-icons/si';
const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section fullscreen" id="about">
            <h2 className="section__title">درباره من  </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        سلام! من حسین هستم، یک برنامه‌نویس فرانت‌اند که به دنیای فناوری و هوش مصنوعی علاقه دارم. تخصص من در React و Next.js است و تمرکز زیادی روی هوش مصنوعی دارم، به ویژه در زمینه پردازش تصویر و سیگنال. عاشق حل مسائل پیچیده و ساخت راه‌حل‌های نوآورانه‌ای هستم که بتونه زندگی رو راحت‌تر کنه.

در حال حاضر، دارم روی گسترش پورتفولیوم کار می‌کنم و پروژه‌های جدیدی رو می‌سازم که به اینجا اضافه کنم. همچنین تمام تلاشم رو می‌کنم تا در تیم فعلی‌ام همکار مؤثری باشم و همیشه در حال یادگیری و رشد برای کمک به موفقیت تیم هستم.

تکنولوژی‌هایی که اخیراً باهاشون کار کردم عبارتند از:
                        </p>
                        <ul className="about__list" dir='ltr'>
                        <li><SiNextdotjs /> Next.js</li>
                        <li><SiReact /> React</li>
                        <li><SiPython /> Python</li>
                        <li><SiPytorch /> PyTorch</li>
                        <li><SiTensorflow /> TensorFlow</li>
                        </ul>
                        
                    </div>

                    <div className="about__skills grid " >
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">توسعه نرم افزار</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">طراحی محصول</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">هوش مصنوعی</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                        <button className="btn" onClick={downloadResume}>دانلود رزومه </button>
                    </div> 
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About