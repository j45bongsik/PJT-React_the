import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CardStyle } from '../../styles/Card';
import { IMG_LIST } from '../../utils/common'
import { InputArea, CheckStyle } from '../../styles/Form';
import CkdLabel from './_CkdLabel'
import { Routes, useNavigate } from 'react-router-dom';



const Card = ({ matche },props) => {

    let [checked, setChecked] = useState(true);
    let navigate = useNavigate()

    const imgList = IMG_LIST()


    return (
        <CardStyle.cardArea>
            <CardStyle.cardHead>

                <InputArea>
                <CkdLabel label={'전체보기'} id={'cardAll'} name={'all'} checked={checked} onChange={() => {
                    setChecked(!checked)
                }}
                    ></CkdLabel>
                    <CkdLabel label={'보기01'} id={'cardCoffee'} name={'coffee'}></CkdLabel>
                    <CkdLabel label={'보기02'} id={'cardEtc'} name={'etc'} ></CkdLabel>
                </InputArea>

            </CardStyle.cardHead>
            
            <CardStyle.cardCont>
                <CardStyle.cardList>


                    {
                        imgList[0].map(({id, alt, src, name, link, key},index) => {
                            return (

                                <CardStyle.cardItem key={id}>
                                        <CardStyle.cardLink to={('/detail/' + id)}>
                                            <CardStyle.cardFigure>
                                                <img src={src} alt={alt} />
                                                <figcaption className="elips">
                                                    {name}
                                                </figcaption>
                                            </CardStyle.cardFigure>
                                        </CardStyle.cardLink>

                                </CardStyle.cardItem>

                            )
                        })
                    }

                    

                    
                </CardStyle.cardList>
            </CardStyle.cardCont>

        </CardStyle.cardArea>
    )

}



export default Card;