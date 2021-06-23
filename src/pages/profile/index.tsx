import React, {useEffect, useState} from 'react'
import styled, {css} from "styled-components";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";

import * as userSelector from "../../store/user/selectors";
import * as userActions from "../../store/user/actions";
import * as journeyActions from "../../store/journey/actions";
import * as journeySelector from "../../store/journey/selectors";

import Carousel from "react-multi-carousel";
import Navbar from "../../components/common/Nav/Navbar";
import Footer from "../../components/common/Footer";
import Chip from "../../components/common/Chip";
import BasicButton from "../../components/common/Button";
import PhotoCard from "../../components/common/Card";
import paris from "../../assets/img/paris.jpeg";

import {deleteCookie} from "../../lib/cookie";
// @ts-ignore
import {get} from "lodash";
import {useHistory, useParams} from "react-router-dom";
import * as placeActions from "../../store/place/actions";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const S = {
    Container: styled.div`
      width: 100vw;
      //height: 100vh;
    `,
    Group: styled.div``,
    Background: styled.div`
        width: 100%;
        height: 200px;
        background: rgb(232,71,170);
        background: linear-gradient(309deg, rgba(232,71,170,1) 0%, rgba(241,119,135,1) 41%, rgba(245,141,119,1) 60%, rgba(253,180,91,1) 93%, rgba(255,186,92,1) 100%);

        @media (min-width: 768px) {
          height: 300px;
        }
      
    `,
    UserContainer: styled.div`
        width: 100%;
        display: flex;
    `,
    ProfileCircle: styled.div<{photo: string}>`
        width: 120px;
        height: 120px;
        margin: -60px 0 0 50px;
        border: 2px solid #FFF;
        border-radius: 100%;
        //box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        //background-color: lightgray;
        background-image: url(${props => props.photo});
        background-size: cover;
      @media (min-width: 600px) {
        width: 150px;
        height: 150px;
        border: 3px solid #FFF;
        margin: -75px 0 0 100px;
      }
        
        @media (min-width: 768px) {
          width: 200px;
          height: 200px;
          border: 3px solid #FFF;
          //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: -100px 0 0 130px;
        }

      @media (min-width: 1200px) {
        width: 230px;
        height: 230px;
        border: 3px solid #FFF;
        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: -125px 0 0 200px;
      }
    `,
    InfoContainer: styled.div`
      font-weight: 800;
      font-size: 26px;
      margin: 0 0 0 10px;
      p {
        margin-bottom: 0;
      }
      div{
        display: inline;
      }

      @media (min-width: 768px) {
        margin: 16px 0 0 10px;
        font-size: 32px;
      }

      @media (min-width: 1200px) {
        margin: 16px 0 0 10px;
        font-size: 36px;
      }
    `
    ,
    ButtonGroup: styled.div`
        margin: 50px 0;
    `,
    ButtonContainer: styled.div`
        width: 30%;
        margin: 15px auto;
    `,
    Public: styled.div`
      margin: 50px 0;
      padding: 0 50px;
      @media (min-width: 768px) {
        padding: 0 150px;
      }
      @media (min-width: 1200px) {
        padding: 0 200px;
      }
    `,
    Private: styled.div`
      margin: 50px 0;
      padding: 0 50px;
      @media (min-width: 768px) {
        padding: 0 150px;
      }
      @media (min-width: 1200px) {
        padding: 0 200px;
      }
    `,
    Scrapped: styled.div`
      margin: 50px 0;
      padding: 0 50px;
      @media (min-width: 768px) {
        padding: 0 150px;
      }
      @media (min-width: 1200px) {
        padding: 0 200px;
      }
    `,

}

function Profile() {

    const dispatch = useDispatch()
    const getUser = useSelector(userSelector.getUser)
    const history = useHistory()
    const params = useParams<{ id: string }>()

    const [userId, setUserId] = useState(0)
    const getJourenyLsit = useSelector(journeySelector.getProfileJourneyList)


    useEffect(()=>{
        dispatch(userActions.getUserDetailAsync.request({id: params.id}))
        dispatch(journeyActions.fetchOtherJourneyListAsync.request({id: params.id}))
    },[])


    return(
        <>
            <Navbar/>
            <S.Container>
                <S.Background/>
                <S.UserContainer>
                    <S.ProfileCircle photo={getUser.userImg}/>
                    <S.InfoContainer>
                        <p>{getUser.userName}</p>
                        <div>
                            <Chip color={"pink"}>{getUser.lifeStyle}</Chip>
                            <Chip color={"orange"}>{getUser.journeyType}</Chip>
                        </div>
                    </S.InfoContainer>
                </S.UserContainer>
                <S.Public>
                    <h4>{getUser.userName}'s Journey</h4>
                    {getJourenyLsit.data.length < 1 && <> 기록된 여정이없습니다.</>}
                    <Carousel
                        responsive={responsive}
                        itemClass="image-item"
                        removeArrowOnDeviceType={["mobile"]}
                    >
                        {
                            getJourenyLsit.data?.map((journey, index)=>{
                                if(journey.sharedFlag){
                                    return(
                                        <div onClick={() => history.push(`/journey/detail/${journey.id}`)}>
                                            <PhotoCard img={journey.image} title={journey.journeyName} type={journey.type} accompany={journey.accompany}/>
                                        </div>
                                    )
                                }else{
                                    <></>
                                }
                            })
                        }
                    </Carousel>
                </S.Public>
            </S.Container>
            {/*<Footer/>*/}
        </>

    )
}

export default Profile;