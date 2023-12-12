import { styled } from 'styled-components';
import { colors } from '../../config/colors';

export const Section = styled.section`
    .skills {
        padding: 40px 4%;
        margin-top: 60px;
    }

    .skills .flex {
        gap: 50px;
        flex-wrap: wrap;
    }

    .skills .skills-box {
        color: ${colors.textColors};
        padding: 10px 5px;
        border: 2px solid white;
        margin-top: 40px;
        border-radius: 20px;
        transition: .2s;
        flex-grow: 1;
        text-align: center;
    }

    .skills .skills-box:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.658);
    }

    .skills .skills-box .icons-skills {
        font-size: 58px;
        color: ${colors.iconSkilss};
        justify-items: center;
    }

    .skills .skills-box h3 {
        font-size: 26px;
        margin: 15px 15px;
    }
    .skills span {
        color: ${colors.spanColor};
        display: block;
    }

`