import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Odei's Birthday</h1>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
          <li><a href="#details" className="hover:text-blue-500">Details</a></li>
          <li><a href="#location" className="hover:text-blue-500">Location</a></li>
          <li><a href="#rsvp" className="hover:text-blue-500">RSVP</a></li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;