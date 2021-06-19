import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import MapComp from "./map";
import Navbar from "../../components/common/Nav/Navbar";


const S = {
    MapContainer: styled.div`
      width: 100vw;
      height: 500px;
    `,
}

function MapPage() {

    return(
        <>
            <Navbar/>
            <S.MapContainer>
                <MapComp/>
            </S.MapContainer>
        </>

    )
}

export default MapPage