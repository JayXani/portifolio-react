import { styled } from 'styled-components';

export const Section = styled.section`
    .skills {
        padding: 40px 4%;
        margin-top: 60px;
    }

    .skills .flex {
        gap: 60px;
    }

    .skills .skills-box {
        color: white;
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
        color: rgb(171, 171, 224);
    }

    .skills .skills-box h3 {
        font-size: 26px;
        margin: 15px 0px;
    }


`