import React from 'react';
import { LNB_LIST } from "../utils/common"
import Header from '../components/header/Header'
import Lnb from '../components/contents/Lnb'

const CoffeeRoute = () => {
    
    const [lnbList] = LNB_LIST();
    return (
        <>
        <Header />
        <Lnb list={lnbList[0]}></Lnb>
        </>
    ) 

}

export default CoffeeRoute;