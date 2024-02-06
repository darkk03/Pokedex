import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Styles/Header.css";
import imglogo from "../../Images/pokemonlogo.png";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  const location = useLocation(); // Добавляем использование useLocation
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [lineWidth, setLineWidth] = useState(0);
  const [linePosition, setLinePosition] = useState(0);
  const navListRef = useRef(null);

  useEffect(() => {
    // Определяем активный элемент на основе текущего маршрута
    const currentPath = location.pathname;
    const activeItem = currentPath === ROUTES.HOME ? "Home" : currentPath === ROUTES.POKEDEX ? "Pokedex" : "Home";
    setActiveNavItem(activeItem);

    const activeElement = document.querySelector(`.nav-element-${activeNavItem}`);
    const navList = navListRef.current;

    if (activeElement && navList) {
      setLineWidth(activeElement.offsetWidth);
      setLinePosition(activeElement.offsetLeft - navList.offsetLeft);
    }
  }, [location, activeNavItem]); // Добавляем location в массив зависимостей

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
