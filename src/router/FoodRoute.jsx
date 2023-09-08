import React from 'react';
import { MENU_LIST } from "../utils/common"
import Lnb from '../components/contents/_Lnb'

const FoodRoute = () => {
    
    const [menuList] = MENU_LIST();
    return (
        <Lnb list={menuList[1].lnb}></Lnb>
    ) 

}

export default FoodRoute;