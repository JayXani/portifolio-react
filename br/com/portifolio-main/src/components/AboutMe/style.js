import { styled } from 'styled-components';

export const Div = styled.div`
    /*ABOUT ME*/
    section.about-me {
        padding: 90px 4%;
    }

    #person-full {
        border-radius: 20px;
    }
    section.about-me .flex {
        align-items: center;
        gap: 60px;
    }

    .about-me .text-about {
        color: white;
    }

    .about-me .text-about h2 {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 30px;
    }

    .about-me .text-about h2 span {
        color: rgb(71, 71, 223);
        display: block;
    }

    .about-me .text-about p {
        margin: 20px 0px;
        text-align: justify;
    }

`