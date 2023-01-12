import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss'

export const KakaoStyle = {
    mapArea:styled.article `
        width: 100%; height: 100%; max-height: 600px;
        max-width: 1920px;
        margin: 0 auto;
    `,
    mapHeader:styled.div `
        width: 100%; height: 50px;
    `,
    mapCont:styled.div `
        width: 100%; height: 550px;
        #map {
            height: 100%;
        }
    `
}


