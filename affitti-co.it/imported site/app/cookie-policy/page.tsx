import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import CookiePreferenceButton from '../components/CookiePreferenceButton';

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[#2b2361] mb-8 mt-16">Cookie Policy</h1>
            
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Cosa sono i cookie</h2>
                <p className="text-gray-700 leading-relaxed">
                  I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Tipologie di cookie utilizzati</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2b2361] mb-2">Cookie tecnici necessari</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Sono generalmente impostati solo in risposta ad azioni da te compiute che costituiscono una richiesta di servizi, come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di moduli.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2b2361] mb-2">Cookie analitici</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono le più e le meno popolari e a vedere come i visitatori si muovono nel sito.
                    </p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                      <li>Google Analytics</li>
                      <li>Hotjar</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2b2361] mb-2">Cookie di marketing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Questi cookie sono utilizzati per tracciare i visitatori sui siti web. L'intento è quello di visualizzare annunci che sono rilevanti e coinvolgenti per il singolo utente e quindi più preziosi per gli editori e gli inserzionisti di terze parti.
                    </p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                      <li>Facebook Pixel</li>
                      <li>Google Ads</li>
            </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2b2361] mb-2">Cookie di preferenze</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Permettono al sito di ricordare le informazioni che cambiano il modo in cui il sito si comporta o si presenta, come la lingua preferita o la regione in cui ti trovi.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Modifica le tue preferenze</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Puoi modificare le tue preferenze sui cookie in qualsiasi momento. Clicca il pulsante qui sotto per riaprire il banner dei cookie e aggiornare le tue scelte.
                </p>
                <CookiePreferenceButton />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Come gestire i cookie</h2>
                <p className="text-gray-700 leading-relaxed">
                  Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser. Ecco come accedere alle impostazioni dei cookie nei browser più comuni:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Google Chrome: Menu → Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                  <li>Mozilla Firefox: Menu → Opzioni → Privacy & Sicurezza → Cookie e dati dei siti</li>
                  <li>Safari: Preferenze → Privacy → Gestione dati dei siti web</li>
                  <li>Microsoft Edge: Impostazioni → Cookie e autorizzazioni sito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Cookie di terze parti</h2>
                <p className="text-gray-700 leading-relaxed">
                  Alcuni cookie sono impostati da servizi di terze parti che appaiono nelle nostre pagine. Non abbiamo il controllo su questi cookie. Per maggiori informazioni su come questi terzi utilizzano i cookie, consulta le loro politiche sulla privacy:
            </p>
            <ul className="list-disc ml-6 mt-2">
                  <li><a href="https://policies.google.com/technologies/cookies?hl=it" className="text-[#cebd6d] hover:text-[#2b2361]" target="_blank" rel="noopener noreferrer">Google (Analytics, YouTube)</a></li>
                  <li><a href="https://www.facebook.com/policies/cookies/" className="text-[#cebd6d] hover:text-[#2b2361]" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://help.hotjar.com/hc/it/articles/115011789248-Hotjar-e-i-Cookie" className="text-[#cebd6d] hover:text-[#2b2361]" target="_blank" rel="noopener noreferrer">Hotjar</a></li>
            </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Modifiche alla Cookie Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina. Ti invitiamo a consultare regolarmente questa pagina per essere informato di eventuali aggiornamenti.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Contatti</h2>
                <p className="text-gray-700 leading-relaxed">
                  Per qualsiasi domanda riguardante questa Cookie Policy, puoi contattarci a:
                </p>
                <p className="text-gray-700 mt-2">
                  Email: <a href="mailto:info@affitti-co.it" className="text-[#cebd6d] hover:text-[#2b2361]">info@affitti-co.it</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 