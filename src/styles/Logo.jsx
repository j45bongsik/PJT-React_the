import styled from 'styled-components';
import logo from '../assets/images/logo.png'

export const LogoStyle = {
    
    LogoArea:styled.article `

    `,
    LogoTextH:styled.h2 `
        a {
            position: relative;
            display: block; width: 100px; height: 50px;
            text-align: center;
            padding-left: 55px;
            font-family: var(--font-NotoSans);
            font-weight: bold;
            font-size: 28px;
            text-align: left;
            line-height: 74px;
            &:before {
                content: ''; position: absolute; left: 0; top: 0;
                width: 50px; height: 50px;
                background: url(${logo});
                background-size: cover;

            }
        }
    `,
    
} 



