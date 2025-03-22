import React from 'react';
import './En-Services.css';

import EnAboutBox from '../en-about/En-Aboutbox';

import { FaDesktop, FaCode, FaBrain } from 'react-icons/fa';

const data = [
    {
        id: 1,
        icon: FaDesktop, // آیکون مناسب برای طراحی مدرن سایت
        title: "Responsive design",
        description: "Ensuring that the website/mobile app is responsive across all platforms",
    },
    
    {
        id: 2,
        icon: FaBrain, // آیکون مناسب برای توسعه هوش مصنوعی
        title: "Web Development",
        description: "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        icon: FaCode, // آیکون مناسب برای طراحی محصول
        title: "Mobile Development",
        description: "Ensuring that a mobile app meets the correct standards, and also ensuring it's well maintainedاد و طراحی محصولات دیجیتال با توجه به نیازهای بازار و تجربه کاربری بهینه.",
    },
];


const EnServices = () => {
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
            <EnAboutBox/>
        </section>
    )
}

export default EnServices;


