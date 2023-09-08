import React from 'react';
import { MENU_LIST } from "../utils/common"
import Lnb from '../components/contents/_Lnb'

const CoffeeRoute = () => {
    
    const [menuList] = MENU_LIST();

    return (
        <Lnb list={menuList[0].lnb}></Lnb>
    ) 

}

export default CoffeeRoute;