import React, {useState} from 'react'
import styled from "styled-components";
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors';
import {useDispatch} from "react-redux";
import * as userActions from './../../store/user/actions'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BasicButton from "../../components/common/Button";

const S = {
    Container: styled.div`
      display: block;
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
      display: block;
      margin: 0 auto;
      //background-color: ${colors.beige};
      width: 300px;
      height: 500px;
      border-radius: 20px;
      @media (min-width: 768px) {
        width: 400px;
        height: 547px;
      }
      div {
        width: 100%;
        margin: 5px auto;
        @media (min-width: 768px) {
        }
      }
    `,

}

function LoginPage() {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {

        dispatch(userActions.loginUserAsync.request({
            form: {
                email: email,
                password: password
                // test3@sweetrail.ml
                // 123456789
            }
        }))

    }

    return(
        <>
            <Navbar/>
            <S.Container>
                <S.Group>
                    <h1>Sign In</h1>
                    <S.Wrapper>
                        <div>
                            <TextField
                                required
                                label="Email"
                                // autoComplete="current-password"
                                variant="outlined"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Password"
                                type="password"
                                // autoComplete="current-password"
                                variant="outlined"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <BasicButton theme={"red"} style={{height: '50px', marginTop: "40px"}} onClick={handleLogin}>Sign In</BasicButton>
                    </S.Wrapper>
                </S.Group>
            </S.Container>
        </>

    )
}

export default LoginPage;