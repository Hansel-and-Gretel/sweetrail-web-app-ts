import React from 'react'
import styled from "styled-components";
import Navbar from "../../components/common/Nav/Navbar";

const S = {
    Container: styled.div`
      display: block;
      width: 100%;
      height: 100vh;
      background: linear-gradient(to bottom,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%), url('https://images.unsplash.com/photo-1426086800127-2601510ca027?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
      background-size: cover;
      @media (min-width: 1200px) {
        display: inline-flex;
      }
    `,
    TitleContainer: styled.div`
      display: block;
      height: 25%;
      margin-bottom: 30px;
      div {
        padding-top: 20%;
        padding-left: 5%;
        font-size: 3rem;
        font-weight: 800;
        color: white;

        p {
          font-weight: 600;
          font-size: 1rem;
          color: white;
          margin-top: 10px;
        }
      }
     
      @media (min-width: 768px) {
        div {
          padding-top: 10%;
          font-size: 4rem;
        }
      }
      @media (min-width: 1200px) {
        width: 50%;
        padding-top: 30px;
        padding-left: 60px;
        float: left;
        div {
          font-size: 4rem;
          padding-top: 40%;
          padding-left: 200px;
          
        }
      }
      
      
    `,
    FormContainer: styled.div`
      display: block;
      background: white;
      margin: 0 auto;
      border-radius: 10px;
      width: 90%;
      height: 65%;
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (min-width: 1200px) {
        width: 30%;
        height: 80%;
        float: right;
        margin: 70px auto;
      }
      
    `,

}

function LandingPage() {


    return (
        <Navbar/>
        // <S.Container>
        //     <S.TitleContainer>
        //         <div>Sweetrail
        //             <p>나의 한걸음 한걸음을 기록하고 </p>
        //             <p>누군가와 일상, 여행, 관심을 공유하고 싶나요?</p>
        //         </div>
        //     </S.TitleContainer>
        //     <S.FormContainer>
        //         <form>
        //             <h2>Login</h2>
        //             <input type="email" id="inputEmail" className="form-control" placeholder="이메일 주소" name="email" onChange={()=>{}}/>
        //             <input type="email" id="inputEmail" className="form-control" placeholder="이메일 주소" name="email" onChange={()=>{}}/>
        //             <button>버튼</button>
        //         </form>
        //     </S.FormContainer>
        // </S.Container>
    )
}

export default LandingPage