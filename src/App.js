import Navbar from "./components/Navbar";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      <Navbar />
      <Section id="details" title="Party Details">
        <p>Join us for an unforgettable celebration! 🎉</p>
      </Section>
      <Section id="location" title="How to Get There">
        <p>Location info and a map will go here. 📍</p>
      </Section>
      <Section id="rsvp" title="RSVP">
        <iframe
          src="YOUR_GOOGLE_FORM_EMBED_URL"
          width="100%"
          height="600"
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