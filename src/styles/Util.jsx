import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss';

export const UtilStyle = {
    
    UtilArea:styled.article `

    `,
    UtilList:styled.ul `
        display: flex; justify-content: flex-end; align-items: center;
    `,
    UtilItem:styled.li `
        &:not(:last-child) {
            margin-right: 10px;
        }
        font-family: var(--font-NotoSans);
        font-size: 14px;
    `
} 



