import React, { useState } from 'react';
import { LnbStyle } from '../../styles/Lnb';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LNB_LIST } from '../../utils/common'

const Lnb = (props) => {

    let [label, setLabel] = useState(false);

    const [lnbList] = LNB_LIST()

    console.log(lnbList[0])

    
    return (
        
        <LnbStyle.LnbArea className={label ? 'active' : undefined}>
            <LnbStyle.LnbInner>
                <LnbStyle.LnbList className="cScrollY">
                    
                    {
                        lnbList.map((i, index) => {

                            return (
                                
                                i.listItem.map((j, index) => {
                                    // console.log(j)
                                    return (
                                        <LnbStyle.LnbItem key={j}>
                                            {j}
                                        {/* <Link to={} /> */}
                                    </LnbStyle.LnbItem>
                                    )
                                
                                })
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
}


export default Lnb;