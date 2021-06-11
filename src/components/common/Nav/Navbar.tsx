import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from './../../../assets/logo/logo.png'
import {Redirect, Route, useHistory} from "react-router-dom";
import MainPage from "../../../pages/main";
import {useCookies} from "react-cookie";
// @ts-ignore
import {get} from "lodash";

const Nav = styled.nav`
  cursor: pointer;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px 10px ;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px;
    font-size: 20px;

    img{
      margin-top: -5px;
      width: 65%;
    }
    
  }
  
`

const Navbar = () => {

    const history = useHistory()
    const [cookie] = useCookies(['trail-token'])
    const trailToken = get(cookie,'trail-token')

    return (
        <Nav>
            <div className="logo" onClick={() => {
                if(trailToken) history.push('/main')
                else history.push('/')
            }}>
                <img src={logo} alt="logo"/>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar