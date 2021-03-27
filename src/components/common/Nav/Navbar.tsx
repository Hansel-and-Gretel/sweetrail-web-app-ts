import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from './../../../assets/logo/logo.png'


const Nav = styled.nav`
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
    return (
        <Nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar