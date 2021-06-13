import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { useParams} from 'react-router-dom'
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/user/actions";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BasicButton from "../../components/common/Button";
import * as journeySelector from "../../store/journey/selectors";
import * as journeyActions from "../../store/journey/actions";


const S = {
    Container: styled.div`
      width: 100vw;
      //height: 100vh;
    `,
    Group: styled.div``,
    Background: styled.div`
      width: 100%;
      height: 200px;
      background: rgb(232, 71, 170);
      background: linear-gradient(309deg, rgba(232, 71, 170, 1) 0%, rgba(241, 119, 135, 1) 41%, rgba(245, 141, 119, 1) 60%, rgba(253, 180, 91, 1) 93%, rgba(255, 186, 92, 1) 100%);

      @media (min-width: 768px) {
        height: 300px;
      }
    `,
}

function JourneyDetailPage(id: number) {

    const dispatch = useDispatch()
    const getJourney = useSelector(journeySelector.getJourneyDetail)
    const params = useParams<{ id: string }>()

    useEffect(()=> {
        dispatch(journeyActions.getJourneyDetailAsync.request({id: parseInt(params.id)}))
    },[])

    return(
        <>
            <Navbar/>
            <S.Container>
                {getJourney.journeyName}
                {getJourney.image? <img src={getJourney.image}/> : <img src={'/image/journey/default.png'}/>}
            </S.Container>
        </>

    )
}

export default JourneyDetailPage;