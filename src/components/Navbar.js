import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation(); // Initialize the translation hook
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
          {isMobile ? <FaHome size={20} /> : t("nav.intro")}
        </Link>
        <Link to="/details" className="flex items-center gap-2">
          {isMobile ? <FaInfoCircle size={20} /> : t("nav.details")}
        </Link>
        <Link to="/location" className="flex items-center gap-2">
          {isMobile ? <FaMapMarkerAlt size={20} /> : t("nav.location")}
        </Link>
        <Link to="/rsvp" className="flex items-center gap-2">
          {isMobile ? <FaClipboardList size={20} /> : t("nav.rsvp")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;