import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='my-4 text_header'>
        {t('home.welcome')}
      </h1>
      <div className='lead fw-normal'>
        <p>
          {t('home.introduction')}
        </p>
        <p>
          {t('home.content.0.paragraph')}
        </p>
        <div>
          {t('home.content.1.paragraph')}<Link className=' btn btn-link fs-5 pt-0 px-2' onMouseDown={(e) => e.preventDefault()} to='/contact'>{t('home.content.2.link')}</Link>{t('home.content.3.paragraph')}
        </div>
        <p>
          {t('home.content.4.paragraph')}
        </p>
        <p>
          {t('home.content.5.paragraph')}
        </p>
      </div>
    </>
  )
}
