import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="page">
      <h2 className="text-2xl font-bold mb-4">{t('location_title')}</h2>
      <p>{t('location_body')}</p>
    </section>
  );
};

export default Location;