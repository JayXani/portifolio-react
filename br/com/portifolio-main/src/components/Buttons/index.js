/* eslint-disable react/jsx-no-target-blank */
import { FaLinkedin, FaGithub, FaInstagram } from  'react-icons/fa';
import React from "react";

export default function buttons(){
    return (
        <div className="btn-social">
            <a href="https://www.linkedin.com/in/danilo-de-araújo-703785232/" target="_blank" title="Linkedin">
                <button><FaLinkedin className="linkedin"/></button>
            </a>
            <a href="https://github.com/JayXani" target="_blank" title="GitHub">
                <button><FaGithub className="github"/></button>
            </a>
            <a href="https://www.instagram.com/daniloaraujogomes/" target="_blank" title="Instagram">
                <button><FaInstagram className="instagram"/></button>
            </a>
        </div>
    )
}