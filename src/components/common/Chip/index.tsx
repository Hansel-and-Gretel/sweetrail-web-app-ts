import React from 'react'
import styled, { css } from 'styled-components'

const S = {
    Chip: styled.div<{color: 'orange' | 'pink'}>`
      display: inline;
      width: auto;
      height: auto;
      padding: 5px 10px ;
      border-radius: 30px;
      ${props => props.color === 'pink'  ? css`color: #F04A90;`: css`color: #FF995C;`}
      font-size: 16px;
      font-weight: 300;
      background-color: #EDEDED ;
      margin: 0 5px 0 0;
    `
}

interface Props {
    color: 'orange' | 'pink',
    children: React.ReactNode;
}

const Chip = ({color, children, ...restProps} : Props) => {

    return (
        <div {...restProps}>
            <S.Chip color={color}>{children}</S.Chip>
        </div>

    )
}

export default Chip
