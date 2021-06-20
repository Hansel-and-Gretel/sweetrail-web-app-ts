import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import * as journeySelector from "../../store/journey/selectors";
import * as placeSelector from "../../store/place/selectors";
import * as journeyActions from "../../store/journey/actions";
import * as placeActions from "../../store/place/actions";

import MapComp from "./map";
import Navbar from "../../components/common/Nav/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`

const S = {
    Container: styled.div`
        display: flex;
    `,
    MapContainer: styled.div`
      text-align: right;
      width: 50vw;
      height: 100vh;
    `,
    ContentContainer: styled.div`
    `
}

function MapPage() {

    // @ts-ignore
    const { kakao } = window;

    const dispatch = useDispatch()
    const getJourney = useSelector(journeySelector.getJourneyDetail)
    const getPlaces = useSelector(placeSelector.getPlaceByJourney)

    const params = useParams<{ id: string }>()
    const history = useHistory()


    useEffect(()=> {
        window.scrollTo(0, 0)
        dispatch(journeyActions.getJourneyDetailAsync.request({id: parseInt(params.id)}))
        dispatch(placeActions.getPlaceByJourneyAsync.request({id: parseInt(params.id)}))
    },[])


    useEffect(() => {
        mapscript()
    }, [dispatch])

    const mapscript = () => {
        console.log(getPlaces.placeList)
        /** 지도 생성하기 **/
        const container = document.getElementById('kakaoMap');
        const options = {
            // center: new kakao.maps.LatLng(DEFAULT_LONGITUDE, DEFAULT_LATITUDE),
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 5
        };
        const map = new kakao.maps.Map(container, options);

        /** 컨드롤 생성 **/
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        /** 마커 찍기 **/
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        let imageSize = new kakao.maps.Size(24, 35);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        getPlaces.placeList?.forEach((el)=>{
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
            <Navbar/>
            <S.Container>
                <S.MapContainer>
                    {/*{<MapComp places={getPlaces.placeList}/>}*/}
                    <KakaoMap id='kakaoMap'/>
                </S.MapContainer>
                <S.ContentContainer>
                    hello
                </S.ContentContainer>
            </S.Container>
        </>

    )
}

export default MapPage