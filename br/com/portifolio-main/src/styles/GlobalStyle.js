import { createGlobalStyle} from "styled-components";
import { colors } from "../config/colors";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${colors.bodyColor};
        height: 100vh;
    }

    h2.title {
        color: ${colors.textColors};
        font-size: 36px;
        text-align: center;
    }

    h2.title span {
        color: ${colors.highlightColor}
    }

    .flex {
        display: flex;
    }

    .interface {
        max-width: 1280px;
        margin: 0 auto;
    }
    
    .btn-contact button {
        background-color: ${colors.highligth};
        padding: 8px 30px;
        border: none;
        color: white;
        border-radius: 25px;
        font-size: 15px;
        font-weight: 600;
    }

    .btn-contact button:hover {
        cursor: pointer;
        box-shadow: 0px 0px 9px ${colors.highligth};
        transform: scale(1.05);
    }
    .btn-social button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background-color: rgb(71, 71, 223);
        font-size: 22px;
        cursor: pointer;
        margin: 0px 6px;
    }

    button:hover {
        transform: scale(1.05);
        transition: .2s;
        box-shadow: 0px 0px 8px rgb(71, 71, 223);
    }
    @media screen and (max-width: 1020px) {

        .flex {
            flex-direction: column;
        }

        .top-website .interface .flex {
            flex-direction: column-reverse;
        }

        h2.title {
            font-size: 30px;
            line-height: 30px;
        }

        /*HEADER*/
        .desktop{
            display: none;
        }

        .open-menu i {
            display: block;
        }

        /* TOP WEBSITE */
        .top-website {
            padding: 20px 8%;
        }

        .top-website .txt-top-text h1 {
            font-size: 32px;
        }

        .top-website .img-top-website img {
            width: 100%;
        }

        .top-website .flex {
            gap: 40px;
        }

        /* SKILLS */
        .skills {
            padding: 40px 8%;
        }

        /* ABOUT ME */
        .about {
            padding: 80px 8%;
        }

        .about-me .text-about h2 {
            font-size: 34px;
            text-align: center;
        }

        .btn-social {
            text-align: right;
        }

        #person-full {
            width: 100%;
        }

        /* SECTION PORTIFOLIO */
        .portifolio {
            padding: 80px 8%;
        }

        .img-port {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
        }

        .portifolio .flex {
            gap: 60px;
        }

        /* FOOTER */
        footer.flex {
            flex-direction: column;
        }

        footer .line-footer {
            text-align: center;
        }

        footer .btn-social {
            text-align: center;
            margin-top: 30px;
        }
    }
    html{
        scroll-behavior: smooth;
    }
`
