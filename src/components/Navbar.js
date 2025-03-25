import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-500">
          {isMobile ? <FaHome size={20} /> : "Intro"}
        </Link>
        <Link to="/details" className="flex items-center gap-2 hover:text-blue-500">
          {isMobile ? <FaInfoCircle size={20} /> : "Details"}
        </Link>
        <Link to="/location" className="flex items-center gap-2 hover:text-blue-500">
          {isMobile ? <FaMapMarkerAlt size={20} /> : "Location"}
        </Link>
        <Link to="/rsvp" className="flex items-center gap-2 hover:text-blue-500">
          {isMobile ? <FaClipboardList size={20} /> : "RSVP"}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;