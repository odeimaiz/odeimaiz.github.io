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
    setFormSrc(forms[i18n.language] || forms.en);
  }, [i18n.language]);

  return (
    <section id="rsvp" className="page">
      <p>{t("rsvp.body")}</p>
      {formSrc && ( // Only render iframe when formSrc is set
        <iframe
          key={formSrc} // Forces re-render when src changes
          src={formSrc}
          title="rsvp"
          width="100%"
          height="400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      )}
    </section>
  );
};

export default Rsvp;