import React from "react";
import styled from "styled-components";
import {lightGray} from "../../../styles/colors";

const S = {
    Footer: styled.div`
      z-index: 0;
      background-color: ${lightGray};
      text-align: center;
      //position: fixed;
      //bottom: 0;
      width: 100%;
      margin-top: 2rem;
    `
}

const Footer = () => (
    <S.Footer>
        <p>This is some content in sticky footer</p>
        <p>This is some content in sticky footer</p>
        <p>This is some content in sticky footer</p>
    </S.Footer>
);

export default Footer;