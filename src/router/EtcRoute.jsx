import React from 'react';
import { LNB_LIST } from "../utils/common"
import Header from '../components/header/Header'
import Lnb from '../components/contents/_Lnb'

const EtcRoute = () => {
    
    const [lnbList] = LNB_LIST();
    return (
        <>
        <Header />
        <Lnb list={lnbList[2]}></Lnb>
        </>
    ) 

}

export default EtcRoute;