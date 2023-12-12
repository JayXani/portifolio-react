/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import imagePersonMin from '../../images/image-person-full-min.png'
import { Section } from "./style";
import Buttons from "../Buttons";
import { FaRegSmileWink } from "react-icons/fa";
export default function aboutMe() {
    return (
            <Section className="about-me">
                <div className="interface">
                    <div className="flex">
                        <div className="img-about">
                            <img src={imagePersonMin} alt="" id="person-full" />
                        </div>
                        <div className="text-about">
                            <h2>MUITO PRAZER,<span>SOU DANILO DE ARAÚJO,</span></h2>
                            <p>Um desenvolvedor Full-Satck e estudante da faculdade de tecnologia de Mogi das Cruzes (FATEC). 
                                Estou embarcando no mundo da programação em busca de uma oportunidade.
                                Possuo as seguintes experiências:<br/><br/>
                            </p>
                            <ul>
                                <li><strong>Vendedor; </strong></li>
                                <li><strong>Freelancer (Full-Stack);</strong></li>
                            </ul><br/>
                            <p>
                                Além de diversas certificações e competências, que me capacitam no desenvolvimento web, software, dentre outros.<br/>
                                <span>Na sessão abaixo</span>, estarei apresentando os meus principais projetos, espero que gostem ! <FaRegSmileWink className="icon-smile"/>
                            </p>
                            <p>Entre em contato comigo: </p>
                            <Buttons/>
                        </div>
                    </div>
                </div>
            </Section>
    )
}