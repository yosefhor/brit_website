import React, { useEffect, useState } from 'react';
import logo from "../logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from 'react-i18next';
import germanyFlag from '../germany-flag.ico';
import usaFlag from '../united-states-flag.ico';
import israelFlag from '../israel-flag.ico';
import Select from 'react-select';
import { Link } from "react-router-dom";

function Navbar() {
    const { t, i18n } = useTranslation();
    const savedLanguage = localStorage.getItem('language') || 'de';
    const [selectedLanguage, setSelectedLanguage] = useState(savedLanguage);
    useEffect(() => {
        const updateFlagOnResize = () => {
            const currentLanguage = localStorage.getItem('language') || 'de';
            setSelectedLanguage(currentLanguage);
        };
        window.addEventListener('resize', updateFlagOnResize);
        updateFlagOnResize();

        return () => {
            window.removeEventListener('resize', updateFlagOnResize);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        setSelectedLanguage(lng);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const options = [
        {
            value: 'de', label: (
                <div className="options">
                    <img src={germanyFlag} alt="German flag" aria-label="German" />
                </div>)
        },
        {
            value: 'en', label: (
                <div>
                    <img src={usaFlag} alt="USA flag" aria-label="English" />
                </div>)
        },
        {
            value: 'he', label: (
                <div>
                    <img src={israelFlag} alt="Israel flag" aria-label="Hebrew" />
                </div>)
        }
    ];

    const filteredOptions = options.filter(option => option.value !== savedLanguage);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            boxShadow: 'none',
            border: 'none',
            background: 'transparent',
        }),
        option: (provided) => ({
            ...provided,
            padding: '0.1em',
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        }),
        menu: (provided) => ({
            ...provided,
            width: 'auto',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            margin: '0px',
        }),
        menuList: (provided) => ({
            ...provided,
            paddingTop: '0px',
            paddingBottom: '0px',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0px',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0px',
        }),
        singleValue: (provided) => ({
            ...provided,
            minWidth: '3.1em',
        }),
    };

    return (
        <header className="sticky-top">
            <div className="container-fluid justify-content-between align-items-center d-flex px-md-5 border_header" style={{ background: '#e3eff7', height: '100px' }}>
                <div className="row align-items-center">
                    <Link to="/" className="col-auto" onClick={handleLinkClick}>
                        <img src={logo} alt="Logo" className="rounded-1 shadow" style={{ height: '6em' }} />
                    </Link>
                    <h1 className="main_text_color fst-italic fs-2 col">{t('header.title')}</h1>
                </div>
                <div className="desktop-flags d-md-flex">
                    <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('de')}><img alt="German flag" src={germanyFlag} />Deutsch</button>
                    <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('en')}><img alt="USA flag" src={usaFlag} />English</button>
                    <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('he')}><img alt="Israel flag" src={israelFlag} />עברית</button>
                </div>
                <Select className="mobile-flags" options={filteredOptions} defaultValue={options.find(option => option.value === selectedLanguage)} key={selectedLanguage} styles={customStyles} isSearchable={false} components={{ IndicatorSeparator: () => null }} onChange={(e) => changeLanguage(e.value)} />
            </div>
            <div className="bg-light">
                <nav className="ms-sm-3 navbar navbar-expand-sm px-2">
                    <button className="navbar-toggler" type="button" onClick={handleToggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
                        <div className="navbar-nav">
                            <Link className="nav-link active mx-md-2 main_text_color" aria-current="page" to="/" onClick={handleLinkClick}>{t('header.home')}</Link>
                            <Link className="nav-link mx-md-2 main_text_color" to="aboutMe" onClick={handleLinkClick}>{t('header.aboutMe')}</Link>
                            <Link className="nav-link mx-md-2 main_text_color" to="aboutBritMilah" onClick={handleLinkClick}>{t('header.aboutBritMilah')}</Link>
                            <Link className="nav-link mx-md-2 main_text_color" to="costs" onClick={handleLinkClick}>{t('header.costs')}</Link>
                            <Link className="nav-link mx-md-2 main_text_color" to="contact" onClick={handleLinkClick}>{t('header.contact')}</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
