import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss'

export const NonStyle = {
    PageArea:styled.section `
        width: 100%; height: 100%;
    `,
    PageInner:styled.article `
        position: relative;
        display: flex; justify-content: center; align-items: center;
        flex-wrap: wrap;
        width: 100%; height: 100%;
    `,
    PageHead:styled.div `
        width: 100%;
        margin-top: auto;
        margin-bottom: 0;
    `,
    Title:styled.h2 `
        font-family: var(--font-NotoSans);
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    `,
    PageCont:styled.div `
        width: 100%;
        margin-top: 30px;
        margin-bottom: auto;
    `,
    InnerBefore:styled.div `
        position: absolute; left: 0; top: 0;
        width: 100%; height: 100%; 
        z-index: -1;
        opacity: 0.2;
    `
}




