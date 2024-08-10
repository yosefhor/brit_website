import logo from "../logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from 'react-i18next';
import germanyFlag from '../germany-flag.ico';
import usaFlag from '../united-states-flag.ico';
import israelFlag from '../israel-flag.ico';
import Select from 'react-select';
import '../App.css';
import { Link } from "react-router-dom";

function Navbar() {
    const { t, i18n } = useTranslation();
    const savedLanguage = localStorage.getItem('language') || 'de';

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const options = [
        {
            value: 'de', label: (
                <div className=" options">
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
        <header className=" sticky-top">
            <div className="container-fluid bg-info-subtle justify-content-between align-items-center d-flex px-md-5" style={{ height: '100px' }}>
                <div className="row align-items-center">
                    <Link to="/" className=" col-auto">
                        <img src={logo} alt="Logo" className="rounded-1 shadow" style={{ height: '6em' }} />
                    </Link>
                    <h1 className="text-danger fst-italic fs-2 col">{t('header.title')}</h1>
                </div>
                <div className="desktop-flags d-md-flex ">
                    <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('de')}><img alt="German flag" src={germanyFlag} />Deutsch</button>
                    <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('en')}><img alt="USA flag" src={usaFlag} />English</button>
                    <button style={{ boxShadow: 'none', border: 'none' }} className="btn d-flex flex-column align-items-center" onClick={() => changeLanguage('he')}><img alt="Israel flag" src={israelFlag} />עברית</button>
                </div>
                <Select className="mobile-flags" options={filteredOptions} defaultValue={options.find(option => option.value === savedLanguage)} styles={customStyles} isSearchable={false} components={{ IndicatorSeparator: () => null }} onChange={(e) => changeLanguage(e.value)} />
            </div>
            <div className="bg-light">
                <nav className=" ms-sm-5 navbar navbar-expand-sm px-2">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <div className=" navbar-nav ">
                            <Link className="nav-link active mx-md-2" aria-current="page" to="/">{t('header.home')}</Link>
                            <Link className="nav-link mx-md-2" to="aboutMe">{t('header.aboutMe')}</Link>
                            <Link className="nav-link mx-md-2" to="aboutBritMilah">{t('header.aboutBritMilah')}</Link>
                            <Link className="nav-link mx-md-2" to="costs">{t('header.costs')}</Link>
                            <Link className="nav-link mx-md-2" to="contact">{t('header.contact')}</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Navbar