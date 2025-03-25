import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => i18n.changeLanguage('eu')} aria-label="Euskara">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/960px-Flag_of_the_Basque_Country.svg.png"
          alt="Basque"
          style={{ width: '30px', height: 'auto' }}
        />
      </button>
      <button onClick={() => i18n.changeLanguage('en')} aria-label="English">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/330px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
          alt="English"
          style={{ width: '28px', height: 'auto' }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
