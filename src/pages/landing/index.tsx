import React from 'react'
import styled from "styled-components";
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors'
import artwork from "../../assets/illust/dongle.png";
import BasicButton from "../../components/common/Button";

const S = {
    Container: styled.div`
        display: block;
        padding: 0 5%;
    `,
}


const FirstSection = {
    Container: styled.div  `
        display: inline-flex;
        height: 100vh;
      @media screen and (max-width: 768px) { //tablet
       height: 500px;
      }
      @media screen and (max-width: 356px) { //mob
        height: 400px;
      }
    `,
    LeftContainer: styled.div`
      margin-left: 100px;
      p{
        margin-top: 200px;
        font-weight: 800;
        font-size: 4rem;
        .second-line{
          font-weight: normal;
          font-size: 1rem;
          margin-top: 10px;
          color: ${colors.gray55};
        }
      }
      @media screen and (max-width: 768px) { //tablet
        margin-left: 35px;
        p {
          margin-top: 100px;
          font-size: 2rem;
        }
      }
    `,
    ButtonContainer: styled.div`
      display: block;
      color: white;
      width: 300px;
      margin-top: 30px;
      @media screen and (max-width: 768px) { //tablet
        width: 135px;
        margin-top: 15px;
      }
      
    `,
    Background: styled.div`
      img{
        margin-top: 90px;
        position: absolute;
        right: 0;
        width: 40%;
        z-index: -1;
      }
      @media screen and (max-width: 768px) { //tablet
        margin-top: 50px;
      }
      
    `

}

const SecondSection = {
    Container: styled.div  `
      margin-top: 50px;
      text-align: center;
      margin-bottom: 50px;
    `,
    Title: styled.div`
      font-size: 36px;
      font-weight: 800;
      @media screen and (max-width: 768px) { //tablet
        font-size: 24px;
      }
    `,
    Description: styled.div`
      margin: 16px 0 32px 0;
      color: ${colors.gray90};
      padding: 0 10%;
    `,
    CardDeck: styled.div`
      display: inline-block;
      margin-top: 10px;
    `,
    Card: styled.div`
      display: inline-block;
      margin: 10px;
      width: 400px;
      height: 340px;
      border-radius: 8px;
      background: ${colors.white};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      
      
      div{
        margin: 25% auto 0;
        background: #F3F0EA;
        width: 66px;
        height: 66px;
      }
      h3 {
        margin-top: 20px;
        font-size: 22px;
        font-weight: bold;
      }
      p{
        width: 80%;
        margin: 10px auto;
      }

      @media screen and (max-width: 768px) { //mob
        width: 50%;
        height: 80%;
        div{
          margin: 5% auto 0;
          background: #F3F0EA;
          width: 33px;
          height: 33px;
        }
        h3 {
          margin-top: 10px;
          font-size: 16px;
          font-weight: bold;
        }
        p{
          width: 80%;
          margin: 5px auto 25px;
        }
      }
    `


}

const ThirdSection = {
    Container: styled.div  `
      margin: 200px 100px;
      @media screen and (max-width: 768px) { //tablet
        padding: 10px;
        margin: 50px 20px;
      }
    `,
    RowItem: styled.div`
      display: inline-block;
    `,
    TextContainer: styled.div`
      width: 600px;
      height: 360px;
      text-align: left;
      padding: 16px;
      h1 {
        font-size: 2rem;
        font-weight: 800;
      }
      p{
        margin-top: 16px;
      }
      @media screen and (max-width: 768px) { //tablet
        width: 100%;
        padding: 0;
        margin-bottom: 0;
      }
    `,


}

const FourthSection = {
    Container: styled.div  `
      margin-top: 50px;
      text-align: center;
      margin-bottom: 50px;
    `,
    Title: styled.div`
      font-size: 36px;
      font-weight: 800;
      @media screen and (max-width: 768px) { //tablet
        font-size: 24px;
      }
    `,
    Description: styled.div`
      margin: 16px 0 32px 0;
      color: ${colors.gray90};
      padding: 0 10%;
    `,
    CardDeck: styled.div`
      display: inline-block;
      margin-top: 10px;
    `,
    Card: styled.div`
      display: inline-block;
      margin: 10px;
      width: 300px;
      height: 200px;
      border-radius: 8px;
      background: ${colors.white};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      text-align: left;
      padding: 30px;
      
      h3 {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      @media screen and (max-width: 768px) { //mob
        width: 80%;
        height: 80%;
       
        h3 {
          font-size: 16px;
          font-weight: bold;
        }
        p{
          width: 80%;
        }
      }
    `


}

const FifthSection ={
    Container: styled.div  `
      margin: 100px auto;
      text-align: center;
      
    `,
    Title: styled.div`
      font-size: 36px;
      font-weight: 800;
      @media screen and (max-width: 768px) { //tablet
        font-size: 20px;
      }
    `,
    Description: styled.div`
      margin: 16px auto 32px auto;
      color: ${colors.gray90};
      padding: 0 10%;
    `,
    ButtonContainer: styled.div`
      display: block;
      color: white;
      width: 300px;
      margin: 10px auto ;
      @media screen and (max-width: 768px) { //tablet
        width: 135px;
      }
      
    `,
}

function LandingPage() {


    return (
        <>
            <Navbar/>
            <S.Container>

                <FirstSection.Container>
                    <FirstSection.LeftContainer>
                        <p>Pin your Passion<br/>on your Path
                            <p className='second-line'>Now, you don’t need to record all your path manually. </p>
                        </p>
                        <FirstSection.ButtonContainer>
                            <BasicButton theme='red'>Start Trail</BasicButton>
                        </FirstSection.ButtonContainer>
                    </FirstSection.LeftContainer>
                    <FirstSection.Background>
                        <img src={artwork} alt="artwork"/>
                    </FirstSection.Background>
                </FirstSection.Container>

                <SecondSection.Container>
                    <SecondSection.Title>Trail is always with you</SecondSection.Title>
                    <SecondSection.Description>
                        Trail is the best app for all travelers in the world.
                        <br/>
                        Our service will make you experience the convenience of travelling and journalling!
                    </SecondSection.Description>
                    <SecondSection.CardDeck>
                        <SecondSection.Card>
                            <div>icon</div>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </SecondSection.Card>
                        <SecondSection.Card>
                            <div>icon</div>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </SecondSection.Card>
                        <SecondSection.Card>
                            <div>icon</div>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </SecondSection.Card>
                    </SecondSection.CardDeck>
                </SecondSection.Container>

                <ThirdSection.Container>
                    <ThirdSection.RowItem>
                        <ThirdSection.TextContainer>
                            <h1>Kickstart an organization with your co-founders</h1>
                            <p>
                                It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.
                            </p>
                        </ThirdSection.TextContainer>
                        <ThirdSection.TextContainer>
                            <h1>Kickstart an organization with your co-founders</h1>
                            <p>
                                It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.
                            </p>
                        </ThirdSection.TextContainer>
                    </ThirdSection.RowItem>
                </ThirdSection.Container>

                <FourthSection.Container>
                    <FourthSection.Title>Reviews</FourthSection.Title>
                    <FourthSection.Description>
                        A lot of people around the world satisfied with Trail ! <br/>
                        Check how they use our service and make trail yours :)
                    </FourthSection.Description>
                    <FourthSection.CardDeck>
                        <FourthSection.Card>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </FourthSection.Card>
                        <FourthSection.Card>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </FourthSection.Card>
                        <FourthSection.Card>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </FourthSection.Card>
                        <FourthSection.Card>
                            <h3>Location Tracking</h3>
                            <p>Trail record your journey(trail) on background~~~</p>
                        </FourthSection.Card>
                    </FourthSection.CardDeck>
                </FourthSection.Container>

                <FifthSection.Container>
                    <FifthSection.Title>Get 'Trail'</FifthSection.Title>
                    <FifthSection.Description>
                        If you can’t wait to start your own trail or go somewhere <br/>
                        without knowing nothing, please click the button below asap
                    </FifthSection.Description>
                    <FifthSection.ButtonContainer>
                        <BasicButton theme='red'>Download App ( Android )</BasicButton>
                    </FifthSection.ButtonContainer>
                </FifthSection.Container>

            </S.Container>
        </>

    )
}

export default LandingPage