import {styled} from 'styled-components';
import {colors} from '../../config/colors';

export const Container = styled.div`

    .menu-mobile {
        background-color: ${colors.bodyColor};
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99999999;
        width: 0%;
        overflow: hidden;
        transition: .3s;
        display: block;
    }

    .menu-opened {
        width: 60%;
    }

    .menu-opened ~.overlay-menu {
        display: block;
    }

    .menu-mobile nav ul {
        text-align: right;
    }

    .menu-mobile nav ul li a {
        color: ${colors.textColors};
        font-size: 20px;
        font-weight: 300;
        padding: 20px 5%;
        display: block;
    }

    .menu-mobile nav ul li a:hover {
        background-color: ${colors.spanColor};
        color: ${colors.bodyColor};
        font-weight: 500;
    }

    .bi-x-lg {
        color: ${colors.spanColor};
        font-size: 25px;
    }

    .menu-mobile .btn-close {
        padding: 20px 5%;
    }

    .overlay-menu {
        background-color: ${colors.overlayColor};
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 888888;
        display: none;
    }

`