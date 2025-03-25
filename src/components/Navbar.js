import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";

const Navbar = () => {
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="flex items-center gap-2">
          {isMobile ? <FaHome size={20} /> : "Zorionak"}
        </Link>
        <Link to="/details" className="flex items-center gap-2">
          {isMobile ? <FaInfoCircle size={20} /> : "Details"}
        </Link>
        <Link to="/location" className="flex items-center gap-2">
          {isMobile ? <FaMapMarkerAlt size={20} /> : "Location"}
        </Link>
        <Link to="/rsvp" className="flex items-center gap-2">
          {isMobile ? <FaClipboardList size={20} /> : "RSVP"}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;