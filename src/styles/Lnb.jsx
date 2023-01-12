import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss'
import ArrowIco from '../assets/images/ico-arrow.png'

export const LnbStyle = {
    LnbArea:styled.nav `
        position: fixed;
        left: 0; top: 0;
        width: 0; height: 100%; 
        background: #fff;
        box-shadow: 5px 0px 7px 0px #eee;
        transition: 0.5s;
        z-index: 4;
        &.active {
            width: 300px;

        }
    `,
    LnbInner:styled.div `
        width: 100%;
        height: 100%;
        padding-top: 150px;
        overflow: hidden;
    `,
    LnbList:styled.ul `
        width: 300px;
        height: 100%; 
        padding: 0px 20px 50px 20px;
        
    `,

    LnbItem:styled.li `
        width: 100%;
        height: 50px;
        &:not(:first-child) {
            margin-top: 5px;
        }
        a {
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%; height: 100%;
            transition: 0.3s;
            font-family: var(--font-NotoSansMedium);
            font-size: 16px;
            cursor: pointer;
            /* text-align: right; */
            &:after {
                content: ''; position: absolute;
                width: 0; height: 2px;
                bottom: 0; left:50%; transform: translateX(-50%);
                transition:  0.3s;
            }
            &:hover {
                color: #fdc128;
                &:after {
                    background: #fdc128;
                    width: 100%;
                    transition:  0.3s;
                }
            }
        }
    `,
    LnbLabel:styled.button `
        position: absolute;
        right: -30px; top: 50%; transform: translateY(-50%);
        width: 30px; height: 50px;
        
        box-shadow: 5px 0px 7px 0px #eee;
        border-radius: 0px 8px 8px 0px;
        overflow: hidden;
        span {
            display: block; width: 100%; height: 100%;
            background: #fff url(${ArrowIco}) no-repeat center;
            background-size: 30px 30px;
        }
        &.active {
            span {
                transform: rotate(-180deg);
            }
        }
    `
}


