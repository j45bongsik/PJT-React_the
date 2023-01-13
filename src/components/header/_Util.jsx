import React, { useState } from 'react';
import { UtilStyle } from '../../styles/Util';
import { ButtonBefore, ButtonAfter } from '../../styles/Button';



const Util = ((props) => {

    return (
        <UtilStyle.UtilArea>
            <UtilStyle.UtilList>
                <UtilStyle.UtilItem>
                    <ButtonBefore.User>
                        홍길동
                        <span>님</span>
                    </ButtonBefore.User>
                </UtilStyle.UtilItem>
                <UtilStyle.UtilItem>

                    <button type="button">로그인</button>
                </UtilStyle.UtilItem>
                <UtilStyle.UtilItem>
                    <ButtonAfter.LogOut>로그아웃</ButtonAfter.LogOut>
                </UtilStyle.UtilItem>
            </UtilStyle.UtilList>
        </UtilStyle.UtilArea>

    )
})

export default Util;