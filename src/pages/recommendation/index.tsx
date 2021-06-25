import React, {useEffect, useState} from 'react'
import styled from "styled-components"

import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/user/actions";
import * as journeyActions from "../../store/journey/actions";
import * as placeActions from "../../store/place/actions";
import * as userSelector from "../../store/user/selectors";
import * as journeySelector from "../../store/journey/selectors";
import * as placeSelector from "../../store/place/selectors";
import * as colors from "../../styles/colors"

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
import {Place} from "../../types/place";
import {accompany, Journey, styleArray} from "../../types/journey";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 7
    },
    ipad: {
        breakpoint: { max: 1500, min: 1100 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1100, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};


const S = {
    Container: styled.div`
      display: block;
      width: 100vw;
      height: 100vh;
    
    `,
    Wrapper: styled.div`
      margin: 0 auto;
      padding: 0 20px;
      h3{
        text-align: center;
      }
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
          font-family: "Toppan Bunkyu Gothic";
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
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      //padding-left: 1rem;
      div{
        cursor: pointer;
        //margin: 2.5px 2.5px 0;
        //display: inline-block;
        --auto-grid-min-size: 16rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
        grid-gap: 1rem;
      }
      @media screen and (min-width: 768px) { //tablet
        margin-bottom: 0;
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
    `,
    StyleChip: styled.div<{target: boolean}>`
        width: auto;
        padding: 10px 0;
        border: gray 1px;
        background-color: ${colors.mustard};
        text-align: center;
        color: ${ props => props.target ? 'white' : 'black'}
    `



}


function RecommendPage() {

    const dispatch = useDispatch()
    const history = useHistory()
    const getUser = useSelector(userSelector.getAuth)
    const getStyleJourneyList = useSelector(journeySelector.getStyleJourneyList)
    const getMainJourneyList = useSelector(journeySelector.getMainJourneyList)
    const getPlaceList = useSelector(placeSelector.getAllPlaceList)

    const [user, setUser] = useState(0)
    const [journeyType, setJourneyType] = useState(getUser.user.journeyType)
    const [lifeStyle, setLifeStyle] = useState(getUser.user.lifeStyle)
    const [isJourney, setIsJourney] = useState(true)
    const [cookie] = useCookies(['x_auth'])
    const trailToken = get(cookie,'x_auth')


    useEffect(()=>{
        window.scrollTo(0, 0)
        dispatch(userActions.getAuthAsync.request(trailToken))
        dispatch(journeyActions.fetchMainJourneyListAsync.request())
        dispatch(placeActions.getAllPlaceAsync.request())
    },[])

    useEffect(()=>{
        setJourneyType(getUser.user.journeyType)
        setLifeStyle(getUser.user.lifeStyle)
        setUser(getUser.user.userId)
    },[getUser])

    useEffect(() => {
        if(lifeStyle){
            dispatch(journeyActions.fetchStyleJourneyListAsync.request({type: lifeStyle}))
        }
    },[lifeStyle])


    return(
        <>
            <Navbar/>
            <S.Container>
                <S.TopContainer>
                    <h1>Recommendation</h1>
                    <S.ButtonContainer>
                        <Carousel
                            responsive={responsive}
                            itemClass="image-item"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {
                                styleArray.map((style, index)=>{
                                    return(
                                        <div>
                                            <S.StyleChip target={lifeStyle === style} style={{fontWeight: "bold"}} onClick={() => {
                                                setLifeStyle(style)
                                                console.log(style)
                                            }} >{style}</S.StyleChip>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </S.ButtonContainer>
                </S.TopContainer>
                <S.Wrapper>
                    <h3>journeys</h3>
                    <S.FirstContainer>
                        {
                            getStyleJourneyList.data?.map((journey, index)=>{
                                return(
                                    <S.JourneyCard onClick={() => history.push(`/journey/detail/${journey.id}`)}>
                                        <PhotoCard img={journey.image} title={journey.journeyName} type={journey.type} accompany={journey.accompany}/>
                                    </S.JourneyCard>
                                )
                            })
                        }

                    </S.FirstContainer>
                    <h3>places</h3>
                    <S.FirstContainer>
                        {
                            getPlaceList.placeList?.map((place, index)=>{
                                if(place.category === lifeStyle){
                                    return(
                                        <S.JourneyCard onClick={() => history.push(`/place/${place.id}`)}>
                                            <PhotoCard img={place.image} title={place.placeName+''} type={place.category} />
                                        </S.JourneyCard>
                                    )
                                }
                            })

                        }
                    </S.FirstContainer>
                </S.Wrapper>
            </S.Container>

        </>

    )
}


export default RecommendPage;