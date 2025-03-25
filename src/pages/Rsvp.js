import { useTranslation } from 'react-i18next';

const Rsvp = () => {
  const { t } = useTranslation();
  /*
  <iframe
    title="rsvp_form"
    src="" // GOOGLE_FORM_EMBED_URL
    width="100%"
    height="200"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
  >
    Loading…
  </iframe>
  */

  return (
    <section id="rsvp" className="page">
      <h2 className="text-2xl font-bold mb-4">{t('rsvp_title')}</h2>
      Loading…
    </section>
  );
};

export default Rsvp;