import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { useParams} from 'react-router-dom'
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors';
import {useDispatch, useSelector} from "react-redux";

import * as journeySelector from "../../store/journey/selectors";
import * as journeyActions from "../../store/journey/actions";
import Chip from "../../components/common/Chip";
import Scrollbars from "react-custom-scrollbars-2";
import html2canvas from 'html2canvas';
import BasicButton from "../../components/common/Button";
import {yellow} from "@material-ui/core/colors";




const S = {
    Container: styled.div`
      //width: 100vw;
      //height: 100vh;
    `,
    Background: styled.div<{img: string}>`
      width: 100%;
      height: 200px;
      background: url(${props => props.img});
      background-size: cover;
      
      @media (min-width: 768px) {
        height: 300px;
      }
    `,
    BackgroundFilter: styled.div`
      width: inherit;
      height: inherit;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    `,
    TitleContainer: styled.div`
        display: block;
        padding-top: 60px;
        color: white;
        text-align: center;
        h1{
          font-weight: 600;
          font-size: 30px;
        }
        p {
          padding-top: 5px;
          font-size: 10px;
          font-weight: 400;
        }
        div{
          display: inline;
        }
      @media (min-width: 768px) {
        padding-top: 100px;
        h1{
          font-size: 55px;
        }
      }
      
    `,
    UserInfo: styled.div`
        width: 90%;
        height: 60px;
        background-color: ${colors.lightGray};
        border-radius: 10px;
        margin: 10px auto;
        padding: 0 20px;
      @media (min-width: 768px) {
        width: 90%;
        text-align: center;
      }
      @media (min-width: 1200px) {
        width: 80%;
        text-align: center;
      }
    `,
    Content: styled.div`
        margin: 25px 0;
        padding: 0 20px;
        display: block;
      @media (min-width: 1200px) {
        margin: 50px 0;
        padding: 0 200px;
        display: flex;
      }
    `,
    PostContainer: styled.div`
      width: 100%;
      text-align: center;
      background: white;
      border: 1px solid ${colors.gray55};
      
      img {
        margin: 10% 3% 5%;
        width: 90%;
        height: 90%;
      }
      p {
        font-family: "Nanum Pen Script";
        font-size: 1.4rem;
        margin: 0 5% 7%;
        text-align: left;
      }
      @media (min-width: 768px) {
        img {
          width: 90%;
          height: 500px;
        }
      }
      @media (min-width: 1200px) {
        width: 70%;
        padding: 0 50px;
        margin-top: 0;
        margin-right: 50px;
      }
    `,
    MapContainer: styled.div`
      width: 100%;
      text-align: center;
      margin: 50px 0;
      div {
        background-color: aliceblue;
        border-radius: 10px;
        width: 100%;
        padding: 0 10px;
        margin: 20px auto;
        p {
          text-align: left;
          font-size: 1rem;
          font-weight: bold;
          padding: 10px;
          background-color: beige;
          border-radius: 10px;
        }
      }
      @media (min-width: 768px) {
        margin-top: 100px;
      }
      @media (min-width: 1200px) {
        margin-top: 0;
        width: 30%;
      }
    `,
}

const copyDOM = (owner: string) => {
    window.scrollTo(0, 0);
    if(document.getElementById("photocard")){
        html2canvas(document.getElementById("photocard") as HTMLElement).then(async (canvas) => {
            // url = await canvas.toDataURL("trailcard/jpg").split(',')[1];
            // saveAs(canvas.toDataURL(), 'file-name.png');
            var link = document.createElement('a');
            if (typeof link.download === 'string') {
                link.href = canvas.toDataURL();
                link.download = `trail_card_of_${owner}.png`;
                //Firefox requires the link to be in the body
                document.body.appendChild(link);
                //simulate click
                link.click();
                //remove the link when done
                document.body.removeChild(link);
            } else {
                window.open(canvas.toDataURL());
            }
        });
    }
}


function JourneyDetailPage() {

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
                <S.Background img={getJourney.image}>
                    <S.BackgroundFilter>
                        <S.TitleContainer>
                            <h1>{getJourney.journeyName}</h1>
                            <div>
                                <Chip color={"orange"}>{getJourney.type}</Chip>
                                <Chip color={"pink"}>{getJourney.accompany==='solo'?'solo trip':'with '+ getJourney.accompany }</Chip>
                            </div>
                        </S.TitleContainer>
                    </S.BackgroundFilter>
                </S.Background>
                <S.UserInfo>
                    {getJourney.userName}
                </S.UserInfo>
                <S.Content>
                    <S.PostContainer id={'photocard'}>
                        <img src={getJourney.image} alt="photo"/>
                        <p>{getJourney.summary}</p>
                    </S.PostContainer>
                    <S.MapContainer>
                        <h3>Places</h3>
                        <div>
                            <Scrollbars
                                style={{ height: 500}}>
                                <p>인천공항</p>
                                <p>히드로공항</p>
                                <p>타워브릿지</p>
                                <p>캠든마켓</p>
                                <p>캠든마켓</p>
                                <p>인천공항</p>
                                <p>히드로공항</p>
                                <p>타워브릿지</p>
                                <p>캠든마켓</p>
                                <p>캠든마켓</p>
                            </Scrollbars>
                        </div>
                        <BasicButton theme={'default'} style={{fontWeight: 'bold'}} onClick={()=>alert('지도')}>On Map</BasicButton>
                    </S.MapContainer>
                </S.Content>
                <BasicButton theme={'yellow'} style={{width: '30%', margin: '50px auto', fontWeight: 'bold'}} onClick={(e) => copyDOM(getJourney.userName)}>Download Trail-Card</BasicButton>
            </S.Container>

        </>

    )
}

export default JourneyDetailPage;
