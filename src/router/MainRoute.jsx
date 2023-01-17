import React from 'react';
// import Kakao from '../components/contents/Kakao'
import Kakao from '../components/contents/_Kakao'
// import { ContStyle } from '../styles/Contents';
import { ContStyle } from '../styles/Contents';
import Header from '../components/header/Header'
import Card from '../components/contents/_Card'


const MainRoute = (props) => {
    

    return (
        <>
            <Header></Header>
            <ContStyle.contArea>
                <Kakao />
                
                <Card />
            </ContStyle.contArea>
        </>
    ) 

}

export default MainRoute;