/* eslint-disable react-hooks/rules-of-hooks */
import logoPortifolio from '../../images/portifolio-logo.png';
import { Header } from './style';
import MenuMobile from '../../components/MenuMobile';

export default function header() {

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
                <MenuMobile/>
            </div>
        </Header>
    )
}