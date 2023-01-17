import React, { useState } from 'react';
import { LnbStyle } from '../../styles/Lnb';
import styled from 'styled-components';


const Lnb = (({list},props) => {

    let [label, setLabel] = useState(false);

    console.log(list)
    
    return (
        
        <LnbStyle.LnbArea className={label ? 'active' : undefined}>
            <LnbStyle.LnbInner>
                <LnbStyle.LnbList className="cScrollY">
                    
                    {
                        list.listItem.map((i,index) => {
                            return (
                                <LnbStyle.LnbItem key={index}>
                                    <a href={list.link[index]} >{list.listItem[index]}</a>
                                </LnbStyle.LnbItem>
                            )
                        })
                    }

                </LnbStyle.LnbList>
            </LnbStyle.LnbInner>

            <LnbStyle.LnbLabel onClick={ ()=>{
                setLabel(!label)
            } } className={label ? 'active' : undefined}>
                <span></span>
            </LnbStyle.LnbLabel>
        </LnbStyle.LnbArea>

    )
})


export default Lnb;