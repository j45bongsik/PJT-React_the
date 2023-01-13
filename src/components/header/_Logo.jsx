import React from 'react';
import { LogoStyle } from '../../styles/Logo';
import { useNavigate } from 'react-router-dom';


const Logo = ((props) => {

    let navigate = useNavigate();

    return (
        <LogoStyle.LogoArea >
            <LogoStyle.LogoTextH>
                    <a href="#" onClick={ () => {
                        navigate('/')
                    } }>the</a>
            </LogoStyle.LogoTextH>
        </LogoStyle.LogoArea>
    )
})

export default Logo;