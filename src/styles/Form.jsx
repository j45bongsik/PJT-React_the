import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss'
import ChkIco from '../assets/images/ico-checked.png'

export const InputArea = styled.article `
    display: flex;
    justify-content: flex-start;
    align-items: center;

`

export const CheckStyle = {
    checkArea:styled.div `
        &:not(last-child) {
            margin-right: 10px;
        }
    `,
    checkInput:styled.input `
        &:checked + label {
            &:after {
                background: url(${ChkIco});
                width: 15px; height: 15px;
                background-size: cover;

            }
        }
    `,

    checkLabel:styled.label `
        position: relative;
        padding-left: 25px;
        cursor: pointer;
        font-family: var(--font-NotaSans);
        font-size: 14px;
        &:before {
            content: ''; position: absolute; top: 1px; left: 0;
            width: 15px; height: 15px;
            background: #fff;
            border: 2px solid #074b84;
            border-radius: 3px;
        }
        &:after {
            content: ''; position: absolute; top: 0; left: 5px;
        }
    `
}


