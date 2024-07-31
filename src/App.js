import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import AppRoute from './appRoute.jsx';
import { ToastContainer } from 'react-toastify';


const GlobalStyle = createGlobalStyle`body {direction: ${props => props.dir}}`;

function App() {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'he' || i18n.language === 'ar' ? 'rtl' : 'ltr';
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <GlobalStyle dir={dir} />
      <div className={`App ${dir}`}>
        <AppRoute />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
