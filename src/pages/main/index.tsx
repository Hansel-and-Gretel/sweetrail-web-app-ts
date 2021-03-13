import React from 'react'
import styled from "styled-components";

const S = {
    Container: styled.div`
      width: 100vw;
      height: 100vh;
    `,
    Group: styled.div``,
    Wrapper: styled.div`
      @media (min-width: 1200px) {
        
      }
    `,
}

function MainPage() {
    return(
        <S.Container>
            <>Sweetrail 메인페이지입니다. 과연이게 맞느지?</>
        </S.Container>
    )
}

export default MainPage;