import React from 'react';
import styled from "styled-components";
import * as colors from './../../../styles/colors';
import { useHistory } from "react-router-dom";

interface Props{
    open: boolean
}
const Ul = styled.ul<{open: boolean}>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 16px;
  color: ${colors.gray90};

  li {
    padding: 18px 10px;
    cursor: pointer;
    
  }
  .pointColor {
    color: ${colors.orangeRed};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${colors.beigeYellow};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${colors.gray90};
    }
  }
`;

const RightNav = ({ open } : Props) => {

    const history = useHistory()


    return (
        <Ul open={open}>
            <li>About Trail</li>
            <li>Guideline</li>
            <li>Contact Us</li>
            <li>Log In</li>
            <li className='pointColor' onClick={() => history.push('/signup')}>Sign Up</li>
        </Ul>
    )
}

export default RightNav