import { styled } from 'styled-components';
import { colors } from '../../config/colors';

export const Section = styled.section`
    .skills {
        padding: 40px 4%;
        margin-top: 60px;
    }

    .skills .flex {
        gap: 60px;
    }

    .skills .skills-box {
        color: ${colors.textColors};
        padding: 40px;
        border: 2px solid white;
        margin-top: 60px;
        border-radius: 20px;
        transition: .2s;
    }

    .skills .skills-box:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.658);
    }

    .skills .skills-box i {
        font-size: 58px;
        color: ${colors.iconSkilss};
    }

    .skills .skills-box h3 {
        font-size: 26px;
        margin: 15px 0px;
    }
    .skills span {
        color: ${colors.spanColor};
        display: block;
    }

`