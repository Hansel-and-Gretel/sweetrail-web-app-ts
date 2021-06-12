import React from 'react'
import styled, { css } from 'styled-components'

import * as colors from '../../../../src/styles/colors'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    img: string,
    title: string,
    lifestyle: string,
    journeyType: string
}

const S = {
    PhotoCard: styled.div<{ img: string }>`
        
      display: block;
      width: 90%;
      height: 150px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: url(${props => props.img});
      background-size: cover;

      h1 {
        padding: 80px 0 0 10px;
        font-size: 20px;
        font-weight: 800;
        color: white;
      }

      @media (min-width: 768px) {
        display: block;
        width: 90%;
        height: 200px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background: url(${props => props.img});
        background-size: cover;

        h1 {
          padding: 120px 0 0 20px;
          font-size: 26px;
          font-weight: 800;
          color: white;
        }
      }
      

    `
}

const PhotoCard = ({img, title, lifestyle, journeyType, children, ...restProps  } : Props) => {

    return (
        <S.PhotoCard img={img} >
            <h1>{title}</h1>
            {lifestyle}
            {journeyType}
            {children}
        </S.PhotoCard>
    )
}

export default PhotoCard
