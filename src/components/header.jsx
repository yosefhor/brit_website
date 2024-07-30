import React, { useEffect, useRef, useState } from "react";
import logo from "../logo.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from 'react-i18next';
import germanyFlag from '../germany-flag.ico';
import usaFlag from '../united-states-flag.ico';
import israelFlag from '../israel-flag.ico';
import Select from 'react-select';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const savedLanguage = localStorage.getItem('language') || 'de';

    const options = [
        {
            value: 'de', label: (
                <div className=" options">
                    <img src={germanyFlag} alt="German flag" />
                </div>)
        },
        {
            value: 'en', label: (
                <div>
                    <img src={usaFlag} alt="USA flag" />
                </div>)
        },
        {
            value: 'he', label: (
                <div>
                    <img src={israelFlag} alt="Israel flag" />
                </div>)
        }
    ];

    const filteredOptions = options.filter(option => option.value !== savedLanguage);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            minHeight: '35px',
            border: 'none',
            boxShadow: 'none',
            padding: '0px',
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
        }),
        option: (provided, state) => ({
            ...provided,
            padding: '0.2em',
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
        indicatorsContainer: (provided) => ({
            ...provided,
            padding: '0px',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0px',
        }),
    };

    const Header = useRef();
    // const headerHeight = Header.current.offsetHeight;
    // console.log(headerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header ref={Header} className=" sticky-top">
            <div>
                <div className=" px-3 container-fluid align-content-center bg-info-subtle" style={{ height: '6em' }}>
                    <div className="row align-items-center">
                        <div className="col-auto mx-3 d-none d-md-inline-flex">
                            <a href="/">
                                <img src={logo} alt="Logo" className="me-5 rounded-3 shadow" style={{ height: '5em' }} />
                            </a>
                        </div>
                        <div className="col d-flex justify-content-between align-items-center">
                            <h1 className="text-danger fs-2">{t('header.title')}</h1>
                            <div className="d-none d-md-flex mx-4">
                                <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('de')}><img className="" src={germanyFlag} />Deutsch</button>
                                <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('en')}><img className="" src={usaFlag} />English</button>
                                <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('he')}><img className="" src={israelFlag} />עברית</button>
                            </div>
                            {windowWidth < 768 && (
                                <Select options={filteredOptions} defaultValue={options.find(option => option.value === savedLanguage)} styles={customStyles} isSearchable={false} components={{ IndicatorSeparator: () => null }} onChange={(e) => changeLanguage(e.value)} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <nav className="container navbar navbar-expand-sm px-2">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className=" navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">{t('header.home')}</a>
                            <a className="nav-link" href="aboutMe">{t('header.aboutMe')}</a>
                            <a className="nav-link" href="aboutBritMilah">{t('header.aboutBritMilah')}</a>
                            <a className="nav-link" href="costs">{t('header.costs')}</a>
                            <a className="nav-link" href="contact">{t('header.contact')}</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Navbar