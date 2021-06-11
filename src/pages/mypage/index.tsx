import React from 'react'
import styled from "styled-components";
import Navbar from "../../components/common/Nav/Navbar";

const S = {
    Container: styled.div`
      width: 100vw;
      height: 100vh;
    `,
    Group: styled.div``,
    TopContainer: styled.div`
        width: 100%;
        height: 300px;
      
        
    `,
    Wrapper: styled.div`
      @media (min-width: 1200px) {
        
      }
    `,

}

function MyPage() {
    return(
        <>
            <Navbar/>
            <S.Container>
                MYPAGE
            </S.Container>
        </>

    )
}

export default MyPage;