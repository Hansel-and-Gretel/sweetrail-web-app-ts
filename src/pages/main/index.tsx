import React, {useEffect, useState} from 'react'
import styled from "styled-components"

import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/user/actions";
import * as journeyActions from "../../store/journey/actions";
import * as userSelector from "../../store/user/selectors";
import * as journeySelector from "../../store/journey/selectors";

import background from '../../assets/img/palm-tree.jpeg'
import paris from '../../assets/img/paris.jpeg'
import paris2 from '../../assets/img/paris2.jpeg'
import Navbar from "../../components/common/Nav/Navbar";
import InputBox from "../../components/common/Input";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PhotoCard from "../../components/common/Card";
import Footer from "../../components/common/Footer";

import {useCookies} from "react-cookie";
// @ts-ignore
import {get} from "lodash";
import {useHistory} from "react-router-dom";




const S = {
    Container: styled.div`
      display: block;
      width: 100vw;
      height: 100vh;
    `,
    Group: styled.div``,
    TopContainer: styled.div`
        width: 100%;
        height: 400px;
        background-image: url(${background});
        background-size: cover;
        div {
          padding: 100px 0 0 60px
        }
        h1 {
          font-weight: 800;
          font-size: 40px;
          color: white;
          margin-bottom: 10px;
        }
        .inputbox {
          width: 303px;
          padding: 16px 0 0 0;
          @media (min-width: 768px) {
            width: 649px;
          }
        }

        @media (max-width: 767px) {
          margin: 0 auto;
          height: 300px;
          h1 {
            font-size: 32px;
            text-align: center;
          }
          div {
            padding: 80px 0 0 0;
            margin: 0 auto;
          }
        }
        
    `,
    FirstContainer: styled.div`
      display: block;
        padding: 30px;
        h3 {
          margin-bottom: 1.5rem;
        }
        div {
          margin-right: 0;
        }
      @media (min-width: 768px) {
        padding: 50px
      }
    `,
    EmptyMessage: styled.div`
        color: gray;
        font-size: 1rem;
        text-align: center;
        //padding: 30px 0;
    `



}
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1030 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1030, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function MainPage() {

    const dispatch = useDispatch()
    const history = useHistory()
    const getUser = useSelector(userSelector.getAuth)
    const getStyleJourneyList = useSelector(journeySelector.getStyleJourneyList)
    const getMyJourneyList = useSelector(journeySelector.getProfileJourneyList)
    const getMainJourneyList = useSelector(journeySelector.getMainJourneyList)

    const [user, setUser] = useState(0)
    const [journeyType, setJourneyType] = useState('')
    const [lifeStyle, setLifeStyle] = useState('')
    const [cookie] = useCookies(['x_auth'])
    const trailToken = get(cookie,'x_auth')

    useEffect(()=>{
        dispatch(userActions.getAuthAsync.request(trailToken))
        dispatch(journeyActions.fetchMainJourneyListAsync.request())
    },[])

    useEffect(()=>{
        setJourneyType(getUser.user.journeyType)
        setUser(getUser.user.userId)
    },[getUser])

    useEffect(() => {
        if(journeyType){
            dispatch(journeyActions.fetchStyleJourneyListAsync.request({type: getUser.user.journeyType}))
        }
        if(user){
            dispatch(journeyActions.fetchMyJourneyListAsync.request({id: user.toString()}))
        }
        if(lifeStyle){
            dispatch(journeyActions.fetchStyleJourneyListAsync.request({type: lifeStyle}))
        }
    },[journeyType, user])

    return(
        <>
            <Navbar/>
            <S.Container>
                <S.TopContainer>
                    <div>
                        <h1>Get Your Taste <br/></h1>
                        <h1>on Trail</h1>
                        <div className="inputbox">
                            <InputBox theme={"default"} placeholder={'where are you going?'}/>
                        </div>
                    </div>
                </S.TopContainer>
                <S.FirstContainer>
                    <h3>Your Trail</h3>
                    <S.EmptyMessage>{getStyleJourneyList.data.length < 1  && <>아직 등록된 나의 Trail이 없습니다.</>}</S.EmptyMessage>
                    <Carousel
                        responsive={responsive}
                        itemClass="image-item"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {
                            getMyJourneyList.data?.map((journey, index)=>{
                                return(
                                    <div onClick={() => history.push(`/journey/detail/${journey.id}`)}>
                                        <PhotoCard img={journey.image} title={journey.journeyName} type={journey.type} accompany={journey.accompany}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </S.FirstContainer>
                <S.FirstContainer>
                    <h3>Your Taste : {journeyType}</h3>
                    <S.EmptyMessage>{getStyleJourneyList.data.length < 1 && <>나의 취향에 맞는 여정을 발견하지 못했습니다.</>}</S.EmptyMessage>
                    <Carousel
                        responsive={responsive}
                        itemClass="image-item"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {
                            getStyleJourneyList.data?.map((journey, index)=>{
                                return(
                                    <div onClick={() => history.push(`/journey/detail/${journey.id}`)}>
                                        <PhotoCard img={journey.image} title={journey.journeyName} type={journey.type} accompany={journey.accompany}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </S.FirstContainer>
                <S.FirstContainer>
                    <h3>New</h3>
                    <Carousel
                        responsive={responsive}
                        itemClass="image-item"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {
                            getMainJourneyList.data?.map((journey, index)=>{
                                return(
                                    <div onClick={() => history.push(`/journey/detail/${journey.id}`)}>
                                        <PhotoCard img={journey.image} title={journey.journeyName} type={journey.type} accompany={journey.accompany}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </S.FirstContainer>

                <Footer/>
            </S.Container>

        </>

    )
}

export default MainPage;