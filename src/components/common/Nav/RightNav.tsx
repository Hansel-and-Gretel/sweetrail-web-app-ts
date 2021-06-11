import React from 'react';
import styled from "styled-components";
import * as colors from './../../../styles/colors';
import { useHistory } from "react-router-dom";
// @ts-ignore
import {get} from "lodash";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import * as userActions from "../../../store/user/actions";
import {deleteCookie} from "../../../lib/cookie";

interface Props{
    open: boolean
}
const Ul = styled.ul<{open: boolean}>`
  z-index: 100;
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
    const dispatch = useDispatch()
    const [cookie] = useCookies(['trail-token'])
    const trailToken = get(cookie,'trail-token')

    const logoutHandler = () => {
        /* TODO : 로그아웃 코드 */
        deleteCookie('trail-token')
        window.location.replace("/")
        // dispatch(userActions.logoutUserAsync.request())
    }

    return (
        <Ul open={open}>
            <li>About Trail</li>
            <li>Guideline</li>
            <li>Contact Us</li>
            {trailToken
                ?   <>
                    <li onClick={() => history.push('/mypage')}>My Page</li>
                    <li className='pointColor' onClick={logoutHandler}>Log Out</li>
                    </>
                : <>
                    <li onClick={() => history.push('/login')}>Log In</li>
                    <li className='pointColor' onClick={() => history.push('/signup')}>Sign Up</li>
                  </>
            }

        </Ul>
    )
}

export default RightNav