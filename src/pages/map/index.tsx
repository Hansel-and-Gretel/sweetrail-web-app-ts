import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import * as journeySelector from "../../store/journey/selectors";
import * as placeSelector from "../../store/place/selectors";
import * as journeyActions from "../../store/journey/actions";
import * as placeActions from "../../store/place/actions";

import Navbar from "../../components/common/Nav/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import GoogleMap from "./map";
import GoogleMapReact from "google-map-react";
// import {GOOGLE_MAP_KEY} from "../../constants/env";
import Marker from "./marker";


interface mapProps {
    id: number
}


const defaultPosition = {
    center: {
        lat: 37.5408,
        lng: 127.0793
    },
    zoom: 13
};

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        
        padding: 10px;
        @media (min-width: 1200px) {
          flex-direction: row;
          padding: 40px;
        }
    `,
    MapContainer: styled.div`
      width: 90vw;
      height: 70%;
      margin: 0 auto;
      
      .map{
        width: 100%;
        height: 70vh;
      }

      @media (min-width: 1200px) {
        margin: 0;
        width: 50vw;
      }
      
    `,
    ContentContainer: styled.div`
        width: 90vw;
        height: 70%;
        padding: 40px;
        @media (min-width: 1200px) {
            margin: 0;
            flex-direction: row;
            width: 50vw;
        }
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
    const [selected, setSelected] = useState(1)


    useEffect(()=> {
        window.scrollTo(0, 0)
        dispatch(journeyActions.getJourneyDetailAsync.request({id: parseInt(params.id)}))
        dispatch(placeActions.getPlaceByJourneyAsync.request({id: parseInt(params.id)}))
    },[])


    return(
        <>
            <Navbar/>
            <S.Container>
                <S.MapContainer>
                    {/*<GoogleMap id={parseInt(params.id)}/>*/}
                        <div className={'map'}>
                            <GoogleMapReact
                                // @ts-ignore
                                bootstrapURLKeys={{key: GOOGLE_MAP_KEY }}
                                defaultCenter={defaultPosition.center}
                                defaultZoom={defaultPosition.zoom}
                                onChildClick={(childProps)=>setSelected(childProps)}
                            >
                                {getPlaces.placeList?.map((place, key) => (
                                    <Marker
                                        key={key}
                                        lat={parseFloat(place.latitude)}
                                        lng={parseFloat(place.longitude)}
                                        show={key!==selected}
                                        text={(place.id).toString()}
                                        place={place}
                                    />
                                ))}
                            </GoogleMapReact>
                        </div>
                </S.MapContainer>
                <S.ContentContainer>
                    {
                        getPlaces.placeList[selected] && <>
                            <h1>{getPlaces.placeList[selected].id}번째 장소 : {getPlaces.placeList[selected].placeName}</h1>
                            <p>{getPlaces.placeList[selected].createdAt}</p>
                            <p>{getPlaces.placeList[selected].note}</p>
                            <img src={getPlaces.placeList[selected]?.image} alt="장소사진"/>
                        </>
                    }

                </S.ContentContainer>
            </S.Container>
        </>

    )
}

export default MapPage