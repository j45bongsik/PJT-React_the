import React from 'react';
// import Kakao from '../components/contents/Kakao'
import Map from '../components/contents/_Map'
// import { ContStyle } from '../styles/Contents';
import { ContStyle } from '../styles/Contents';
import Card from '../components/contents/_Card'


const MainRoute = (props) => {
    

    return (
            <ContStyle.contArea>
                <Map />
                
                <Card />
            </ContStyle.contArea>
    ) 

}

export default MainRoute;