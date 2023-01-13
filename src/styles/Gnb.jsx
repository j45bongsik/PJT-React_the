import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss'


export const GnbStyle = {
    GnbArea:styled.nav `
        flex: 1;
        height: 100%;
    `,
    GnbList:styled.ul `
        height: 100%;
        display: flex; justify-content: center; align-items: center;
    `,
    GnbItem:styled.li `
        width: 100%;
        max-width: 200px;
        height: 100%;
        line-height: 150px;
        a {
            display: block;
            width: 100%; height: 100%;
            padding: 0px 10px; 
            transition: 0.3s;
            font-family: var(--font-NotoSansMedium);
            font-size: 18px;
            text-align: center;
            &:hover {color: #fdc128;}
        }
        &:not(:last-child) {
            margin-right: 10px;
        }
        
    `
}



