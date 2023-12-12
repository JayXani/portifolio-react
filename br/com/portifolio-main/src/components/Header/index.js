/* eslint-disable react-hooks/rules-of-hooks */
import logoPortifolio from '../../images/portifolio-logo.png';
import { Header } from './style';
import {BsXLg} from 'react-icons/bs'
import React, {useEffect} from 'react';

export default function header() {
    useEffect(() => {
        const btnMenu = document.getElementById('btn-open-menu');
        const menuIs = document.getElementById('menu-mobile');
        const overlay = document.getElementById('overlay-menu');
        btnMenu.addEventListener('click', () => {
            menuIs.classList.add('menu-opened');
        });

        menuIs.addEventListener('click', () => {
            menuIs.classList.remove('menu-opened');
        });
        btnMenu.addEventListener('click', () => {
            menuIs.classList.add('menu-opened')
        });

        overlay.addEventListener('click', () => {
            menuIs.classList.remove('menu-opened')
        });
    });
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
                <div class="open-menu" id="btn-open-menu">
                <i class="bi bi-list"></i>
            </div>
            <div class="menu-mobile" id="menu-mobile">
                <div class="btn-close">
                    <BsXLg class="bi-x-lg"/>
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
            <div class="overlay-menu" id="overlay-menu"></div>
            </div>
        </Header>
    )
}