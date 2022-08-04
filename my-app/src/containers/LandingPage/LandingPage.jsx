import React from "react";
import styled from "styled-components/macro";
import { Devestore } from "../../components/Devestore";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { SuperHot } from "../../components/SuperHot";

const LandingPageStyle = styled.div`
  .left,
  .right {
      height: 400px;
  }

  .left {
      float: left;
      width: 50%;
  }

  .right {
      float: right;
      width: 50%;
  }
  @media only screen and (max-width: 768px) {

    .left,
    .right {
        float: none;
        width: 100%;
    }
  }
`;
const LandingPage = () => {  
  return (
    <LandingPageStyle>
      <Header></Header>
      <Intro></Intro>
      <SuperHot></SuperHot>
      <Devestore></Devestore>
      <Footer></Footer>
    </LandingPageStyle>
    
  );
};

export default LandingPage;
