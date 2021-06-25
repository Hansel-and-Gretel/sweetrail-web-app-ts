import React from 'react'
import styled, { css } from 'styled-components'
import {useHistory} from "react-router-dom";

const S = {
    Chips: styled.div<{color: 'orange' | 'pink'}>`
      cursor: pointer;
      display: inline;
      width: auto;
      height: auto;
      padding: 5px 15px ;
      border-radius: 30px;
      ${props => props.color === 'pink'  ? css`color: #F04A90;`: css`color: #FF995C;`}
      font-size: 15px;
      font-weight: 300;
      background-color: #F6F6F6 ;
      margin: 5px 5px 0 0;
      @media (max-width: 400px) {
        font-size: 10px;
      }
      @media (max-width: 400px) {
        font-size: 12px;
      }
    `
}

interface Props {
    color: 'orange' | 'pink',
    children: React.ReactNode;
}

const Chip = ({color, children, ...restProps} : Props) => {

    const history = useHistory()

    return (
        <div {...restProps} onClick={()=>history.push(`/recommendation/${children}`)}>
            <S.Chips color={color}>{children}</S.Chips>
        </div>

    )
}

export default Chip
