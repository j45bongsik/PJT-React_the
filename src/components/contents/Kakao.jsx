import React, { useEffect, useState } from 'react';
import { KakaoStyle } from '../../styles/Kakao';
import { InputArea, CheckStyle } from '../../styles/Form';
// import myData from '../../data.json'
import styled from 'styled-components';
import CkdLabel from './CkdLabel'

const { kakao } = window;


const Kakao = ((props) => {

    useEffect(() => {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨 
        }; 
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
        if (navigator.geolocation) {

            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {
                
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도
                
                var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                    message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
                
                // 마커와 인포윈도우를 표시합니다
                displayMarker(locPosition, message);
                    
            });
            
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            
            var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
                message = '현재 위치를 불러올 수 없습니다.'
                
            displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({  
                map: map, 
                position: locPosition
            }); 
            
            var iwContent = message, // 인포윈도우에 표시할 내용
                iwRemoveable = true;

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            });
            
            // 인포윈도우를 마커위에 표시합니다 
            infowindow.open(map, marker);
            
            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);      
        }    
        
    },[])

    

    return (

        <KakaoStyle.mapArea>
            <KakaoStyle.mapHeader>
                <InputArea>
                    <CkdLabel label={'전체보기'} id={'allView'} name={'chk01'}></CkdLabel>
                    <CkdLabel label={'보기01'} id={'coffee'} name={'chk02'}></CkdLabel>
                    <CkdLabel label={'보기02'} id={'food'} name={'chk03'}></CkdLabel>
                </InputArea>
            </KakaoStyle.mapHeader>
            <KakaoStyle.mapCont>
                <div id="map"></div>
            </KakaoStyle.mapCont>
        </KakaoStyle.mapArea>

        

    )
})

export default Kakao;