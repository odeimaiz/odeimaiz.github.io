import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">{t('intro.text')}</h1>
      <p>{t('invitation_body')}</p>
      <p>{t('date')}</p>
      <p>{t('location')}</p>
    </section>
  );
};

export default Intro;