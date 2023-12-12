import {styled} from 'styled-components';
import { colors } from '../../config/colors';

export const Footer = styled.footer `
    padding: 60px 4%;
    .logo-footer img {
        border-radius: 20px;
    }

    .flex {
        justify-content: space-between;
    }

    .line-footer {
        padding: 20px 0;
    }

    .border-footer {
        border-top: 2px solid ${colors.spanColor};
    }

    .line-footer p i {
        color: ${colors.spanColor};
        font-size: 22px;
    }

    .line-footer p a {
        color: ${colors.textColors};
        padding-left: 10px;
    }
    .Copyright{
        color:${colors.textColors};
        text-align: right;
    }
    .developer{
        text-align: center;
        color: ${colors.links};
        font-weight: 200;
        font-size: 15px;
    }

`