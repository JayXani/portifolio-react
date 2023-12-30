/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import projectTask from '../../images/project-tasks.png';
import projectAgenda from  '../../images/project-agenda.png';
import { Section } from "./style";
export default function projects() {
    return (
        <Section id="section-projects">
            <div className="portfolio">
                <div className="interface">
                    <h2 className="title">MEU <span>PORTFOLIO</span></h2>
                    <div className="flex">
                        <div className="img-port" style={{ backgroundImage: `url(${projectTask})` }}>
                            <div className="overlay">
                                <a href= "https://jayxani.github.io/Curso-Udemy/Curso-JavaSript-TypeScript/Módulo%201%20(JavaScript)/aula67%20(Lista%20de%20Tarefas)/br/com/tasksfree/public/assets/index.html" className="link-projects" target="_blank">Projeto LISTA DE TAREFAS</a>
                            </div>
                        </div>
                        <div className="img-port" style={{ backgroundImage: `url(${projectAgenda})` }}>
                            <div className="overlay">
                                <a href="https://github.com/JayXani/Curso-Udemy/tree/main/Curso-JavaSript-TypeScript/Módulo%203%20(Node%20JS%2C%20Express%20etc.)/Projeto%20(Agenda)" className="link-projects" target="_blank">Projeto AGENDA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}