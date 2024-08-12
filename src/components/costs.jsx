import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Cost() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='my-4 text_header'>{t('costs.title')}</h1>
            <div className='lead fw-normal'>
                {t('costs.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}
