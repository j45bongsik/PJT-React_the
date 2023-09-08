import React, { useRef, useState } from 'react';
import { LnbStyle } from '../../styles/Lnb';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Lnb = ({list}) => {

    const ref = useRef();
    

    let [label, setLabel] = useState(false);

    return (
        
        <LnbStyle.LnbArea className={label ? 'active' : undefined} ref={ref}>
            <LnbStyle.LnbInner>
                <LnbStyle.LnbList className="cScrollY">
                    
                        {
                            list.map(({lnbItem, lnbLink}, index) => {
                                return (
                                    <LnbStyle.LnbItem key={index} >
                                        <Link to={lnbLink} target="_blank" rel="noopener noreferrer" alt={index + " 새창으로 열기"}>
                                            {lnbItem}
                                        </Link>
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
}


export default Lnb;