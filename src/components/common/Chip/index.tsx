import React from 'react'
import styled, { css } from 'styled-components'

const S = {
    Chips: styled.div<{color: 'orange' | 'pink'}>`
      display: inline;
      width: auto;
      height: auto;
      padding: 5px 10px ;
      border-radius: 30px;
      ${props => props.color === 'pink'  ? css`color: #F04A90;`: css`color: #FF995C;`}
      font-size: 15px;
      font-weight: 300;
      background-color: #EDEDED ;
      margin: 0 5px 0 0;
      @media (max-width: 400px) {
        font-size: 12px;
      }
      @media (max-width: 400px) {
        font-size: 13px;
      }
    `
}

interface Props {
    color: 'orange' | 'pink',
    children: React.ReactNode;
}

const Chip = ({color, children, ...restProps} : Props) => {

    return (
        <div {...restProps}>
            <S.Chips color={color}>{children}</S.Chips>
        </div>

    )
}

export default Chip
