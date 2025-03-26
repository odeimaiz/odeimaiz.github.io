import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">{t('intro.title')}</h1>
      <p>{t('intro.body_1')}</p>
      <p>{t('intro.body_2')}</p>
      <p dangerouslySetInnerHTML={{ __html: t('date') }}></p>
      <p><a href="https://maps.app.goo.gl/8fs4DW7Aq4jRt2jX7" target="_blank">{t('location')}</a></p>
    </section>
  );
};

export default Intro;