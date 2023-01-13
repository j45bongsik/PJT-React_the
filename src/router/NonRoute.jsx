import React from 'react';
import { NonStyle } from '../styles/NonPage';
import { BasicButton, BtnArea } from '../styles/Button';
import {  useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import error from '../assets/images/404.json'
import cloud from '../assets/images/404cloud.json'


const Lottie01 = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return(
        <Lottie options={defaultOptions} 
        width={600}
        style={{opacity:0.7}}
        />
    )
}

const Lottie02 = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cloud,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return(
        <Lottie options={defaultOptions}
            style={{maxWidth:550}}
        />
    )
}



const NonRoute = (props) => {

    const navigate = useNavigate();

    return (
        <NonStyle.PageArea>
            <NonStyle.PageInner>
                <NonStyle.PageHead>
                    <NonStyle.Title>
                        요청한 페이지를 찾을 수 없습니다.
                    </NonStyle.Title>
                </NonStyle.PageHead>
                <NonStyle.PageCont>

                    <Lottie01></Lottie01>
                    <BtnArea>

                        <BasicButton.PrevBtn onClick={() => navigate(-1)}>
                            이전 페이지
                        </BasicButton.PrevBtn>
                    </BtnArea>

                </NonStyle.PageCont>
                <NonStyle.InnerBefore>
                    <Lottie02
                        
                    ></Lottie02>

                </NonStyle.InnerBefore>
            </NonStyle.PageInner>
        </NonStyle.PageArea>
    ) 

}

export default NonRoute;