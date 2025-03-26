import { useTranslation } from 'react-i18next';

const Details = () => {
  const { t } = useTranslation();

  return (
    <section id="details" className="page">
      <p dangerouslySetInnerHTML={{ __html: t('details.body_1') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_2') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_3') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_4') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_5') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_6') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_7') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('details.body_8') }}></p>
    </section>
  );
};

export default Details;