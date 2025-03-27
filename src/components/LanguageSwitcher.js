import { useTranslation } from 'react-i18next';
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [_, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);

    localStorage.setItem('selectedLanguage', newLang);
    setLanguage(newLang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleLanguageChange('eu')} aria-label="Euskara">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/960px-Flag_of_the_Basque_Country.svg.png"
          alt="Basque"
          style={{ width: '30px', height: 'auto' }}
        />
      </button>
      <button onClick={() => handleLanguageChange('en')} aria-label="English">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/320px-Flag_of_Scotland.svg.png"
          alt="Scotish"
          style={{ width: '28px', height: 'auto' }}
        />
      </button>
      <button onClick={() => handleLanguageChange('ch')} aria-label="Hopp Schwiiz">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/240px-Flag_of_Switzerland_%28Pantone%29.svg.png"
          alt="Hopp Swchwiiz"
          style={{ width: '18px', height: 'auto' }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
