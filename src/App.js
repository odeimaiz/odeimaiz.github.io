import Navbar from "./components/Navbar";
import Section from "./components/Section";
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>You're Invited! 🎉</h1>
      <p>Join me to celebrate my 40th birthday!</p>
      <p>Date: 26th April</p>
      <p>Location: Etzel</p>
      <Navbar />
      <Section id="details" title="Party Details">
        <p>Join us for an unforgettable celebration! 🎉</p>
      </Section>
      <Section id="location" title="How to Get There">
        <p>Location info and a map will go here. 📍</p>
      </Section>
      <Section id="rsvp" title="RSVP">
        <iframe
          src="" // GOOGLE_FORM_EMBED_URL
          width="100%"
          height="200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </Section>
    </div>
  );
};

export default App;