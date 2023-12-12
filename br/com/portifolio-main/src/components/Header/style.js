import styled from 'styled-components';
import { colors } from '../../config/colors';

export const Header = styled.header`
    padding: 40px 4%;

    .interface {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    a {
        color:${colors.links};
        text-decoration: none;
        transition: .2s;
    }

    .desktop li a:hover {
        color: ${colors.textColors};
        transform: scale(1.10);
    }

    a img {
        padding-top: 5px;
        border-radius: 20px;
    }

    ul {
        list-style-type: none;
    }

    .desktop ul li {
        display: inline-block;
        padding: 5px 30px;
        margin: auto 15px auto 15px;
        border-radius: 10px;
        border: 1px solid darkblue;
    }

    .desktop ul li:hover {
        transform: scale(1.10);
        transition: .2s;
    }
    i {
        color: ${colors.spanColor};
        font-size: 40px;
        display: none;
    }
    
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