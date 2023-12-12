/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import imagePersonMin from '../../images/image-person-full-min.png'
import { Div } from "./style";
import Buttons from "../Buttons";

export default function aboutMe() {
    return (
        <Div id="about-me">
            <section className="about-me">
                <div className="interface">
                    <div className="flex">
                        <div className="img-about">
                            <img src={imagePersonMin} alt="" id="person-full" />
                        </div>
                        <div className="text-about">
                            <h2>MUITO PRAZER,<span>SOU DANILO DE ARAÚJO.</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ex provident enim
                                error aliquid deleniti, quia dolores sit quos numquam nihil, beatae officiis optio eius
                                reiciendis fugiat, quae ut.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos rem obcaecati maiores quam odio
                                sapiente ab. Ducimus neque quia fugit maxime repellendus quam praesentium corrupti officia
                                error ad! Nesciunt, veritatis.</p><br />

                            <p>Entre em contato comigo através: </p>
                            <Buttons/>
                        </div>
                    </div>
                </div>
            </section>
        </Div>
    )
}