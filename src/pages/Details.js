import { useTranslation } from 'react-i18next';

const Details = () => {
  const { t } = useTranslation();

  return (
    <section id="details" className="page">
      <h2 className="text-2xl font-bold mb-4">{t('details_title')}</h2>
      <p>{t('details_body')}</p>
    </section>
  );
};

export default Details;