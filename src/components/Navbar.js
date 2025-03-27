import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          {isMobile ? <FaHome size={20} /> : t("nav.intro")}
        </Link>
        <Link to="/details" className={`nav-item ${location.pathname === "/details" ? "active" : ""}`}>
          {isMobile ? <FaInfoCircle size={20} /> : t("nav.details")}
        </Link>
        <Link to="/location" className={`nav-item ${location.pathname === "/location" ? "active" : ""}`}>
          {isMobile ? <FaMapMarkerAlt size={20} /> : t("nav.location")}
        </Link>
        <Link to="/rsvp" className={`nav-item ${location.pathname === "/rsvp" ? "active" : ""}`}>
          {isMobile ? <FaClipboardList size={20} /> : t("nav.rsvp")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;