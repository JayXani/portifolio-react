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
`