import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='my-4'>
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
          {t('home.content.1.paragraph')}<a className=' btn btn-link fs-5 pt-0 px-2' onMouseDown={(e) => e.preventDefault()} href='/contact'>{t('home.content.2.link')}</a>{t('home.content.3.paragraph')}
        </div>
        <p>
          {t('home.content.4.paragraph')}
        </p>
        <p>
          {t('home.content.5.paragraph')}
        </p>
      </div>
    </div>
  )
}
