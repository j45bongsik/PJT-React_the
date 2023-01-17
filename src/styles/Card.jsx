import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss'

export const CardStyle = {

    cardArea:styled.article `
        margin-top: 50px;
    `,
    cardHead:styled.div `
        height: 50px;
    `,
    cardCont:styled.div `
        
    `,
    cardList:styled.ul `
        display: flex; justify-content: space-between; align-items: flex-start;
        flex-wrap: wrap;
    `,
    cardItem:styled.li `
        width: calc(100% / 3 - 15px);
        font-family: var(--font-NotoSans);
        font-size: 16px;
        background: #fff;
        box-shadow: 0px 3px 3px 3px rgba(255, 239, 225, 0.6);
        &:nth-child(n+4) {
            margin-top: 30px;
        }
    `,
    cardLink:styled.a `
        display: block; width: 100%;

        &:hover, &:focus {
            img {
                transform: scale(1);
            }
            figcaption {
                width: 100%;
                bottom: 0;
            }
        }
    `,
    cardFigure:styled.figure `

        position: relative;
        overflow: hidden;
        img {
            display: block;
            height: 300px;
            transform: scale(0.9);
            transition: 0.3s;

        }
        figcaption {
            position: absolute;
            right: 0; bottom: -40px;
            width: 60%;
            height: 50px;
            line-height: 50px;
            padding: 0px 10px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 5px 5px 0 0;
            color: #fff;
            text-align: left;
            transition:  0.3s;
        }
    `

}


