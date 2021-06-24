import React from 'react'
import styled, { css } from 'styled-components'

import * as colors from '../../../../src/styles/colors'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    theme: 'red' | 'yellow' | 'default',
    disabled?: boolean;
    bold?: boolean;
}

const S = {
    StyledButton: styled.button<{ bold: boolean }>`
        display: block;
        width: 100%;
        height: 56px;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.03em;
        border: none;
        border-radius: 100px;
        font-weight: ${ props => props.bold ? 600: 400}
        text-align: center;
        cursor: pointer;
        
        ${({ theme }) => theme === 'default' && css`
          background-color: ${colors.lightGray};
          color: ${colors.black};
          font-weight: 400;
        `}
        
        ${({ theme }) => theme === 'red' && css`
          background-color: ${colors.orangeRed};
          color: ${colors.white};
        `}
        

        ${({ theme }) => theme === 'yellow' && css`
          background-color: ${colors.mustard};
          color: ${colors.white};
        `}
        
        &:disabled {
            background-color: ${colors.lightGray};
            cursor: not-allowed;
        }
    `
}

const BasicButton = ({theme='default', disabled=false, bold = false, children, ...restProps  } : Props) => {

    return (
        <S.StyledButton theme={theme} disabled={disabled} bold={bold} {...restProps}>
            {children}
        </S.StyledButton>
    )
}

export default BasicButton
