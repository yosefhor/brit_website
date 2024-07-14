import React, { useRef } from 'react'

export default function AboutBritMilah() {
    const ArtikelüberBeschneidung = useRef();
    const handleScroll = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 170,
        });
    };
    return (
        <div className='lead fw-normal'>
            <h1 className='my-4'>Über die Brit Milah</h1>
            <div className=' accordion' id='accrParent'>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part1'><h3>Bedeutung der Brit Milah</h3></button>
                    </div>
                    <div id='part1' className=' accordion-collapse collapse show p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            <p>
                                Die Beschneidung ist das erste Gebot, das unser Stammvater Awraham von G"tt
                                erhalten hat. Die Brit Mila ist eines der wichtigsten Gebote im Judentum.
                            </p>
                            <p>
                                In der Torah steht: "Beschnitten werde bei euch jegliches Männliche und das
                                dies zum Bundeszeichen werde zwischen mir und euch" (Gen. 17:10). In der
                                Torah wird das Wort "Brit" (Hebr. Bund) 13 Mal in Zusammenhang mit
                                Beschneidung erwähnt. Unsere Weisen sagen, dass die Brit Mila als eines der
                                Größten aller Gebote gilt.
                            </p>
                            <p>
                                Die Brit Mila (Bund der Beschneidung) gilt im Judentum als Eintritt in den
                                Bund mit G"tt (siehe auch Gen. 17,10 - 14). Während der Zeremonie der Brit
                                Mila werden verschiedene Segenssprüche gesagt, die das Kind in den Bund mit
                                G"tt einführen sollen.
                            </p>
                            <p>
                                In der jüdischen Geschichte war die Brit Mila einer der jüdischen Bräuche,
                                die am stärksten verfolgt wurden. Auch unter dem Sowjetregime wurden die
                                meisten jüdischen Knaben nicht beschnitten. Dies war eine der Methoden,
                                jüdisches Brauchtum zu unterdrücken, in der Hoffnung, dass die Juden dann
                                die Weltanschauung ihrer Unterdrücker annehmen würden und sich assimilierten.
                            </p>
                            <h4>Weitere Informationen finden Sie im Artikel über Beschneidung <a className=' btn btn-link fs-4 p-0' onClick={() => { handleScroll(ArtikelüberBeschneidung) }} >am Ende der Seite</a></h4>
                        </div>
                    </div>
                </div>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part2'><h3>Ablauf und Heilungsprozess</h3></button>
                    </div>
                    <div id='part2' className=' accordion-collapse collapse p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            <p>
                                Die Brit Mila findet im Normalfall am achten Lebenstag des Knaben statt. Es gibt aber auch heute viele Fälle, wo sich Erwachsene bzw. Jugendliche aus religiösen oder medizinischen Gründen beschneiden lassen wollen. Es handelt sich dabei um einen sehr kleinen Eingriff. Die Beschneidung kann im häuslichen Umfeld, in der Synagoge oder im Gemeindesaal stattfinden.
                            </p>

                            <h3>Beschneidungen bei Säuglingen</h3>
                            <p>
                                Die Beschneidung findet am 8. Tag statt. Ist der Säugling jedoch zu schwach oder krank, wird die Beschneidung verschoben, bis der Säugling kräftig genug ist. Am 8. Tag wird keine Betäubung injiziert, da Betäubungsmittel ein höheres Risiko als der Schmerz durch den Schnitt tragen. Der Schmerz bei kleinen Babys ist minimal, da das Schmerzempfinden noch nicht vollständig entwickelt ist. Das Baby beruhigt sich in der Regel nach wenigen Minuten. Auf Wunsch der Eltern kann ein Betäubungsmittel in Form von Salbe, Tropfen oder Zäpfchen äußerlich angewendet werden. Normalerweise führe ich die Brit Mila bei Kindern bis zu einem Alter von 6 Monaten alleine durch. Auf Wunsch der Eltern kann jedoch auch ein Arzt hinzugezogen werden. Für das Baby ist es jedoch besser, näher am 8. Tag beschnitten zu werden, da das Schmerzempfinden noch nicht vollständig ausgeprägt ist.
                            </p>

                            <h3>Heilung bei Säuglingen</h3>
                            <p>
                                Der Heilungsprozess bei Babys verläuft in der Regel schnell. Babys schlafen oft schon kurz nach dem Eingriff. Der Verband sollte 24 Stunden unverändert bleiben. Sollte der Verband abfallen oder verrutschen, kontaktieren Sie mich bitte. Der Verband wird bereits nach einem Tag entfernt. Dazu wird der Säugling gebadet und der Verband wird abgeweicht (ca. 10 Minuten). Eine leichte Rötung der Windel beim Windelwechsel ist normal und kommt vom Urin, der das Blut im Verband löst. Um ein Verkleben des Verbands zu vermeiden, können Sie etwas Baby-Öl auftragen.
                            </p>

                            <h3>Beschneidung bei Kindern, Jugendlichen und Erwachsenen</h3>
                            <p>
                                Ist das Kind über 6 Monate alt, wird grundsätzlich ein Arzt hinzugezogen, der die Beschneidung aus medizinischer Sicht betreut und überwacht (Narkose/Betäubung etc.). Kinder im Alter von über 6 Monaten bis zu 10 Jahren werden unter Vollnarkose beschnitten. Bei älteren Kindern und Erwachsenen wird eine lokale Betäubung verwendet.
                            </p>

                            <h3>Heilung bei Erwachsenen</h3>
                            <p>
                                Die Heilung bei Erwachsenen ist in der Regel nach etwa 2 Wochen abgeschlossen. Sollten Schmerzen auftreten (was sehr selten ist), können diese mit Schmerzmitteln behandelt werden (kein Aspirin, da es blutverdünnend wirkt). In den ersten Tagen kann ein unangenehmes Gefühl auftreten. Die Fäden lösen sich durchschnittlich nach 7-12 Tagen von selbst auf. Kamillenbäder können den Heilungsprozess begünstigen. In der Regel ist bereits 3 Tage nach dem Eingriff wieder Duschen erlaubt. Ein normales Bad sollte erst nach dem vollständigen Auflösen der Fäden durchgeführt werden.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part3'><h3>Vorteile für die Beschneidung</h3></button>
                    </div>
                    <div id='part3' className=' accordion-collapse collapse p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            <p>Mit der Beschneidung erfüllen jüdische Menschen eines der wichtigsten Gebote der Thora, und diese Mizwa hat das jüdische Volk über Jahrhunderte vor Assimilation bewahrt. Zusätzlich finden in letzter Zeit immer mehr Mediziner und Ärzte gute Argumente, die für eine Beschneidung sprechen, abgesehen von den hygienischen und gesundheitsfördernden Gründen.</p>
                            <p>Die amerikanische Gesundheitsbehörde NIH stellte in einer Studie in Uganda und Kenia fest, dass das Risiko einer HIV-Infektion bei beschnittenen Männern in Uganda um 48% und in Kenia um 53% geringer ist als bei unbeschnittenen Männern. Mediziner stellten außerdem fest, dass das Risiko für Frauen, an Gebärmutterhalskrebs zu erkranken, geringer ist, wenn ihr Partner beschnitten ist. Bei beschnittenen Männern tritt fast nie Peniskrebs auf. Auch das Risiko für Harnwegsinfektionen sinkt deutlich bei beschnittenen Männern.</p>
                            <p>Bei der Beschneidung durch einen Mohel wird die Vorhaut komplett entfernt, sodass eine Phimose verhindert wird. Es gibt auch weniger Probleme durch Narbenbildung.</p>
                        </div>
                    </div>
                </div>
                <div className=' accordion-item'>
                    <div className=' accordion-header'>
                        <button className=' accordion-button' data-bs-toggle='collapse' data-bs-target='#part4'><h3>Vorteile einer Beschneidung durch einen Mohel</h3></button>
                    </div>
                    <div id='part4' className=' accordion-collapse collapse p-3' data-bs-parent='#accrParent'>
                        <div className=' accordion-body'>
                            <p>Welche Vorteile bringt die Beschneidung durch einen Mohel?</p>
                            <p>Es gibt einen großen Unterschied zwischen einer Beschneidung, die durch einen Arzt oder durch einen Mohel durchgeführt wird. Diese Meinung vertritt Prof. Abraham Steinberg aus Israel, der jahrelang Untersuchungen zu diesem Thema durchgeführt hat. Aufgrund der Einfachheit des Eingriffes werden im Krankenhaus in der Regel sehr junge Ärzte, die über wenig Erfahrung verfügen, mit diesem Eingriff betraut. Der Arzt nutzt dabei Klemmen, um das Blut zu stillen, was zu vermehrten Schmerzen führt. Auch der Eingriff dauert lange, da dem Arzt die Routine fehlt. Der Mohel ist auf diese Art von Eingriffen spezialisiert. Seine Handgriffe sind geübt und alles geht bei ihm sehr schnell, sodass das Kind wenig Stress und Schmerzen ausgesetzt ist. Halachisch gesehen mag ein Chirurg qualifiziert sein, die Operation der Beschneidung vorzunehmen, aber das heißt noch nicht, dass er den Bund der Beschneidung ausführen kann.</p>
                            <h3>Mögliche Beschwerden nach der OP bei Erwachsenen</h3>
                            <ul>
                                <li>Leichte Schmerzen</li>
                                <li>Geringe Nachblutungen</li>
                                <li>Schwellungen im Operationsbereich</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className=' mt-5'>Gott hat immer Recht (von Rabbiner David Goldberg):</h3>
            <div className='  mb-5 p-4 ' ref={ArtikelüberBeschneidung}>
                <p>G-tt gibt keine überholten oder unsinnigen Anweisungen. G-tt gibt den Menschen mit der Tora 613 Gebote. Das erste Gebot ist das Gebot der Ehe: „…..seid fruchtbar und mehret euch“, daran schließt sich das Gebot der Beschneidung an.</p>
                <blockquote>„Beschnitten werde bei Euch jegliches Männliche. Und Ihr sollt beschnitten werden an Eurem Glied der Vorhaut, und dies sei zum Zeichen des Bundes zwischen mir und Euch.“ (1. Buch Moses, Kap. 17,10).</blockquote>
                <p>Nach dieser wichtigen Prüfung der Beschneidung Abrahams – Abraham durchlief insgesamt 10 Prüfungen -, ändert G-tt den Namen von Abram zu Abraham. Von seinem eigenen heiligen Namen fügt G-tt das „he“ hinzu. Da Abram ihn gehorsam handelte, wurde er somit zum Verheißungsträger Abraham – Vater vieler Völker.</p>
                <p>Im zweiten Gebot der Tora erkennt man die Bedeutung, die G-tt der Beschneidung für sein Volk gibt. Unsere Weisen erklären außerdem, dass sich die drei wichtigsten Gebote der Tora aus dem Wort Schabbat – in Hebräisch schin, bet, tav – ableiten lassen. Schin für Schabbat, bet für Brit Mila – Beschneidung, tav für Tefillin – Gebetsriemen. Drei Gebote als Zeichen der Bündnisse, die G-tt mit seinem Volk geschlossen hat.</p>
                <p>In der Praxis wird dies deutlich, indem die Juden seit ca. 3700 Jahren – so lange gibt es das Gebot – unter den schwierigsten, äußeren Umständen ihre Söhne am achten Tag beschnitten haben, wie G-tt es ihnen befohlen hat. (1. Mos. 17,12). Bei Krankheiten wie Fieber und Gelbsucht lässt die Halacha selbstverständlich eine Terminverschiebung zu. Im Alter von acht Tagen hat das Baby noch keine vollständig ausgebildeten Nerven für die Schmerzempfindung. Dies belegen bekannte medizinische Untersuchungen. Im Vergleich zum Islam – dort wird die Beschneidung ebenfalls praktiziert, gemäß der biblischen Geschichte über Ismael – wird im Islam diese im Alter bis 13 Jahren durchgeführt. Eine Beschneidung bei Mädchen aber, lässt sich von keiner Stelle der Tora ableiten und deshalb wurde und wird in jüdischen Gemeinden niemals ein Mädchen beschnitten.</p>
                <p>Die jüdische Geschichte berichtet uns lediglich von einem einzigen Zeitabschnitt, währenddessen die Söhne Israels nicht beschnitten wurden, und zwar während der 40-jährige Wanderung durch die Wüste Sinai. Jehoschua musste allerdings alle Männer des Volkes beschneiden, bevor sie den Jordan überschreiten durften. Unbeschnittene Männer werden im Hebräischen mit einem speziellen Namen gerufen, der fast ein Schimpfwort in der Gemeinde Israels ist: „Arel“. Ein solcher Mann ist nach dem Gesetz der Tora bei einigen Gelegenheiten, z.B., als Mitglied bei der Bildung des Minjans, Aufruf zur Toralesung – oder bei der Pessachfeier ausgeschlossen, obwohl er nach der Geburt Jude ist.</p>
                <p>Bis vor einigen Jahren war die Beschneidung das wichtigste und manchmal auch das einzig mögliche Gebot, das alle jüdischen Eltern, gläubig oder ungläubig, gelebt haben. Leider hat sich das besonders in den ehemaligen kommunistischen Ländern – besonders GUS-Staaten – geändert. Es wird sogar offen dagegen argumentiert. Da ist zum einen der Eingriff als solcher, den man fürchtet und ablehnt, obwohl es sich dabei um eine der leichtesten Operationen überhaupt handelt. Ordnet aber ein Arzt die Beschneidung aus medizinischer Indikation heraus an, werden keine Bedenken geäußert.</p>
                <p>Als Gegenbeispiel muss erwähnt werden, dass die Beschneidung in Amerika immer häufiger auch von Nicht-Juden praktiziert wird. Eine Begründung dafür ist, dass kein beschnittener Mann an Penis-Krebs erkrankt ist. Die Ehefrauen beschnittener Männer haben nachweislich viel weniger Unterleibskrankheiten. Alle männlichen Mitglieder des englischen Königshauses werden schon seit Generationen beschnitten.</p>
                <p>Die Beschneidung, das Abtrennen der Vorhaut, wurde in Vergangenheit überall, auch bei anderen Völkern, ohne Betäubung durchgeführt. Unter Juden galt für Säuglinge:</p>
                <ul>
                    <li>Kinder empfinden kaum Schmerz, anders als Erwachsene, zumindest ist das Schmerzverständnis von Erwachsenen ganz anders.</li>
                    <li>Eine fachgerechte Beschneidung durch den Mohel – ritueller Beschneider im Judentum – geht sehr schnell und verursacht nur leichte Schmerzen.</li>
                    <li>Bei sehr kleinen Kindern bleibt keine Erinnerung oder gar ein Trauma.</li>
                    <li>Betäubungsmittel bergen ein größeres Risiko als der Schmerz bei der Beschneidung und man will das Kind nicht zusätzlich gefährden.</li>
                </ul>
                <p>Nur im äußersten Notfall wurde ein Betäubungsmittel verwendet. Heute hat sich die Einstellung etwas geändert, da es neue und bessere Medikamente gibt. Diese stellen auch für Kleinkinder kaum eine Gefahr dar und die Schmerzen können auf ein Minimum reduziert werden. In Amerika empfehlen die Ärzte eine leichte Betäubung.</p>
                <p>Eine Spritze für die örtliche Betäubung mit 1% Lidocain wird für Erwachsene empfohlen. Für ein Baby ist der Einstich viel schmerzhafter und eine Verletzung der feinen Blutgefäße kann ein Absterben zur Folge haben. Zudem gelangt das Medikament über die Blutbahn in den ganzen Körper. Herz und Kreislauf können gestört werden, mit der Folge von Blutdruckabfall und Hörstörungen. Nur ein Arzt darf dieses Medikament verabreichen.</p>
                <p>Eine andere Form ist die Lidocain-Salbe. Diese hat den Vorteil, dass das Medikament nicht durch die Haut in den Körper und somit in die Blutbahn gelangt. Für ein paar Sekunden hat das Baby während und nach der Beschneidung weniger Schmerzen. Allerdings nimmt die Salbe nicht alle Empfindungen. Ein Restschmerz bleibt und die Wirkung ist bei Kindern unterschiedlich. Zudem muss die Salbe mindestens eine Stunde vorher aufgetragen werden.</p>
                <p>Ein drittes Mittel für die Schmerzlinderung ist ein Zuckermedikament „Sachros“, mit sehr guter Wirkung bei der Mehrheit der Kinder. Da es sich um eine Flüssigkeit zum Einnehmen handelt, lässt es sich leicht verabreichen, z.B. am Nuckel, unmittelbar vor dem Eingriff. Wie auch die Salbe betäubt es nicht 100%ig. Ein Restschmerz bleibt auch hier. Eine weitere Variante ist das Verabreichen von Tabletten oder Zäpfchen wie bei anderen Schmerzbehandlungen. Die Wirkung ist aus medizinischer Sicht nicht völlig bekannt, auch haben diese Medikamente andere Nebenwirkungen.</p>
                <p>Wie bei allen Themen des täglichen Lebens im Judentum existieren auch hier halachische Meinungen und Diskussionen. In den ersten Jahrhunderten wurde die Beschneidung bei Kindern und Erwachsenen ohne Betäubung durchgeführt. Später wurde bei Erwachsenen Vollnarkose, zumindest örtliche Betäubung, üblich. Normalerweise entscheidet man sich bei Kindern von einem halben Jahr bis zehn Jahren für eine Vollnarkose und ab 10 Jahren für eine örtliche Betäubung. Erst in der letzten Generation entstand zwischen den Rabbinern eine Diskussion, ob gemäß der Halacha für Säuglinge bis zu einem halben Jahr die Betäubungssalbe erlaubt ist, sowie bei Kindern und Erwachsenen את anderen Varianten der Betäubung. Das Ergebnis sind drei Meinungen:</p>
                <ul>
                    <li>Bei Erwachsenen, Kindern und Babys ist keine Betäubung oder Narkose erlaubt.</li>
                    <li>Bei Erwachsenen, Kindern und Babys ist Narkose und Betäubung in allen Formen erlaubt.</li>
                    <li>Bei Erwachsenen und Kindern ist eine örtliche Betäubung erlaubt, bei Babys keinerlei Betäubung.</li>
                </ul>
                <p>Die erste Meinung wird durch folgende Argumente begründet:</p>
                <ul>
                    <li>So war es immer, seit Abraham – und alle Neuerungen sind verboten.</li>
                    <li>Im Midrasch wird geschrieben: Man muss durch die Beschneidung leiden: Rabbi Levi sagt: Es wird bei Abraham geschrieben – er hat sich beschnitten – und daraus erklärt man, er hat gelitten und dadurch war sein Lohn größer. Weiter wird im Midrasch geschrieben: Wenn ein Kind weint und leidet soll man an seine eigenen Leiden und Problemen denken und für das Kind wünschen, dass die momentanen Leiden und Schmerzen die einzigen für das Baby bleiben und damit auch für seine Eltern.</li>
                    <li>Ein anderer Midrasch erklärt: G-tt hat alle Leiden und Schmerzen zugeteilt und dies ist schon ein Teil davon und dafür wird anderes wegfallen.</li>
                    <li>Das Gebot „Beschneidung der Vorhaut“ ist vielleicht auch ausgeführt, wenn man keine Schmerzen fühlt. Die Ausführung, Erfüllung des Gebotes ist aber erst gegeben, wenn man den Schnitt fühlt, das erste Blut – ein bis zwei Tropfen – abgesaugt werden und der Rest der Vorhaut zum Körper geschoben wird, damit die Eichel frei ist.</li>
                    <li>Schon im Talmud wird geschrieben, dass Betäubungsmedikation bekannt war – Baba Kama Blatt 83, Seite 2 und Blatt 85 Seite 1 – und doch hat man es bis zu unserer Generation nicht benutzt. Daraus schließt man, dass der Mensch bei der Beschneidung etwas leiden muss.</li>
                    <li>Ein weiteres halachisches Problem ist bei Erwachsenen unter Vollnarkose die selbständige Beauftragung des Mohels mit der Beschneidung. Das ist im Schlaf nicht möglich.</li>
                    <li>Man darf einen Menschen nicht in Gefahr bringen und bei jeder Vollnarkose bleibt ein Restrisiko, auch wenn es heute sehr klein ist.</li>
                </ul>
                <p>Die Mehrheit der Rabbiner denkt heute, dass man bei einer örtlichen Betäubung bei Erwachsenen nicht gegen das Gesetz verstößt. Ebenso ist es erlaubt Schmerzen zu erleichtern. Durch den Einstich mit der Spritzennadel entsteht Schmerz. Außerdem findet sich weder in der Tora noch im Talmud, noch in der Kabbala ein Hinweis, dass Schmerzen sein müssen, damit die Beschneidung koscher, also gültig ist. Den einzigen Hinweis für das Gegenteil bietet der oben genannte Midrasch. Auch bei Babys die mit Salbe oder Tropfen behandelt werden, bleibt ein Restschmerz. Für alle, die Schmerzen bei der Beschneidung für notwendig halten, sollte das genügen. Auch für die Vollnarkose bei Erwachsenen kann man anführen, dass es Belegstellen im Talmud gibt, dass man den Auftrag für die Beschneidung vor dem Schlafen gehen erteilen kann und die Handlung gültig ist.</p>
                <p>Zum Schluss muss noch darauf hingewiesen werden, dass ein großer Unterschied zwischen einer Beschneidung durch einen Arzt oder durch einen Mohel besteht. Diese Meinung vertritt Prof. Abraham Steinberg aus Israel, der jahrelang Untersuchungen zu diesem Thema durchgeführt hat. Auch ist er der Ansicht, dass erfahrungsgemäß im Krankenhaus junge Ärzte mit wenig Erfahrung mit diesem Eingriff beauftragt werden. Der Arzt benutzt dazu Klemmen um das Blut zu stillen und das führt zu vermehrten Schmerzen. Auch dauert der Eingriff lange, da meist die Routine fehlt. Der Mohel ist darauf spezialisiert. Es geht bei ihm alles sehr schnell und das Kind leidet kaum. Meist schläft es nach kurzer Zeit und isst normal. In seinem Lebensrhythmus bemerkt man keine Veränderung. Nach Prof. A. Steinberg darf man Betäubungssalben oder sanfte Beruhigungsmittel verwenden.</p>
                <p>Anschließend kann zusammengefasst werden, dass die Angst vor der Brit Mila absolut keinen objektiven Grund gegen diese darstellt! Medizinische Berichte und Statistiken belegen zusätzlich, dass es in den letzten Jahren keine ernsthaften Zwischenfälle gab. In diesem Zeitraum fanden auch sehr viele Beschneidungen bei Erwachsenen – durch die Zuwanderung aus den GUS-Staaten – statt, die sich lediglich in der Heilungsdauer unterschieden. Auch in den jüdischen Quellen sind keine Zwischenfälle bei Beschneidungen bekannt.</p>
                <p>G-ttes Anweisungen sind also in der heutigen, modernen, aufgeklärten Zeit in doppelter Weise sinnvoll:</p>
                <ul>
                    <li>Erfüllung des Gebotes, -Mitzwa- und</li>
                    <li>Beschneidung als guter, hygienischer und gesundheitsfordernder Maßnahme.</li>
                </ul>
                <p className=' font-italic'>Rabbiner und Mohel David Goldberg</p>
            </div>

        </div >
    )
}
