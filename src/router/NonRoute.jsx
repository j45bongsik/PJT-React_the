import React from 'react';
// import Kakao from '../components/contents/Kakao'
import Kakao from '../components/contents/_Kakao'
// import { ContStyle } from '../styles/Contents';
import { ContStyle } from '../styles/Contents';
import Header from '../components/header/Header'


const NonRoute = (props) => {
    

    return (
        <>
            <Header></Header>
            <ContStyle.contArea>
                {/* <Kakao /> */}
            </ContStyle.contArea>
        </>
    ) 

}

export default NonRoute;