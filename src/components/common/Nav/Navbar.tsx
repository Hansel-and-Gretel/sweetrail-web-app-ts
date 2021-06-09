import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from './../../../assets/logo/logo.png'
import {useHistory} from "react-router-dom";


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
    return (
        <Nav>
            <div className="logo" onClick={() => history.push('/')}>
                <img src={logo} alt="logo"/>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar