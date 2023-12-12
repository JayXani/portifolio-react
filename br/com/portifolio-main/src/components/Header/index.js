/* eslint-disable react-hooks/rules-of-hooks */
import logoPortifolio from '../../images/portifolio-logo.png';
import { Header } from './style';
import { BsXLg } from 'react-icons/bs';
import React, { useState } from 'react';

export default function header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header id="header">
      <div className="interface">
        <div className="logo">
          <a href="#header">
            <img src={logoPortifolio} alt="Logo do portifólio" />
          </a>
        </div>
        <nav className="desktop">
          <ul>
            <li><a href="#top-website">Início</a></li>
            <li><a href="#section-skills">Especialidades</a></li>
            <li><a href="#about-me">Sobre</a></li>
            <li><a href="#section-projects">Projetos</a></li>
          </ul>
        </nav>
        <div className="open-menu" onClick={handleMenuClick}>
          <i className="bi bi-list"></i>
        </div>
        <div className={menuOpen ? 'menu-mobile menu-opened' : 'menu-mobile'}>
          <div className="btn-close" onClick={handleMenuClick}>
            <BsXLg className="bi-x-lg" />
          </div>
          <nav>
            <ul>
              <li><a href="#top-website">Início</a></li>
              <li><a href="#section-skills">Especialidades</a></li>
              <li><a href="#about-me">Sobre</a></li>
              <li><a href="#section-projects">Projetos</a></li>
              <li><a href="#footer">Contato</a></li>
            </ul>
          </nav>
        </div>
        {menuOpen && <div className="overlay-menu" onClick={handleMenuClick}></div>}
      </div>
    </Header>
  );
}
