import { useTranslation } from 'react-i18next';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import './App.css';
import './i18n';

const App = () => {
  const { t } = useTranslation();  // Access translation function

  return (
    <div className="app-container">
      <h1>{t('invitation_title')}</h1>
      <p>{t('invitation_body')}</p>
      <p>{t('date')}</p>
      <p>{t('location')}</p>
      <Navbar />
      <Section id="details" title={t('details_title')}>
        <p>{t('details_body')}</p>
      </Section>
      <Section id="location" title={t('location_title')}>
        <p>{t('location_body')}</p>
      </Section>
      <Section id="rsvp" title={t('rsvp_title')}>
        <iframe
          src="" // GOOGLE_FORM_EMBED_URL
          width="100%"
          height="200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </Section>
    </div>
  );
};

export default App;