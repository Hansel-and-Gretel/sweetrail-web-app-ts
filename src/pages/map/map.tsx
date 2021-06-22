import React, {useEffect, useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Place} from "../../types/place";
import styled from "styled-components";

import * as placeSelector from "../../store/place/selectors";
import * as placeActions from "../../store/place/actions";
import {useDispatch, useSelector} from "react-redux";
import {inspect} from "util";
import * as colors from '../../styles/colors'
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

function GoogleMap ({id} : mapProps) {
    const getPlaces = useSelector(placeSelector.getPlaceByJourney)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(0)

    useEffect(()=> {
        window.scrollTo(0, 0)
        dispatch(placeActions.getPlaceByJourneyAsync.request({id: id}))
    },[])

    return (
        <>
            <div style={{height: '100vh', width: '100%'}}>
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
            <div>
                {getPlaces.placeList[selected]?.placeName}
            </div>
        </>
    )
}

export default GoogleMap;


