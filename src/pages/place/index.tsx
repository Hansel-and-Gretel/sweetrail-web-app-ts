import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import * as journeySelector from "../../store/journey/selectors";
import * as placeSelector from "../../store/place/selectors";
import * as journeyActions from "../../store/journey/actions";
import * as placeActions from "../../store/place/actions";

import Navbar from "../../components/common/Nav/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import GoogleMap from "../map/map";
import GoogleMapReact from "google-map-react";
// import {GOOGLE_MAP_KEY} from "../../constants/env";
import Marker from "../map/marker";
import {Place} from "../../types/place";


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
      
      .map{
        width: 100%;
        height: 50vh;
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
        img {
          display: flex;
          width: 300px;
          height: 300px;
          background-size: cover;
        }
      @media (min-width: 768px) {
        padding: 20px;
        img {
          width: 420px;
          height: 420px;
          background-size: cover;
        }
      }
        @media (min-width: 1200px) {
            //margin: 0;
            flex-direction: row;
            width: 50vw;
        }
    `
}

function PlacePage() {

    // @ts-ignore
    const { kakao } = window;

    const dispatch = useDispatch()
    const getPlaces = useSelector(placeSelector.getAllPlaceList)

    const params = useParams<{ id: string }>()
    const [selected, setSelected] = useState(1)

    const [cur, setCur] = useState(parseInt(params.id))
    const [place, setPlace] = useState<Place | undefined>()


    useEffect(()=> {
        window.scrollTo(0, 0)
        dispatch(placeActions.getAllPlaceAsync.request())
    },[])

    useEffect(()=> {
        setPlace(getPlaces.placeList.find(isPlace))
    },[getPlaces])


    function isPlace(element: Place)  {
        if(element.id === cur)  {
            return true;
        }
    }

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
                            {getPlaces.placeList?.map((place, key) => {
                                if(place.id === cur){
                                    return(
                                        <Marker
                                            key={key}
                                            lat={parseFloat(place.latitude)}
                                            lng={parseFloat(place.longitude)}
                                            show={key !== selected}
                                            place={place}
                                        />
                                        )
                                }
                            })}
                        </GoogleMapReact>
                    </div>
                </S.MapContainer>
                <S.ContentContainer>
                    {
                        place && <>
                            <h2>{place.placeName}</h2>
                            <p>{place.createdAt}</p>
                            <p>category: {place.category}</p>
                            <p>{place.note}</p>
                            <div>
                                <img src={place.image} alt="장소사진"/>
                            </div>
                        </>
                    }
                </S.ContentContainer>
            </S.Container>
        </>

    )
}

export default PlacePage