import React from 'react';
import { MENU_LIST } from "../utils/common"
import Lnb from '../components/contents/_Lnb'

const EtcRoute = () => {
    
    const [menuList] = MENU_LIST();

    
    return (
        <Lnb list={menuList[2].lnb}></Lnb>
    ) 

}

export default EtcRoute;