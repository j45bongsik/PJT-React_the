import React from 'react';
import { LNB_LIST } from "../utils/common"
import Header from '../components/header/Header'
import Lnb from '../components/contents/_Lnb'

const FoodRoute = () => {
    
    const [lnbList] = LNB_LIST();
    return (
        <>
        <Header />
        <Lnb list={lnbList[1]}></Lnb>
        </>
    ) 

}

export default FoodRoute;