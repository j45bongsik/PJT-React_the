import styled from 'styled-components';
import UserIco from '../assets/images/ico-user.png'
import LogoutIco from '../assets/images/ico-logout.png'
import '../assets/fonts/_Fonts.scss'



export const BtnArea = styled.article `
    display: flex;
    justify-content: center;
    align-items: center;
`;

/* before */
const BeforeDefault = {
    Before:styled.button `
        position: relative;
        &:before {
            content: ''; position: absolute; left: 0;
        }
    `
}

export const ButtonBefore = {
    User:styled(BeforeDefault.Before) `
        padding-left: 25px;
        font-family: var(--font-NotoSansMedium);
        &:before {
            top: 0px;
            width: 20px; height: 20px;
            background: url(${UserIco});
            background-size: cover;
            /* background: url("../assets/images/ico-user.png"); */
        }
        span {
            font-family: var(--font-NotoSansDemLight);
            margin-left: 5px;
        }
    `,
}

/* before end */


/* after */
const AfterDefault = {
    After:styled.button `
        position: relative;
        &:after {
            content: ''; position: absolute; right: 0;
        }
    `
}

export const ButtonAfter = {
    LogOut:styled(AfterDefault.After) `
        padding-right: 30px;
        &:after {
            width: 25px; height: 25px;
            top: -3px;
            background: url(${LogoutIco});
            background-size: cover;
        }
    `
}

export const BasicButton = {
    PrevBtn:styled.button `
        width: 100%; max-width: 200px;
        height: 50px;
        padding: 0px 10px;
        background: #5DDADA;
        color: #fff;
        font-family: var(--font-NotoSans);
        font-size: 16px;
        text-align: center;
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            background: #1f89ac;
        }
    `
}



