import React from 'react'
import styled, { css } from 'styled-components'

import * as colors from '../../../../src/styles/colors'
import Chip from "../Chip"
import {lightGreen} from "@material-ui/core/colors";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    img: string,
    title: string,
    // lifestyle?: string | null,
    // journeyType?: string | null,
    type?: string | null,
    accompany?: string | null | '친구' | 'alone' | 'family' | 'friends' | 'random' ;
    isPublic?: 0 | 1 //0: private, 1: public
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 80px 0 0 10px;
        font-size: 22px;
        font-weight: 800;
        color: white;
      }
      
      div{
        display: inline;
        margin-left: 3px;
      }
      .first{
        margin-left: 10px;
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
        div{
          display: inline;
          margin-left: 3px;
        }
        .first{
          margin-left: 10px;
        }
      }
      

    `
}

const PhotoCard = ({img, title, type, accompany, isPublic, children, ...restProps  } : Props) => {

    return (
        <S.PhotoCard img={img} >
            <h1>{title}</h1>
            <div className={'first'}>
                <Chip color={"orange"}>{type}</Chip>
            </div>
            {accompany &&
            <div>
                <Chip color={"pink"}>{accompany}</Chip>
            </div>
            }

            {children}
        </S.PhotoCard>
    )
}

export default PhotoCard
