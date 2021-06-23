import React, {useEffect, useRef, useState} from 'react'
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
import {useHistory} from "react-router-dom";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { Input } from '@material-ui/core';
import {type} from "os";

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
      display: block;
      width: 100vw;
      //height: 100vh;
    `,
    TitleContainer:styled.div`
      margin: 50px auto 10px;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    `,
    ProfileCircle: styled.div<{photo: string}>`
        width: 120px;
        height: 120px;
        margin: 40px auto;
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
      }
        
        @media (min-width: 768px) {
          width: 200px;
          height: 200px;
          border: 3px solid #FFF;
          //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

      @media (min-width: 1200px) {
        width: 230px;
        height: 230px;
        border: 3px solid #FFF;
        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    `,
    ButtonContainer: styled.div`
        width: 30%;
        margin: 15px auto;
    `,
    Input: styled.input.attrs({ type: 'file' })`
      display:block; 
      margin: 30px auto;
      width: 200px;
    `

}

function MyPageEdit() {

    const dispatch = useDispatch()
    const getUser = useSelector(userSelector.getAuth)
    const fileInputField = useRef(null)

    const [userId, setUserId] = useState(0)
    const [file, setFile] = useState<HTMLInputElement | File | null>(null)
    const [preview, setPreview] = useState<string>('')

    const [cookie] = useCookies(['x_auth'])
    const trailToken = get(cookie,'x_auth')

    useEffect(()=>{
        dispatch(userActions.getAuthAsync.request(trailToken))
    },[])

    useEffect(()=>{
        setUserId(getUser.user.userId)
        setPreview(getUser.user.userImg)
    },[getUser])


    const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        let reader = new FileReader()
        // @ts-ignore
        let file = e.target.files[0]

        reader.onloadend = () => {
            setFile(file)
            // @ts-ignore
            setPreview(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const submit = () => {
        const fd = new FormData()
        // @ts-ignore
        fd.append('image', file)
        fd.append('userId',userId+'')
        dispatch(userActions.uploadProfileImgAsync.request({formdata: fd}))
    }


    return(
        <>
            <Navbar/>
            <S.Container>
                <S.TitleContainer>Profile Image</S.TitleContainer>
                {preview && <S.ProfileCircle photo={preview}/> }
                <div>
                    <S.Input
                        type='file'
                        ref={fileInputField}
                        accept='image/*'
                        name='profile_img'
                        onChange={handleFileOnChange}
                        multiple={false}
                    >
                    </S.Input>
                </div>
                <S.ButtonContainer>
                    <BasicButton theme={'red'} onClick={submit}>Profile Update</BasicButton>
                </S.ButtonContainer>
            </S.Container>
        </>

    )
}

export default MyPageEdit;