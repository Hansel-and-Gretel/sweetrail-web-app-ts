import React from 'react'
import styled, { css } from 'styled-components'

import * as colors from '../../../../src/styles/colors'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    /** 테마 설정 */
    theme: 'default';
    icon?: 'search';
    iconsize?: number;
    disabled?: boolean;
    rootStyle?: React.CSSProperties;
    inputRef?: React.RefObject<HTMLInputElement>
}
const S = {
    StyledInput: styled.input<{ theme?: 'default' }>`
        width: 100%;
        height: 37px;
        margin-bottom: 10px;
        padding: 0 16px;
        border-radius: 100px;
        color: ${colors.gray55};
        border: 1px solid ${colors.lightGray};

      &:disabled {
        background-color: ${colors.gray55};
        color: ${colors.gray55};
        cursor: not-allowed;
      }

    `
}

const InputBox = ({theme = 'default', icon, iconsize=16, disabled, rootStyle, inputRef, ...restProps}: Props) => {


    return (
        <S.StyledInput disabled={disabled} {...restProps} ref={inputRef}>
            {/*{icon === 'search' && }*/}
        </S.StyledInput>
    )
}

export default InputBox