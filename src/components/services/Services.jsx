import React from 'react';
import './Services.css';

import AboutBox from '../about/AboutBox';

import { FaDesktop, FaCode, FaBrain } from 'react-icons/fa';

const data = [
    {
        id: 1,
        icon: FaDesktop, // آیکون مناسب برای طراحی مدرن سایت
        title: "طراحی مدرن سایت",
        description: "ایجاد وبسایت‌های زیبا و کاربرپسند با استفاده از جدیدترین تکنیک‌های طراحی و تکنولوژی‌های روز، به گونه‌ای که تجربه کاربری بی‌نظیر و جذابی را ارائه دهد.",
    },
    
    {
        id: 2,
        icon: FaBrain, // آیکون مناسب برای توسعه هوش مصنوعی
        title: "توسعه هوش مصنوعی",
        description: "استفاده از الگوریتم‌های هوش مصنوعی برای بهبود عملکرد و ایجاد تجربه‌های جدید در محصولات دیجیتال.",
    },
    {
        id: 3,
        icon: FaCode, // آیکون مناسب برای طراحی محصول
        title: "طراحی محصول",
        description: "ایجاد و طراحی محصولات دیجیتال با توجه به نیازهای بازار و تجربه کاربری بهینه.",
    },
];


const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">خدمات</h2>
                
            <div className="services__container grid">
                {data.map(({ id, icon: Icon, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <Icon className='services__img' size={90} />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
            <AboutBox/>
        </section>
    )
}

export default Services;
