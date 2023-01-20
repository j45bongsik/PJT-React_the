import React from 'react';
import { LNB_LIST } from "../utils/common"
import Lnb from '../components/contents/_Lnb'

const EtcRoute = () => {
    
    const [lnbList] = LNB_LIST();
    return (
        <Lnb list={lnbList[2]}></Lnb>
    ) 

}

export default EtcRoute;