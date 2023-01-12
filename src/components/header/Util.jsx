import React, { useState } from 'react';
import { UtilStyle } from '../../styles/Util';
import { ButtonBefore, ButtonAfter } from '../../styles/Button';
// import myData from '../../data.json'
import styled from 'styled-components';
import userData from '../../data.json'



const Util = ((props) => {

    let [user, setUser] = useState(userData);

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
                    {/* <button type="button">홍길동</button> */}
                    <ButtonAfter.LogOut>로그아웃</ButtonAfter.LogOut>
                </UtilStyle.UtilItem>
            </UtilStyle.UtilList>
        </UtilStyle.UtilArea>

    )
})

export default Util;