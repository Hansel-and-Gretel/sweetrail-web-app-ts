import React from 'react'
import styled from "styled-components";
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors';
import {useDispatch} from "react-redux";
import * as userActions from "../../store/user/actions";

const S = {
    Container: styled.div`
      width: 100vw;
      height: 100%;
      margin: 0 auto;
      
    `,
    Group: styled.div`
      margin: 80px auto 0;
      width: 300px;
      h1{
        font-weight: bold;
        font-size: 2rem;
        padding: 10px;
      }
      @media (min-width: 768px) {
        margin-top: 150px;
        width: 400px;
      }
    `,
    Wrapper: styled.div`
      margin: 0 auto;
      background-color: ${colors.beige};
      width: 300px;
      height: 500px;
      border-radius: 20px;
      @media (min-width: 768px) {
        width: 400px;
        height: 547px;
      }
    `,
    Input: styled.input`
        
    `
}

function SignUpPage() {

    const dispatch = useDispatch()

    function handleSignUp() {

        dispatch(userActions.signupUserAsync.request({
            form: {
                userName: 'test12345',
                email: 'ch1234@c.com',
                password: '123456',
                lifestyle: 'veggie',
                journeytype: 'activity',
            }
        }))
    }



    return(
        <>
            <Navbar/>
            <S.Container>
                <S.Group>
                    <h1>Sign Up</h1>
                    <S.Wrapper>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <button onClick={handleSignUp}>회원가입</button>
                    </S.Wrapper>
                </S.Group>
            </S.Container>
        </>

    )
}

export default SignUpPage;