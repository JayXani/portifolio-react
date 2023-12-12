import { styled } from  'styled-components';
import { colors } from '../../config/colors'

export const Section = styled.section`
   
    /*STYLE PORTIFÓLIO*/
    .portifolio {
        padding: 70px 4%;
        box-shadow: 0 0 40px 10px rgba(255, 255, 255, 0.075);

    }

    .portifolio .flex {
        justify-content: space-around;
        margin-top: 50px;
    }

    .img-port {
        width: 360px;
        height: 460px;
        background-color: rgb(71, 71, 223);
        background-size: cover;
        background-position: 51% 0%;
        transition: 7s;
        border-radius: 20px;
        position: relative;
    }

    .img-port:hover {
        background-position: 100% 100%;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.486);
        font-size: 24px;
        font-weight: 600;
        color: ${colors.textColors};
        opacity: 0;
        transition: .5s;
    }
    .link-projects{
        color: ${colors.textColors};
        text-decoration: none;
        background-color: ${colors.textProjects};
        padding:5px;
        border-radius: 10px;
    }
    .overlay:hover {
        opacity: 1;
    }

`
