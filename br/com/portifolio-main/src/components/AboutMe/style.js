import { styled } from 'styled-components';

export const Section = styled.section`
    /*ABOUT ME*/
    padding: 90px 4%;
    margin-top: 40px;

    #person-full {
        border-radius: 20px;
    }
    .flex {
        align-items: center;
        gap: 60px;
    }

    .text-about {
        color: white;
    }

    .text-about h2 {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 30px;
    }

    .text-about h2 span {
        color: rgb(71, 71, 223);
        display: block;
    }
    p > span{
        color: rgb(71, 71, 223);
        font-weight: 600;
    }
    .text-about p {
        margin: 20px 0px;
        text-align: justify;
    }
    .icon-smile{
        color:white;
        font-size: 20px;
    }

`