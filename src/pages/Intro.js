import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">{t('intro.title')}</h1>
      <p>{t('intro.body_1')}</p>
      <p>{t('intro.body_2')}</p>
      <p><Link to="/details">{t('intro.date')}</Link></p>
      <p><Link to="/location">{t('intro.location')}</Link></p>
      <p><Link to="/rsvp">{t('intro.rsvp') }</Link></p>
    </section>
  );
};

export default Intro;