import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <>
            <h2 className='my-4 main_text_color'>{t('about_me.title')}</h2>
            <ul className='lead fw-normal'>
                {t('about_me.points', { returnObjects: true }).map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <div className='lead fw-normal'>
                {t('about_me.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </>
    )
}
