import React from 'react';
import logoPortfolio from '../../images/portfolio-logo.png';
import { Footer } from './style';
import Buttons from '../Buttons';

export default function footer() {
  return (
    <Footer id="footer">
      <div className="interface">
        <div className="line-footer">
          <div className="flex">
            <div className="logo-footer">
              <img src={logoPortfolio} alt="" />
            </div>
            <Buttons />
          </div>
        </div>
        <div className="line-footer border-footer">
          <p>
            <i className="bi bi-envelope-at" />
            <a href="mailto:danuloxaraujo@gmail.com">danuloxaraujo@gmail.com</a>
          </p>
          <p>
            <i className="bi bi-telephone" />
            <a href="tel:+5511973040702">(11) 97304-0702</a>
          </p>
        </div>
      </div>
      <div className="informations">
        <p className="developer">
          Site desenvolvido por Danilo de Araújo Leite Gomes
        </p>
        <p className="Copyright">©Copyright 2023</p>
      </div>
    </Footer>
  );
}
