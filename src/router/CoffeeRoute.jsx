import React from 'react';
import { LNB_LIST } from "../utils/common"
import Lnb from '../components/contents/_Lnb'

const CoffeeRoute = () => {
    
    const [lnbList] = LNB_LIST();

    return (
        <Lnb lnbList={lnbList[1]}></Lnb>
    ) 

}

export default CoffeeRoute;