import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

import EnSidebar from './en-components/en-sidebar/En-Sidebar';
import EnHome from './en-components/en-home/En-Home';
import EnAbout from './en-components/en-about/En-About';
import EnServices from './en-components/en-services/En-Services';
import EnResume from './en-components/en-resume/En-Resume';
import EnPortfolio from './en-components/en-portfolio/En-Portfolio';
import EnTestimonials from './en-components/en-testimonials/En-Testimonials';
import EnContact from './en-components/en-contact/En-Contact';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [language, setLanguage] = useLocalStorage('language', 'fa');

    return (
        <Router>
            <div className={`app ss02 ${language === 'fa' ? 'rtl' : 'ltr'}`} data-theme={theme}>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
                <Routes>
                    <Route path="/" element={<Navigate to={`/${language}`} replace />} />
                    <Route path="/fa" element={<PersianPage theme={theme} setTheme={setTheme} setLanguage={setLanguage} />} />
                    <Route path="/en" element={<EnglishPage theme={theme} setTheme={setTheme} setLanguage={setLanguage} />} />
                </Routes>
            </div>
        </Router>
    );
}

function PersianPage({ theme, setTheme, setLanguage }) {
    return (
        <div className="page-container">
            <Sidebar theme={theme} switchTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            
            <main className='main'>
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
        </div>
    );
}

function EnglishPage({ theme, setTheme, setLanguage }) {
    return (
        <div className="page-container">
            <EnSidebar theme={theme} switchTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            
            <main className='main'>
                <EnHome />
                <EnAbout />
                <EnServices />
                <EnResume />
                <EnPortfolio />
                <EnTestimonials />
                <EnContact />
            </main>
        </div>
    );
}

function LanguageSwitcher({ language, setLanguage }) {
    const navigate = useNavigate();

    const toggleLanguage = () => {
        setLanguage(prevLang => {
            const newLang = prevLang === 'fa' ? 'en' : 'fa';
            navigate(`/${newLang}`);
            return newLang;
        });
    };

    return (
        <button className="language-switcher" onClick={toggleLanguage}>
            {language === 'en' ? 'فا' : 'En'}
        </button>
    );
}

export default App;
