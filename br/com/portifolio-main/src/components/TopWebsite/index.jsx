import React from 'react';
import imagePerson from '../../images/image-person.png';
import './style.css';

export default function topWebsite() {
  return (
    <section className="top-website" id="top-website">
      <div className="interface">
        <div className="flex">
          <div className="txt-top-text">
            <h1>
              TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL <span>.</span>
            </h1>
            <p>
              Criatividade e inovação andam lado a lado. Com uma combinação
              única de desing impactante, funcionalidades intuitiva e otimização
              para resultados, estou pronto para criar a presença online dos
              seus sonhos.
            </p>
            <div className="btn-contact">
              <a href="#footer">
                <button>Entre em contato</button>
              </a>
            </div>
          </div>

          <div className="img-top-website">
            <img src={imagePerson} alt="Imagem do desenvolvedor" />
          </div>
        </div>
      </div>
    </section>
  );
}
