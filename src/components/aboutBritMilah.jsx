import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';

export default function AboutBritMilah() {
    const { t } = useTranslation();

    const ArtikelüberBeschneidung = useRef();
    const handleScroll = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 225,
        });
    };

    return (
        <div className='lead fw-normal'>
            <h1 className='my-4'>{t('about_brit_milah.header')}</h1>
            <div className=' accordion' id='accrParent'>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part1'><h3>{t('about_brit_milah.sections.0.title')}</h3></button>
                    </div>
                    <div id='part1' className=' bg-light accordion-collapse collapse show p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            {t('about_brit_milah.sections.0.content', { returnObjects: true }).map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <h4 className=' fw-normal'>{t('about_brit_milah.sections.0.reference')}<button className=' btn btn-link fs-4 pt-0 ps-0 btn-outline-light' onClick={() => { handleScroll(ArtikelüberBeschneidung) }} >{t('about_brit_milah.sections.0.link')}</button></h4>
                        </div>
                    </div>
                </div>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part2'><h3>{t('about_brit_milah.sections.1.title')}</h3></button>
                    </div>
                    <div id='part2' className=' bg-light accordion-collapse collapse p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            <p>
                                {t('about_brit_milah.sections.1.content.0')}
                            </p>
                            <h3>{t('about_brit_milah.sections.1.content.1')}</h3>
                            <p>
                                {t('about_brit_milah.sections.1.content.2')}
                            </p>
                            <h3>{t('about_brit_milah.sections.1.content.3')}</h3>
                            <p>
                                {t('about_brit_milah.sections.1.content.4')}
                            </p>
                            <h3>{t('about_brit_milah.sections.1.content.5')}</h3>
                            <p>
                                {t('about_brit_milah.sections.1.content.6')}
                            </p>
                            <h3>{t('about_brit_milah.sections.1.content.7')}</h3>
                            <p>
                                {t('about_brit_milah.sections.1.content.8')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part3'><h3>{t('about_brit_milah.sections.2.title')}</h3></button>
                    </div>
                    <div id='part3' className=' bg-light accordion-collapse collapse p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            {t('about_brit_milah.sections.2.content', { returnObjects: true }).map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part4'><h3>{t('about_brit_milah.sections.3.title')}</h3></button>
                    </div>
                    <div id='part4' className=' bg-light accordion-collapse collapse p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            <p>{t('about_brit_milah.sections.3.content.0')}</p>
                            <p>{t('about_brit_milah.sections.3.content.1')}</p>
                            <h3>{t('about_brit_milah.sections.3.content.2')}</h3>
                            <ul>
                                <li>{t('about_brit_milah.sections.3.content.3')}</li>
                                <li>{t('about_brit_milah.sections.3.content.4')}</li>
                                <li>{t('about_brit_milah.sections.3.content.5')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className=' mt-5 mb-0'>{t('about_brit_milah.GottHatImmerRecht.header')}</h3>
            <h6>{t('about_brit_milah.GottHatImmerRecht.author')}</h6>
            <div className=' bg-light rounded-3 mb-5 p-4 ' ref={ArtikelüberBeschneidung}>
                {t('about_brit_milah.GottHatImmerRecht.content', { returnObjects: true }).map((paragraph, index) => (
                    typeof paragraph === 'string' ? <p key={index}>{paragraph}</p> :
                        paragraph.type === 'ul' ? (
                            <ul key={index}>
                                {paragraph.content.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        ) : null
                ))}

                <p className=' font-italic'>{t('about_brit_milah.GottHatImmerRecht.signature')}</p>
            </div>

        </div >
    )
}

















// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const AboutBritMilah = () => {
//   const { t } = useTranslation();

//   return (
//     <div>
//       <h1>{t('about_brit_milah.title')}</h1>
//       <section>
//         <h2>{t('about_brit_milah.sections.meaning.title')}</h2>
//         {t('about_brit_milah.sections.meaning.content', { returnObjects: true }).map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//         <p dangerouslySetInnerHTML={{ __html: t('about_brit_milah.sections.meaning.more_info') }}></p>
//       </section>
//       <section>
//         <h2>{t('about_brit_milah.sections.process.title')}</h2>
//         {t('about_brit_milah.sections.process.content', { returnObjects: true }).map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </section>
//       <section>
//         <h2>{t('about_brit_milah.sections.benefits.title')}</h2>
//         {t('about_brit_milah.sections.benefits.content', { returnObjects: true }).map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </section>
//       <section>
//         <h2>{t('about_brit_milah.sections.mohel_benefits.title')}</h2>
//         {t('about_brit_milah.sections.mohel_benefits.content', { returnObjects: true }).map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//         <ul>
//           {t('about_brit_milah.sections.mohel_benefits.complaints', { returnObjects: true }).map((complaint, index) => (
//             <li key={index}>{complaint}</li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>{t('about_brit_milah.quote_section.title')}</h2>
//         {t('about_brit_milah.quote_section.content', { returnObjects: true }).map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default AboutBritMilah;
