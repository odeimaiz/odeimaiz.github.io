
const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen p-8 flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

export default Section;