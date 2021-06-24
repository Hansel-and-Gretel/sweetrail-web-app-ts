import React, {useEffect, useState} from 'react'
import styled from "styled-components"

import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/user/actions";
import * as journeyActions from "../../store/journey/actions";
import * as placeActions from "../../store/place/actions";
import * as userSelector from "../../store/user/selectors";
import * as journeySelector from "../../store/journey/selectors";
import * as placeSelector from "../../store/place/selectors";

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
import BasicButton from "../../components/common/Button";




const S = {
    Container: styled.div`
      display: block;
      width: 100vw;
      height: 100vh;
    
    `,
    Wrapper: styled.div`
      
      margin: 0 auto;
      padding: 0 20px;
      @media (max-width: 767px) {
        padding: 0 50px;
      },
    @media (max-width: 1024px) {
      padding: 0 100px;
    }
      
    `,
    TopContainer: styled.div`
        width: 100%;
        height: 150px;
        margin: 0 auto;
        
        h1 {
          text-align: center;
          font-weight: 800;
          font-size: 2rem;
          margin: 40px auto 30px;
        }

        @media (min-width: 767px) {
          margin: 0 auto;
          height: 250px;
          h1 {
            padding: 50px 0 0 0;
            margin: 50px auto 50px;
          }
        }
        
    `,
    ButtonContainer: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 0;
      div{
        width: 100px;
        margin: 2.5px 2.5px 0;
        display: block;
      }
      @media screen and (min-width: 768px) { //tablet
        margin-bottom: 0;
        div{
          width: 15%;
        }
      }
        
    `,
    FirstContainer: styled.div`
        width: 100%;
        //padding: 30px;
        margin: 0 auto;
      //text-align: justify;
      --auto-grid-min-size: 16rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
      grid-gap: 1rem;
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
    `,
    JourneyCard: styled.div`
      //display: inline-block;
        width: 300px;
        height: 150px;
        margin: 5px;
      @media (min-width: 768px) {
        height: 200px;
      }
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

function ExplorePage() {

    const dispatch = useDispatch()
    const history = useHistory()
    const getUser = useSelector(userSelector.getAuth)
    const getStyleJourneyList = useSelector(journeySelector.getStyleJourneyList)
    const getMyJourneyList = useSelector(journeySelector.getProfileJourneyList)
    const getMainJourneyList = useSelector(journeySelector.getMainJourneyList)
    const getPlaceList = useSelector(placeSelector.getAllPlaceList)

    const [user, setUser] = useState(0)
    const [journeyType, setJourneyType] = useState('')
    const [lifeStyle, setLifeStyle] = useState('')
    const [isJourney, setIsJourney] = useState(true)
    const [cookie] = useCookies(['x_auth'])
    const trailToken = get(cookie,'x_auth')

    const setMode = () => {
        setIsJourney(!isJourney)
    }

    useEffect(()=>{
        window.scrollTo(0, 0)
        dispatch(userActions.getAuthAsync.request(trailToken))
        dispatch(journeyActions.fetchMainJourneyListAsync.request())
        dispatch(placeActions.getAllPlaceAsync.request())
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
                    <h1>Explore</h1>
                    <S.ButtonContainer>
                        <div>
                            <BasicButton theme={ isJourney? 'red' : 'default' } style={{fontWeight: "bold"}} onClick={setMode} >Journeys</BasicButton>
                        </div>
                        <div>
                            <BasicButton theme={isJourney? 'default': 'red'} style={{fontWeight: "bold"}} onClick={setMode}>Places</BasicButton>
                        </div>
                    </S.ButtonContainer>
                </S.TopContainer>
                <S.Wrapper>
                    <S.FirstContainer>
                        {
                            isJourney &&getMainJourneyList.data?.map((journey, index)=>{
                                return(
                                    <S.JourneyCard onClick={() => history.push(`/journey/detail/${journey.id}`)}>
                                        <PhotoCard img={journey.image} title={journey.journeyName} type={journey.type} accompany={journey.accompany}/>
                                    </S.JourneyCard>
                                )
                            })
                        }
                        {
                            !isJourney && getPlaceList.placeList?.map((place, index)=>{
                                return(
                                    <S.JourneyCard onClick={() => history.push(`/place/${place.id}`)}>
                                        <PhotoCard img={place.image} title={place.placeName+''} type={place.category} />
                                    </S.JourneyCard>
                                )
                            })
                        }
                    </S.FirstContainer>
                </S.Wrapper>
            </S.Container>

        </>

    )
}

export default ExplorePage;