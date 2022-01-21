import React, { useState } from "react";
//import Image from "next/image";
import styled from "styled-components";
import {
  MdHome,
  MdMenuBook,
  MdContactMail,
  MdContactSupport,
  MdReadMore,
  MdPlaylistAddCheck,
  MdArrowDropDown,
} from "react-icons/md";
import * as palette from "../constants/palette";
import Logo from "./logo";
//import helpdesk from "../public/images/help-desk.svg";

const Main = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  font-family: sans-serif;
`;

const LogoContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.GRAYSWIRL};
  color: black;
`;

const Tab = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.GRAYSWIRL};
  color: black;

  .text {
    padding-top: 10px;

    @media (max-width: 1050px) {
      font-size: 14px;
    }
  }
`;

const EndContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  background: ${palette.GRAYSWIRL};
  color: black;
`;

const IconWrapper = styled.span`
  color: ${palette.WUGOLD};
  font-size: 28px;
  display: flex;
  align-items: center;

  @media (max-width: 1050px) {
    font-size: 22px;
  }

  .endText {
    color: black;
    font-size: 16px;
    padding-left: 10px;

    @media (max-width: 1050px) {
      font-size: 14px;
      //padding-left: 10px;
    }
  }
`;

const DownWrapper = styled.span`
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${palette.WUGOLD};
  }

  .icon {
    position: absolute;
    font-size: 30px;
    left: -14px;
  }
`;

const Drawer = styled.div`
  height: 250px;
  width: 350px;
  border-radius: 5px;
  border: solid 1px ${palette.WUGOLD};
  background: ${palette.GRAYSWIRL};
  position: absolute;
  top: 165px;
  right: 25%;

  .about {
    display: flex;
    justify-content: flex-start;
    color: blue;
    padding: 8px 5px;
  }

  .support {
    display: flex;
    justify-content: flex-end;
    color: red;
    padding: 8px 5px;
  }
`;

export default function header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleAboutClick = () => {
    console.log("about click!");
    if (showSupport) {
      setShowSupport(false);
    }
    setShowAbout(!showAbout);
  };

  const handleSupportClick = () => {
    console.log("support click!");
    if (showAbout) {
      setShowAbout(false);
    }
    setShowSupport(!showSupport);
  };

  return (
    <Main>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Tab>
        <IconWrapper>
          <MdHome />
        </IconWrapper>
        <p className="text">HOME</p>
      </Tab>
      <Tab>
        <IconWrapper>
          <MdContactMail />
        </IconWrapper>
        <p className="text">CONTACT</p>
      </Tab>
      <Tab>
        <IconWrapper>
          <MdMenuBook />
        </IconWrapper>
        <p className="text">ABOUT</p>
        <DownWrapper onClick={handleAboutClick}>
          <MdArrowDropDown className="icon" />
        </DownWrapper>
        {showAbout && (
          <Drawer>
            <div className="about">
              <h2>About</h2>
            </div>
          </Drawer>
        )}
      </Tab>
      <Tab>
        <IconWrapper>
          <MdContactSupport />
        </IconWrapper>
        <p className="text">SUPPORT</p>
        <DownWrapper onClick={handleSupportClick}>
          <MdArrowDropDown className="icon" />
        </DownWrapper>
        {showSupport && (
          <Drawer>
            <div className="support">
              <h2>Support</h2>
            </div>
          </Drawer>
        )}
      </Tab>
      <EndContainer>
        <IconWrapper>
          <MdReadMore />
          <span className="endText">Learn More About our Faculty</span>
        </IconWrapper>
        <IconWrapper>
          <MdPlaylistAddCheck />
          <span className="endText">Get the latest news</span>
        </IconWrapper>
      </EndContainer>
    </Main>
  );
}
