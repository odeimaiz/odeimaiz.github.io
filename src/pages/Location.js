import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="page">
      <h2 className="text-2xl font-bold mb-4">{t('location.title')}</h2>
      <p>{t('location.body_1')}</p>
      <p>{t('location.body_2')}</p>
      <iframe
        title="location_gmap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.575055050142!2d8.783986776773789!3d47.16617651828662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab46dab4dd3db%3A0x1d022295a5380e72!2sEtzelh%C3%BCtte!5e0!3m2!1sen!2sch!4v1743008217844!5m2!1sen!2sch"
        width="400"
        height="300"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>{t('location.body_3')}</p>
      <p>{t('location.body_4')}</p>
      <p>{t('location.body_5')}</p>
      <p>{t('location.body_6')}</p>
      <p>{t('location.body_7')}</p>
    </section>
  );
};

export default Location;