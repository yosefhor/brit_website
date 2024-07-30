import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
    const { t } = useTranslation();

    const [showAlert, setShowAlert] = useState(false);

    const [name, setName] = useState('');
    const [lineNumber, setLineNumber] = useState('');
    const [prefix, setPrefix] = useState('+49');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const clearFields = () => {
        setName('');
        setLineNumber('');
        setPrefix('+49');
        setPhoneNumber(``);
        setEmail('');
        setMessage('');
    };

    const form = useRef();

    emailjs.init('bId1Vj9Ukr8AMku4Q');

    const sendWhatsAppNotification = async (formData) => {
        const phoneNumber = '972552706269';
        const apiKey = '3815595';
        const lineNumberField = formData.lineNumber ? `\nline Number: ${formData.lineNumber}` : '';
        const emailField = formData.email ? `\nEmail: ${formData.email}` : '';
        const messageField = formData.message ? `\nMessage: ${formData.message}` : '';
        const whatsappMessage = `מישהו בדיוק פנה אליך דרך האתר:\nSomeone just contacted you through the website:\nName: ${formData.name}${lineNumberField}\nPhone: ${formData.prefix} ${formData.phoneNumber}${emailField}${messageField}`;

        const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('WhatsApp notification sent successfully');
        } catch (error) {
            console.error('Error sending WhatsApp notification:', error);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j0xo17o', 'template_oxlh861', form.current, 'bId1Vj9Ukr8AMku4Q')
            .then(() => {
                console.log('email sent successfully!');
                sendWhatsAppNotification({
                    name,
                    lineNumber,
                    prefix,
                    phoneNumber,
                    email,
                    message
                });
                console.log('whatsApp message sent successfully!');
                clearFields();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 10000);
                }, 500);
            }, (err) => {
                console.log('FAILED SEND EMAIL!', err);
            });
    };

    return (
        <div>
            {showAlert && (
                <Alert variant="success" className="mt-3">
                    {t('contact.message')}
                </Alert>
            )}
            <h1 className='mt-4'>{t('contact.title')}</h1>
            <div className='lead fw-normal'>
                <p>
                    <strong>{t('contact.content.rabbi.title')}</strong><br />
                    {t('contact.content.rabbi.description')}
                </p>
                <p>
                    {t('contact.content.contactInfo.landLine.title')}: <a href="tel:+49928151741">+49(0)9281-51741</a><br />
                    {t('contact.content.contactInfo.phone.title')}: <a href="tel:+491728551010">+49(0)172-8551010</a><br />
                    {t('contact.content.contactInfo.email.title')}: <a href="mailto:goldbergmirjam@gmail.com">goldbergmirjam@gmail.com </a><br />
                    {t('contact.content.contactInfo.homepage.title')}: <a href="http://www.beschneidung-mohel.de" target="_blank">www.beschneidung-mohel.de</a><br />
                </p>
                <div className='row-cols-xl-2'>
                    <p className='fw-medium'>
                        {t('contact.content.contactForm.description')}
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='form-label' htmlFor='name'>{t('contact.content.contactForm.labels.name.title')}<span className='text-danger'>*</span></label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input name='name' required className='form-control' type='text' placeholder={t('contact.content.contactForm.labels.name.placeholder')} value={name} onChange={(e) => { setName(e.target.value) }}></input>
                        </div>

                        <label className='form-label' htmlFor='lineNumber'>{t('contact.content.contactForm.labels.lineNumber.title')}</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="bi bi-telephone-fill"></i>
                            </span>
                            <input name='lineNumber' className='form-control' inputMode='numeric' type='text' placeholder={t('contact.content.contactForm.labels.lineNumber.placeholder')} value={lineNumber} onChange={(e) => { setLineNumber(e.target.value) }} onKeyDown={(event) => { if (/[A-Za-zא-ת]/.test(event.key) && event.key !== 'Backspace' && !(event.ctrlKey)) { event.preventDefault(); } }}></input>
                        </div>

                        <label className='form-label' htmlFor='phoneNumber'>{t('contact.content.contactForm.labels.phoneNumber.title')}<span className='text-danger'>*</span></label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="bi bi-tablet-fill"></i>
                            </span>
                            <select id='prefix' name='prefix' className='required col-3 input-group-text' value={prefix} onChange={(e) => { setPrefix(e.target.value) }}>
                                <option value="+49">Germany (+49)</option>
                                <option value="" disabled>──────────</option>
                                <option value="" disabled>EU countries:</option>
                                <option value="" disabled>──────────</option>
                                <option value="+43">Austria (+43)</option>
                                <option value="+32">Belgium (+32)</option>
                                <option value="+359">Bulgaria (+359)</option>
                                <option value="+385">Croatia (+385)</option>
                                <option value="+357">Cyprus (+357)</option>
                                <option value="+420">Czech Republic (+420)</option>
                                <option value="+45">Denmark (+45)</option>
                                <option value="+372">Estonia (+372)</option>
                                <option value="+358">Finland (+358)</option>
                                <option value="+33">France (+33)</option>
                                <option value="+30">Greece (+30)</option>
                                <option value="+36">Hungary (+36)</option>
                                <option value="+354">Iceland (+354)</option>
                                <option value="+353">Ireland (+353)</option>
                                <option value="+972">Israel (+972)</option>
                                <option value="+39">Italy (+39)</option>
                                <option value="+371">Latvia (+371)</option>
                                <option value="+370">Lithuania (+370)</option>
                                <option value="+352">Luxembourg (+352)</option>
                                <option value="+356">Malta (+356)</option>
                                <option value="+373">Moldova (+373)</option>
                                <option value="+377">Monaco (+377)</option>
                                <option value="+31">Netherlands (+31)</option>
                                <option value="+47">Norway (+47)</option>
                                <option value="+48">Poland (+48)</option>
                                <option value="+351">Portugal (+351)</option>
                                <option value="+40">Romania (+40)</option>
                                <option value="+7">Russia (+7)</option>
                                <option value="+378">San Marino (+378)</option>
                                <option value="+381">Serbia (+381)</option>
                                <option value="+421">Slovakia (+421)</option>
                                <option value="+386">Slovenia (+386)</option>
                                <option value="+34">Spain (+34)</option>
                                <option value="+46">Sweden (+46)</option>
                                <option value="+41">Switzerland (+41)</option>
                                <option value="+90">Turkey (+90)</option>
                                <option value="+380">Ukraine (+380)</option>
                                <option value="+44">United Kingdom (+44)</option>
                                <option value="" disabled>──────────</option>
                                <option value="" disabled>Rest of the world:</option>
                                <option value="" disabled>──────────</option>
                                <option value="+93">Afghanistan (+93)</option>
                                <option value="+213">Algeria (+213)</option>
                                <option value="+244">Angola (+244)</option>
                                <option value="+1-268">Antigua and Barbuda (+1-268)</option>
                                <option value="+54">Argentina (+54)</option>
                                <option value="+61">Australia (+61)</option>
                                <option value="+1-242">Bahamas (+1-242)</option>
                                <option value="+973">Bahrain (+973)</option>
                                <option value="+880">Bangladesh (+880)</option>
                                <option value="+1-246">Barbados (+1-246)</option>
                                <option value="+501">Belize (+501)</option>
                                <option value="+229">Benin (+229)</option>
                                <option value="+975">Bhutan (+975)</option>
                                <option value="+591">Bolivia (+591)</option>
                                <option value="+267">Botswana (+267)</option>
                                <option value="+55">Brazil (+55)</option>
                                <option value="+673">Brunei (+673)</option>
                                <option value="+226">Burkina Faso (+226)</option>
                                <option value="+257">Burundi (+257)</option>
                                <option value="+238">Cabo Verde (+238)</option>
                                <option value="+855">Cambodia (+855)</option>
                                <option value="+237">Cameroon (+237)</option>
                                <option value="+1">Canada (+1)</option>
                                <option value="+236">Central African Republic (+236)</option>
                                <option value="+235">Chad (+235)</option>
                                <option value="+56">Chile (+56)</option>
                                <option value="+86">China (+86)</option>
                                <option value="+57">Colombia (+57)</option>
                                <option value="+269">Comoros (+269)</option>
                                <option value="+243">Congo, Democratic Republic of the (+243)</option>
                                <option value="+242">Congo, Republic of the (+242)</option>
                                <option value="+506">Costa Rica (+506)</option>
                                <option value="+53">Cuba (+53)</option>
                                <option value="+253">Djibouti (+253)</option>
                                <option value="+1-767">Dominica (+1-767)</option>
                                <option value="+1-809">Dominican Republic (+1-809)</option>
                                <option value="+593">Ecuador (+593)</option>
                                <option value="+20">Egypt (+20)</option>
                                <option value="+503">El Salvador (+503)</option>
                                <option value="+240">Equatorial Guinea (+240)</option>
                                <option value="+291">Eritrea (+291)</option>
                                <option value="+268">Eswatini (+268)</option>
                                <option value="+251">Ethiopia (+251)</option>
                                <option value="+679">Fiji (+679)</option>
                                <option value="+241">Gabon (+241)</option>
                                <option value="+220">Gambia (+220)</option>
                                <option value="+233">Ghana (+233)</option>
                                <option value="+1-473">Grenada (+1-473)</option>
                                <option value="+502">Guatemala (+502)</option>
                                <option value="+224">Guinea (+224)</option>
                                <option value="+245">Guinea-Bissau (+245)</option>
                                <option value="+592">Guyana (+592)</option>
                                <option value="+509">Haiti (+509)</option>
                                <option value="+504">Honduras (+504)</option>
                                <option value="+91">India (+91)</option>
                                <option value="+62">Indonesia (+62)</option>
                                <option value="+98">Iran (+98)</option>
                                <option value="+964">Iraq (+964)</option>
                                <option value="+972">Israel (+972)</option>
                                <option value="+1-876">Jamaica (+1-876)</option>
                                <option value="+81">Japan (+81)</option>
                                <option value="+962">Jordan (+962)</option>
                                <option value="+254">Kenya (+254)</option>
                                <option value="+686">Kiribati (+686)</option>
                                <option value="+850">Korea, North (+850)</option>
                                <option value="+82">Korea, South (+82)</option>
                                <option value="+965">Kuwait (+965)</option>
                                <option value="+996">Kyrgyzstan (+996)</option>
                                <option value="+856">Laos (+856)</option>
                                <option value="+961">Lebanon (+961)</option>
                                <option value="+266">Lesotho (+266)</option>
                                <option value="+231">Liberia (+231)</option>
                                <option value="+218">Libya (+218)</option>
                                <option value="+261">Madagascar (+261)</option>
                                <option value="+265">Malawi (+265)</option>
                                <option value="+60">Malaysia (+60)</option>
                                <option value="+960">Maldives (+960)</option>
                                <option value="+223">Mali (+223)</option>
                                <option value="+692">Marshall Islands (+692)</option>
                                <option value="+222">Mauritania (+222)</option>
                                <option value="+230">Mauritius (+230)</option>
                                <option value="+52">Mexico (+52)</option>
                                <option value="+691">Micronesia (+691)</option>
                                <option value="+976">Mongolia (+976)</option>
                                <option value="+212">Morocco (+212)</option>
                                <option value="+258">Mozambique (+258)</option>
                                <option value="+95">Myanmar (+95)</option>
                                <option value="+264">Namibia (+264)</option>
                                <option value="+674">Nauru (+674)</option>
                                <option value="+977">Nepal (+977)</option>
                                <option value="+64">New Zealand (+64)</option>
                                <option value="+505">Nicaragua (+505)</option>
                                <option value="+227">Niger (+227)</option>
                                <option value="+234">Nigeria (+234)</option>
                                <option value="+968">Oman (+968)</option>
                                <option value="+92">Pakistan (+92)</option>
                                <option value="+680">Palau (+680)</option>
                                <option value="+970">Palestine (+970)</option>
                                <option value="+507">Panama (+507)</option>
                                <option value="+675">Papua New Guinea (+675)</option>
                                <option value="+595">Paraguay (+595)</option>
                                <option value="+51">Peru (+51)</option>
                                <option value="+63">Philippines (+63)</option>
                                <option value="+974">Qatar (+974)</option>
                                <option value="+250">Rwanda (+250)</option>
                                <option value="+1-869">Saint Kitts and Nevis (+1-869)</option>
                                <option value="+1-758">Saint Lucia (+1-758)</option>
                                <option value="+1-784">Saint Vincent and the Grenadines (+1-784)</option>
                                <option value="+685">Samoa (+685)</option>
                                <option value="+239">Sao Tome and Principe (+239)</option>
                                <option value="+966">Saudi Arabia (+966)</option>
                                <option value="+221">Senegal (+221)</option>
                                <option value="+248">Seychelles (+248)</option>
                                <option value="+232">Sierra Leone (+232)</option>
                                <option value="+65">Singapore (+65)</option>
                                <option value="+677">Solomon Islands (+677)</option>
                                <option value="+252">Somalia (+252)</option>
                                <option value="+27">South Africa (+27)</option>
                                <option value="+211">South Sudan (+211)</option>
                                <option value="+94">Sri Lanka (+94)</option>
                                <option value="+249">Sudan (+249)</option>
                                <option value="+597">Suriname (+597)</option>
                                <option value="+963">Syria (+963)</option>
                                <option value="+886">Taiwan (+886)</option>
                                <option value="+992">Tajikistan (+992)</option>
                                <option value="+255">Tanzania (+255)</option>
                                <option value="+66">Thailand (+66)</option>
                                <option value="+670">Timor-Leste (+670)</option>
                                <option value="+228">Togo (+228)</option>
                                <option value="+676">Tonga (+676)</option>
                                <option value="+1-868">Trinidad and Tobago (+1-868)</option>
                                <option value="+216">Tunisia (+216)</option>
                                <option value="+993">Turkmenistan (+993)</option>
                                <option value="+688">Tuvalu (+688)</option>
                                <option value="+256">Uganda (+256)</option>
                                <option value="+971">United Arab Emirates (+971)</option>
                                <option value="+1">United States (+1)</option>
                                <option value="+598">Uruguay (+598)</option>
                                <option value="+998">Uzbekistan (+998)</option>
                                <option value="+678">Vanuatu (+678)</option>
                                <option value="+58">Venezuela (+58)</option>
                                <option value="+84">Vietnam (+84)</option>
                                <option value="+967">Yemen (+967)</option>
                                <option value="+260">Zambia (+260)</option>
                                <option value="+263">Zimbabwe (+263)</option>
                            </select>
                            <input name='phoneNumber' required className='form-control' type='text' inputMode='numeric' placeholder={t('contact.content.contactForm.labels.phoneNumber.placeholder')} value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} onKeyDown={(event) => { if (/[A-Za-zא-ת]/.test(event.key) && event.key !== 'Backspace' && !(event.ctrlKey)) { event.preventDefault(); } }}></input>
                        </div>

                        <label className='form-label' htmlFor='email'>{t('contact.content.contactForm.labels.email.title')}</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="bi bi-envelope-at-fill"></i>
                            </span>
                            <input name='email' className='form-control' type='email' placeholder={t('contact.content.contactForm.labels.email.placeholder')} value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>

                        <label className='form-label' htmlFor='message'>{t('contact.content.contactForm.labels.message.title')}</label>
                        <textarea name='message' className='form-control' placeholder={t('contact.content.contactForm.labels.message.placeholder')} value={message} style={{height: '10em'}} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                        <div className='row justify-content-around'>
                            <button type='button' onClick={clearFields} className='col-3 my-3 btn btn-outline-secondary'>{t('contact.content.contactForm.buttons.clearFields')}</button>
                            <button type='submit' className='col-3 my-3 btn btn-success' value='send'>{t('contact.content.contactForm.buttons.send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
