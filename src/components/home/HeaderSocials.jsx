import React from 'react';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiTelegramLogoFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            {/* گیت‌هاب */}
            <a href='https://github.com/vihilbert' className='home__social-link' target='_blank' rel='noreferrer'>
                <AiFillGithub />
            </a>

            {/* لینکدین */}
            <a href='https://www.linkedin.com/in/hossein-akbari-97a008147/' className='home__social-link' target='_blank' rel='noreferrer'>
                <AiFillLinkedin />
            </a>

            {/* تلگرام */}
            <a href='https://t.me/HosseinAkbari2000' className='home__social-link' target='_blank' rel='noreferrer'>
                <PiTelegramLogoFill />
            </a>

            {/* ایمیل */}
            <a href='mailto:hossein1379akbari@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <HiOutlineMail />
            </a>

            {/* شماره تلفن */}
            <a href='tel:+989010540925' className='home__social-link' target='_blank' rel='noreferrer'>
                <FiPhoneCall />
            </a>
        </div>
    );
};

export default HeaderSocials;