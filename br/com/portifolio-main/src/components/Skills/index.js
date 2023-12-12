import React from "react";
import { Section } from "./style";

export default function skills() {
    return (
        <Section id="section-skills">
            <div className="skills">
                <div className="interface">
                    <h2 className="title">MINHAS <span>ESPECIALIDADES.</span></h2>
                    <div className="flex">
                        <div className="skills-box">
                            <i className="bi bi-code-square"></i>
                            <h3>Website</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate corporis totam
                                nihil deserunt corrupti. Consequatur et inventore, perspiciatis distinctio labore quos animi
                                est ratione temporibus exercitationem aperiam ullam dolor?</p>
                        </div>
                        <div className="skills-box">
                            <i className="bi bi-filetype-java"></i>
                            <h3>java</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate corporis totam
                                nihil deserunt corrupti. Consequatur et inventore, perspiciatis distinctio labore quos animi
                                est ratione temporibus exercitationem aperiam ullam dolor?</p>
                        </div>
                        <div className="skills-box">
                            <i className="bi bi-filetype-php"></i>
                            <h3>Teste</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate corporis totam
                                nihil deserunt corrupti. Consequatur et inventore, perspiciatis distinctio labore quos animi
                                est ratione temporibus exercitationem aperiam ullam dolor?</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}