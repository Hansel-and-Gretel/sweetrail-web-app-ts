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
import Chip from "../../components/common/Chip";
import {inspect} from "util";
import * as colors from '../../styles/colors'

interface mapProps {
    id: number
}


const defaultPosition = {
    center: {
        lat: 50.1,
        lng: 8.6
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
      display: inline-block;
      border-radius: 20px;
      overflow: hidden;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
      
      .map{
        width: 100%;
        height: 35vh;
      }

      @media (min-width: 1200px) {
        margin: 0;
        width: 50vw;
        .map{
          width: 100%;
          height: 85vh;
        }
      }
      
    `,
    ContentContainer: styled.div`
        width: 90vw;
        height: 70%;
        margin: 0 auto;
        padding: 10px;
        .grayfont {
          color: gray;
        }
      @media (min-width: 768px) {
        padding: 20px;
        img {
          width: 420px;
          height: 420px;
        }
      }
        @media (min-width: 1200px) {
            //margin: 0;
            flex-direction: row;
            width: 50vw;
        }
    `,
    PlaceCard: styled.div`
      margin-top: 10px;
      padding: 7px;
      background-color: #F6F6F6;
      border-radius: 20px;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
      @media (min-width: 768px) {
        padding: 20px;
      }
    `,
    ImageContainer: styled.div`
      display: flex;
      justify-content: center;
      img {
        width: 300px;
        height: 300px;
        background-size: cover;
        border-radius: 10px;
        text-align: center;
      }
      @media (min-width: 768px) {
        //padding: 20px;
        img {
          width: 420px;
          height: 420px;
        }
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
                                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_API }}
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
                                        text={(key+1).toString()}
                                        place={place}
                                    />
                                ))}
                            </GoogleMapReact>
                        </div>
                </S.MapContainer>
                <S.ContentContainer>
                    {
                        getPlaces.placeList[selected] && <>
                            <Chip color={'pink'}>{getPlaces.placeList[selected].category}</Chip>
                            <S.PlaceCard>
                                <h2>{getPlaces.placeList[selected].placeName}</h2>
                                <p className={'grayfont'}>{getPlaces.placeList[selected].pinTime}</p>
                                <p>{getPlaces.placeList[selected].note}</p>
                                <S.ImageContainer>
                                    <img src={getPlaces.placeList[selected]?.image} alt="장소사진"/>
                                </S.ImageContainer>
                            </S.PlaceCard>
                        </>
                    }

                </S.ContentContainer>
            </S.Container>
        </>

    )
}

export default MapPage