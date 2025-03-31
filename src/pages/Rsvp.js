import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const forms = {
  en: "https://docs.google.com/forms/d/e/1FAIpQLScRrZUECqzjtTvlWFWTNLh2uoYncMSuL0IPwQna2gpmfYm6Lg/viewform?usp=dialog",
  eu: "https://docs.google.com/forms/d/e/1FAIpQLScc9bPDvklNntyOzL0wo0GSSyD8P9zVtVMqub3xubGBDxOfsA/viewform?usp=dialog",
};

const Rsvp = () => {
  const { i18n, t } = useTranslation();
  const [formSrc, setFormSrc] = useState("");

  useEffect(() => {
    setFormSrc(forms[i18n.language] || forms.en); // falback to English if language not found
  }, [i18n.language]);

  return (
    <section id="rsvp" className="page">
      <p>{t("rsvp.body")}</p>
      <button
        onClick={() => window.open(formSrc, "_blank")}
        disabled={!formSrc}
        className="rsvp-button"
      >
        {t("rsvp.button")}
      </button>
    </section>
  );
};

export default Rsvp;