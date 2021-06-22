import React from 'react';
import {Place} from "../../types/place";
import styled from "styled-components";
import * as colors from "../../styles/colors";


interface MarkerProps {
    key: number;
    lat: number;
    lng: number;
    text: string | number;
    show?: boolean;
    place: Place;
}

const MarkerStyle = {
    Pin: styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background-color: ${colors.mustard} ;
      border: 2px solid #fff;
      border-radius: 100%;
    `,
    InfoWindow: styled.div<{}>`
      position: relative;
      bottom: 20px;
      left: -40px;
      text-align: left;
      width: 100px;
      height: 20px;
      background: white;
      boxShadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
      padding: 3px;
      //fontSize: 14;
      zIndex: 100;
    `
}

const Marker = ({key, lat, lng, text, show, place, ...restProps} : MarkerProps) => {

    return(
        <>
            <MarkerStyle.Pin {...restProps}>{text}</MarkerStyle.Pin>
            {/*{show &&*/}
            {/*<MarkerStyle.InfoWindow>*/}
            {/*    hello*/}
            {/*</MarkerStyle.InfoWindow>*/}
            {/*}*/}
        </>
    )
}

export default Marker