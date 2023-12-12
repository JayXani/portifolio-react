import React from "react";
import logoPortifolio from '../../images/portifolio-logo.png';
import {Footer} from './style';
import Buttons from "../Buttons";
export default function footer() {
    return (
        <Footer id="footer">
            <div className="interface">
                <div className="line-footer">
                    <div className="flex">
                        <div className="logo-footer">
                            <img src={logoPortifolio} alt=""/>
                        </div>
                        <Buttons/>
                    </div>
                </div>
                <div className="line-footer border">
                    <p><i className="bi bi-envelope-at"></i><a href="mailto:danuloxaraujo@gmail.com">danuloxaraujo@gmail.com</a></p>
                    <p><i className="bi bi-telephone"></i><a href="tel:+5511973040702">(11) 97304-0702</a></p>
                </div>
            </div>
        </Footer>
    )
}