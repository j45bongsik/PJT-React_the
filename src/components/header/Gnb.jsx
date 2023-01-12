import React, { useState } from 'react';
import { GnbStyle } from '../../styles/Gnb';
// import myData from '../../data.json'
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom'


const Gnb = ((props) => {
    
    let navigate = useNavigate();

    return (

        <GnbStyle.GnbArea>
            <GnbStyle.GnbList>
                <GnbStyle.GnbItem>
                    <a href="#" onClick={ () => {
                        navigate('/coffee')
                    } }>Coffee</a>
                </GnbStyle.GnbItem>
                <GnbStyle.GnbItem>
                    <a href="#" onClick={ () => {
                        navigate('/food')
                    } }>Food</a>
                </GnbStyle.GnbItem>
                <GnbStyle.GnbItem>
                    <a href="#" onClick={ () => {
                        navigate('/etc')
                    } }>Etc.</a>
                </GnbStyle.GnbItem>
            </GnbStyle.GnbList>
        </GnbStyle.GnbArea>


    )
})

export default Gnb;