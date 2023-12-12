import React from "react";
import { Section } from "./style";
import { FaJava, FaJs, FaHtml5, FaCss3, FaDatabase, FaFigma, FaReact, FaBootstrap} from 'react-icons/fa';

export default function skills() {
    return (
        <Section id="section-skills">
            <div className="skills">
                <div className="interface">
                    <h2 className="title">CONHECIMENTOS<span> EM:</span></h2>
                    <div className="flex">
                        <div className="skills-box">
                            <FaJava className="icons-skills"></FaJava>
                            <h3>Java</h3>
                        </div>
                        <div className="skills-box">
                            <FaJs className="icons-skills" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="skills-box">
                            <FaHtml5 className="icons-skills" />
                            <h3>HTML5</h3>
                        </div>
                        <div className="skills-box">
                            <FaCss3 className="icons-skills" />   
                            <h3>CSS3</h3>
                        </div>
                        <div className="skills-box">
                            <FaDatabase className="icons-skills"/>
                            <h3>DBA</h3>
                        </div>
                        <div className="skills-box">
                            <FaFigma className="icons-skills"/>
                            <h3>Figma</h3>
                        </div>
                        <div className="skills-box">
                            <FaReact className="icons-skills"/>
                            <h3>React</h3>
                        </div>
                        <div className="skills-box">
                            <FaBootstrap className="icons-skills"/>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}