import React from "react";
import projectTask from '../../images/project-tasks.png';
import { Section } from "./style";
export default function projects() {
    return (
        <Section id="section-projects">
            <div className="portifolio">
                <div className="interface">
                    <h2 className="title">MEU <span>PORTIFÓLIO</span></h2>
                    <div className="flex">
                        <div className="img-port" style={{ backgroundImage: `url(${projectTask})` }}>
                            <div className="overlay">
                                Projeto LISTA DE TAREFAS
                            </div>
                        </div>
                        <div className="img-port" style={{ backgroundImage: `url(${projectTask})` }}>
                            <div className="overlay">
                                Projeto LISTA DE TAREFAS
                            </div>
                        </div>
                        <div className="img-port" style={{ backgroundImage: `url(${projectTask})` }}>
                            <div className="overlay">
                                Projeto LISTA DE TAREFAS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}