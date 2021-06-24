import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import * as journeySelector from "../../store/journey/selectors";
import * as placeSelector from "../../store/place/selectors";
import * as userSelector from "../../store/user/selectors";
import * as journeyActions from "../../store/journey/actions";
import * as placeActions from "../../store/place/actions";
import * as userActions from "../../store/user/actions";

import Chip from "../../components/common/Chip";
import Scrollbars from "react-custom-scrollbars-2";
import html2canvas from 'html2canvas';
import BasicButton from "../../components/common/Button";
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors';
import PhotoCard from "../../components/common/Card";
import paper from '../../assets/img/paper.jpeg'
import {lightGray} from "./../../../src/styles/colors";




const S = {
    Container: styled.div`
      //width: 100vw;
      //height: 100vh;
    `,
    Background: styled.div<{img: string}>`
      width: 100%;
      height: 250px;
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
        padding-top: 20px;
        color: white;
        text-align: center;
        h1{
          margin-top: 30px;
          font-weight: 600;
          font-size: 1.5rem;
        }
        p {
          padding-top: 5px;
          font-size: 10px;
          font-weight: 400;
        }
        .chips {
          display: inline-flex;
        }
       
      @media (min-width: 768px) {
        padding-top: 50px;
        h1{
          font-size: 2rem;
        }
      }
      
    `,
    UserInfo: styled.div`
      margin: 0 auto;
      //padding: 5px 20px;
      p{
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
      }
      @media (min-width: 768px) {
        //width: 90%;
        text-align: center;
      }
      @media (min-width: 1200px) {
        //width: 80%;
        text-align: center;
      }
    `,
    ProfileCircle: styled.div<{photo: string}>`
        cursor: pointer;
        margin: 20px auto 0;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-image: url(${props => props.photo});
        background-size: cover;
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
      background: ${paper};
      border: 1px solid ${lightGray};
      
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
        background-color: white;
        border-radius: 10px;
        width: 100%;
        padding: 0 10px;
        margin: 20px auto;
        p {
          cursor: pointer;
          text-align: center;
          font-size: 1rem;
          font-weight: bold;
          padding: 10px 10px 0 10px;
          //background-color: white;
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
    PlaceList: styled.div`
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
      img{
        width: 12px;
        height: 15px;
      }
    `
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
    const getPlaces = useSelector(placeSelector.getPlaceByJourney)
    const getUser = useSelector(userSelector.getUser)

    const params = useParams<{ id: string }>()
    const history = useHistory()
    const [user, setUser] = useState('')

    useEffect(()=> {
        window.scrollTo(0, 0)
        dispatch(journeyActions.getJourneyDetailAsync.request({id: parseInt(params.id)}))
        dispatch(placeActions.getPlaceByJourneyAsync.request({id: parseInt(params.id)}))
    },[])

    useEffect(()=>{
        dispatch(userActions.getUserDetailAsync.request({id: getJourney.userId+''}))
    },[getJourney])



    return(
        <>
            <Navbar/>
            <S.Container>
                <S.Background img={getJourney.image}>
                    <S.BackgroundFilter>
                        <S.TitleContainer>
                            <h1>{getJourney.journeyName}</h1>
                            <S.UserInfo>
                                <S.ProfileCircle photo={getUser.userImg} onClick={()=> history.push(`/profile/${getUser.userId}`)}/>
                                <p>{getJourney.userName}</p>
                            </S.UserInfo>
                            <div className={'chips'}>
                                <Chip color={"orange"}>{getJourney.type}</Chip>
                                <Chip color={"pink"}>{getJourney.accompany==='solo'?'solo trip':'with '+ getJourney.accompany }</Chip>
                            </div>
                        </S.TitleContainer>
                    </S.BackgroundFilter>
                </S.Background>
                <S.Content>
                    <S.PostContainer id={'photocard'}>
                        <img src={getJourney.image} alt="photo"/>
                        <p>{getJourney.summary}</p>
                    </S.PostContainer>

                    <S.MapContainer>
                        <h3>Places</h3>
                        <S.PlaceList>
                            <div>
                                <Scrollbars
                                    style={{ height: 500}}>
                                    {
                                        getPlaces.placeList?.map((place,index)=>{
                                            return(
                                                <>
                                                    <img src="https://static.wixstatic.com/media/2cd43b_355767b937cf431ebdbd851fc2f5254c~mv2.png/v1/fill/w_320,h_435,q_90/2cd43b_355767b937cf431ebdbd851fc2f5254c~mv2.png" alt=""/>
                                                    <p onClick={()=>history.push(`/place/${place.id}`)}>{place.placeName}</p>
                                                </>
                                            )
                                        })
                                    }
                                </Scrollbars>
                            </div>
                        </S.PlaceList>
                        <BasicButton theme={'default'} style={{fontWeight: 'bold'}} onClick={()=>history.push(`/map/${getJourney.id}`)}>On Map</BasicButton>
                    </S.MapContainer>
                </S.Content>
                <BasicButton theme={'yellow'} style={{width: '30%', margin: '50px auto', fontWeight: 'bold'}} onClick={(e) => copyDOM(getJourney.userName)}>Download Trail-Card</BasicButton>
            </S.Container>
        </>

    )
}

export default JourneyDetailPage;
