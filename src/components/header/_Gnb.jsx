import React, { useState } from 'react';
import { GnbStyle } from '../../styles/Gnb';
import { Link, useNavigate } from 'react-router-dom'
import { GNB_LIST } from '../../utils/common'


const Gnb = (props) => {
    
    const [gnbList] = GNB_LIST();



    return (

        <GnbStyle.GnbArea>
            <GnbStyle.GnbList>

                {
                    gnbList.map(({link, name, id},index) => {
                        return (
                            <GnbStyle.GnbItem key={id}>
                                <Link to={link}>{name}</Link>
                            </GnbStyle.GnbItem>
                        )
                    })
                    
                }
                
            </GnbStyle.GnbList>
        </GnbStyle.GnbArea>


    )
}

export default Gnb;