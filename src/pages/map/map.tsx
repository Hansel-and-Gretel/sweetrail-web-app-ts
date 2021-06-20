import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {KAKAO_MAP_KEY} from "../../constants/env";
import {Place} from "../../types/place";

import * as placeSelector from "../../store/place/selectors";
import * as placeActions from "../../store/place/actions";

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`

export const DEFAULT_LONGITUDE = "37.5407625"
export const DEFAULT_LATITUDE = "127.0771541"

interface mapProps {
    places: Place[];
    isReady?: boolean
}

function MapComp({places, isReady}: mapProps) {

    // @ts-ignore
    const { kakao } = window;

    if(places){
        console.log(places)
    }

    useEffect(() => {
        mapscript()
    }, []);


    const mapscript = () => {
        /** 지도 생성하기 **/
        const container = document.getElementById('kakaoMap');
        const options = {
            // center: new kakao.maps.LatLng(DEFAULT_LONGITUDE, DEFAULT_LATITUDE),
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 5
        };
        const map = new kakao.maps.Map(container, options);


        /** 컨드롤 생성 **/
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        let mapTypeControl = new kakao.maps.MapTypeControl();
        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



        /** 마커 찍기 **/
        //     // 마커를 표시할 위치와 title 객체 배열입니다
        //
        // // 마커 이미지의 이미지 주소입니다
        // const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        //
        //
        // let imageSize = new kakao.maps.Size(24, 35);
        // // 마커 이미지를 생성합니다
        // let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        places?.forEach((el)=>{
            new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(el.latitude, el.longitude), // 마커를 표시할 위치
                title : el.placeName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                // image : markerImage // 마커 이미지
            })
        })

    }



    return(
        <>
            <KakaoMap id='kakaoMap'/>
        </>
    )
}

export default MapComp