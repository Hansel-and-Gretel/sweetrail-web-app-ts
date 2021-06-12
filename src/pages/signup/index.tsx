import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import Navbar from "../../components/common/Nav/Navbar";
import * as colors from './../../../src/styles/colors';
import {useDispatch} from "react-redux";
import * as userActions from "../../store/user/actions";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BasicButton from "../../components/common/Button";


const S = {
    Container: styled.div`
      width: 100vw;
      height: 100%;
      margin: 0 auto;
      
    `,
    Group: styled.div`
      margin: 50px auto 0;
      width: 300px;
      h1{
        margin-bottom: 20px;
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        padding: 10px;
      }
      @media (min-width: 768px) {
        margin-top: 100px;
        width: 400px;
      }
    `,
    Wrapper: styled.div`
      margin: 0 auto 80px;
      width: 300px;
      height: 500px;
      border-radius: 20px;
      @media (min-width: 768px) {
        width: 400px;
        height: 547px;
      }
      h3 {
        background-color: ${colors.orangeRed};
        color: #FFF;
        padding: 10px;
        text-align: center;
        margin: 10px auto 20px;
        font-weight: bold;
      }
      div {
        width: 100%;
        margin: 5px auto;
      }
      
    `,
    StyleSelection: styled.div`
    
      h3 {
        background-color: ${colors.orangeRed};
        color: #FFF;
        padding: 10px;
        text-align: center;
        margin: 50px auto 20px;
        font-weight: bold;
      }
      .lifeStyle {
        margin-bottom: 30px;
      }
        
    `
}

function SignUpPage() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [lifestyle, setLifestyle] = useState('None')
    const [journeytype, setJourneytyle] = useState('None')
    const [completed, setCompleted] = useState(false)


    useEffect(()=>{
        if(email && password && username && lifestyle!== 'None' && journeytype !== 'None' ){
            setCompleted(true)
        }
    },[email, password, username, lifestyle, journeytype, completed])

    function handleSignUp() {

        dispatch(userActions.signupUserAsync.request({
            form: {
                userName: username,
                email: email,
                password: password,
                lifeStyle: lifestyle,
                journeyType: journeytype,
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
                        <h3>Basic Info</h3>
                        <div>
                            <TextField
                                required
                                label="User Name"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <S.StyleSelection>
                            <h3>Please let us know who you are</h3>
                            <div className={'lifeStyle'}>
                                <FormControl>
                                    <InputLabel htmlFor="outlined-age-native-simple" >What is your Life-Style?</InputLabel>
                                    <Select
                                        required
                                        value={lifestyle}
                                        onChange={(e) => {setLifestyle(e.target.value as string)}}
                                    >
                                        <MenuItem value={'None'}>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Active'}>Active</MenuItem>
                                        <MenuItem value={'Bohemian'}>Bohemian</MenuItem>
                                        <MenuItem value={'Hipster'}>Hipster</MenuItem>
                                        <MenuItem value={'Solo'}>Solo</MenuItem>
                                        <MenuItem value={'Nomadic'}>Nomadic</MenuItem>
                                        <MenuItem value={'Rural'}>Rural</MenuItem>
                                        <MenuItem value={'Traditional'}>Traditional</MenuItem>
                                        <MenuItem value={'Back to the Land'}>Back to the Land</MenuItem>
                                        <MenuItem value={'Digital'}>Digital</MenuItem>
                                        <MenuItem value={'Sustainable'}>Sustainable</MenuItem>
                                        <MenuItem value={'Workaholic'}>Workaholic</MenuItem>
                                        <MenuItem value={'Socialite'}>Socialite</MenuItem>
                                        <MenuItem value={'Academic'}>Academic</MenuItem>
                                        <MenuItem value={'Groupie'}>Groupie</MenuItem>
                                        <MenuItem value={'Simple Living'}>Simple Living</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={'journeyType'}>
                                <FormControl>
                                    <InputLabel htmlFor="outlined-age-native-simple" >What is your Journey(Travel)?</InputLabel>
                                    <Select
                                        required
                                        value={journeytype}
                                        onChange={(e) => setJourneytyle(e.target.value as string)}
                                    >
                                        <MenuItem value={'None'}>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Adventure'}>Adventure</MenuItem>
                                        <MenuItem value={'Popular Places'}>Popular Places</MenuItem>
                                        <MenuItem value={'Hipster'}>Hipster</MenuItem>
                                        <MenuItem value={'Solo Traveller'}>Solo Traveller</MenuItem>
                                        <MenuItem value={'Nomadic'}>Nomadic</MenuItem>
                                        <MenuItem value={'Food Lover'}>Food Lover</MenuItem>
                                        <MenuItem value={'Geek'}>Geek</MenuItem>
                                        <MenuItem value={'Shopping'}>Shopping</MenuItem>
                                        <MenuItem value={'History'}>History</MenuItem>
                                        <MenuItem value={'Local Places'}>Local Places</MenuItem>
                                        <MenuItem value={'Festival'}>Festival</MenuItem>
                                        <MenuItem value={'Art'}>Art</MenuItem>
                                        <MenuItem value={'Academic'}>Academic</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </S.StyleSelection>
                    </S.Wrapper>
                    <BasicButton theme={"yellow"} style={{height: '50px'}} disabled={!completed} onClick={handleSignUp}>Sign Up</BasicButton>
                </S.Group>
            </S.Container>
        </>

    )
}

export default SignUpPage;