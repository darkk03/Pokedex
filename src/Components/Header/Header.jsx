import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Header.css";
import imglogo from "../../Images/pokemonlogo.png";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [lineWidth, setLineWidth] = useState(0);
  const [linePosition, setLinePosition] = useState(0);
  const navListRef = useRef(null);

  useEffect(() => {
    const activeElement = document.querySelector(`.nav-element-${activeNavItem}`);
    const navList = navListRef.current;

    if (activeElement && navList) {
      setLineWidth(activeElement.offsetWidth);
      setLinePosition(activeElement.offsetLeft - navList.offsetLeft);
    }
  }, [activeNavItem]);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="header">
      <div className="header-content">
        <img src={imglogo} className="logo" alt="Pokemon Logo" />
        <div className="nav-list" ref={navListRef}>
          <Link to={ROUTES.HOME} className={`nav-element ${activeNavItem === "Home" ? `nav-element-${activeNavItem}` : ""}`} onClick={() => handleNavItemClick("Home")}>
            Home
          </Link>
          <Link to={ROUTES.POKEDEX} className={`nav-element ${activeNavItem === "Pokedex" ? `nav-element-${activeNavItem}` : ""}`} onClick={() => handleNavItemClick("Pokedex")}>
            Pokedex
          </Link>
          <Link to={ROUTES.LEGENDARIES} className={`nav-element ${activeNavItem === "Legendaries" ? `nav-element-${activeNavItem}` : ""}`} onClick={() => handleNavItemClick("Legendaries")}>
            Legendaries
          </Link>
          <Link to={ROUTES.OTHERS} className={`nav-element-others ${activeNavItem === "Others" ? `nav-element-${activeNavItem}` : ""}`} onClick={() => handleNavItemClick("Others")}>
            Others
          </Link>
          {activeNavItem && (
            <div
              className="underline"
              style={{ width: `${lineWidth}px`, transform: `translateX(${linePosition}px)` }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
