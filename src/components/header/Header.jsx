import React from 'react';
import Logo from './_Logo';
import Gnb from './_Gnb';
import Util from './_Util';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const HeaderStyle = {
    Wrap:styled.header `
        position: fixed;
        left: 0; top: 0; 
        width: 100%; 
        height: 150px;
        transition: height 1s;
        background: #fff;
        z-index: 2;
        
        &.active {
            height: 150px;
        }
    `,
    Outer:styled.article `
        overflow:hidden;
        width: 100%; max-width: 1440px; height: 100%;
        margin: 0 auto;
    `,
    Inner:styled.div `
        display: flex; justify-content: space-between; align-items: center;
        width: 100%; height: 150px;
    `,
}

const Header = (props) => {

    
    return (
        <>
            <HeaderStyle.Wrap>
                <HeaderStyle.Outer>
                    <HeaderStyle.Inner>
                        <Logo />
                        <Gnb />
                        <Util />
                    </HeaderStyle.Inner>
                </HeaderStyle.Outer>
            </HeaderStyle.Wrap>
            
            <Outlet></Outlet>

        </>
    )
}

export default Header;