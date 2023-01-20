import React from 'react';
import { LNB_LIST } from "../utils/common"
import Lnb from '../components/contents/_Lnb'

const FoodRoute = () => {
    
    const [lnbList] = LNB_LIST();
    return (
        <Lnb list={lnbList[1]}></Lnb>
    ) 

}

export default FoodRoute;