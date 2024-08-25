import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Cost() {
    const { t } = useTranslation();

    return (
        <div>
            <h2 className='my-4 main_text_color'>{t('costs.title')}</h2>
            <div className='lead fw-normal'>
                {t('costs.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}
