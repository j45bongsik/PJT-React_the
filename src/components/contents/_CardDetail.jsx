import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DetailStyle } from '../../styles/CardDetail';
import { IMG_LIST } from '../../utils/common'
// import { InputArea, CheckStyle } from '../../styles/Form';
// import CkdLabel from './_CkdLabel'
import { Routes, useParams } from 'react-router-dom';


const Detail = (props) => {

    let {id} = useParams();
    
    let imgList = IMG_LIST();
    
    console.log(imgList)


    return (
        <DetailStyle.detailPage>
            <DetailStyle.itemArea>
                <DetailStyle.itemHead>
                    <h3></h3>
                </DetailStyle.itemHead>
                <DetailStyle.itemCont>

                </DetailStyle.itemCont>
            </DetailStyle.itemArea>

            <DetailStyle.mapArea>
                <DetailStyle.mapHead></DetailStyle.mapHead>
                <DetailStyle.mapCont></DetailStyle.mapCont>
            </DetailStyle.mapArea>
        </DetailStyle.detailPage>
    )

}



export default Detail;