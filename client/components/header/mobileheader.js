import React, { useState } from "react";
import styled from "styled-components";
import {
  MdHome,
  MdMenuBook,
  MdContactMail,
  MdContactSupport,
  MdReadMore,
  MdPlaylistAddCheck,
  MdArrowRight
} from "react-icons/md";
import * as palette from "../../constants/palette";
import Logo from "../logo";

const RelativeWrapper = styled.div`
  position: relative;
`;

const MobileLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.GRAYSWIRL};
  color: black;
  position: relative;
  transition: width: 5s;
`;

const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 75px;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    cursor: pointer;

    div {
      width: 65%;
      border-bottom: 3px solid ${palette.WUGOLD};
      padding-bottom: 8px;
    }
  }
`;

const MobileTab = styled.div`
  width: 100%;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.GRAYSWIRL};
  color: black;

  .flex-row {
    display: flex;
    align-items: flex-end;
  }

  .text {
    padding-top: 10px;
    font-size: 14px;
  }
`;

const MobileEndContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  padding-top: 5px;
  background: ${palette.GRAYSWIRL};
  color: black;
`;

const MobileIconWrapper = styled.span`
  color: ${palette.WUGOLD};
  font-size: 22px;
  display: flex;
  align-items: center;

  .endText {
    color: black;
    font-size: 14px;
    padding-left: 10px;
  }
`;

const Drawer = styled.div`
  width: 100%;
  border: 3px solid ${palette.WUGOLD};
  background: ${palette.GRAYSWIRL}; 
  box-shadow: 0px 20px 15px 5px #fff;
  position: absolute;
  right: 0;
  padding: 10px;
  text-align: center;

  h2 {
      padding-bottom: 3px;
      color: ${palette.WUGOLD};
      text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
  }
 
  ul {
    list-style-type: none;
    li{
      padding-bottom: 3px;
      text-shadow: 1px 1px 1px rgba(0,0,0,.25);
    }
  }
`;


export default function Mobileheader() {

    const [showMobileAbout, setShowMobileAbout] = useState(false);
    const [showMobileSupport, setShowMobileSupport] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  
    const handleAboutClick = () => {
      console.log("about click!");
      if (showMobileSupport) {
        setShowMobileSupport(false);
      }
      setShowMobileAbout(!showMobileAbout);
    };
  
    const handleSupportClick = () => {
      console.log("support click!");
      if (showMobileAbout) {
        setShowMobileAbout(false);
      }
      setShowMobileSupport(!showMobileSupport)
    };
  
    const handleBurgerClick = () => {
      console.log("burger!");
      setShowMobileMenu(!showMobileMenu);
    };

  return (
    <RelativeWrapper>
        <MobileLogoContainer>
            <Logo />
            <Hamburger onClick={handleBurgerClick}>
                <div></div>
                <div></div>
                <div></div>
            </Hamburger>
        </MobileLogoContainer>
        {
        showMobileMenu &&
        <>
        <MobileTab>
            <MobileIconWrapper>
                <MdHome />
            </MobileIconWrapper>
            <p className="text">HOME</p>
        </MobileTab>
        <MobileTab>
            <MobileIconWrapper>
                <MdContactMail />
            </MobileIconWrapper>
            <p className="text">CONTACT</p>
        </MobileTab>
        <MobileTab onClick={handleAboutClick}>
            <MobileIconWrapper>
                <MdMenuBook />
            </MobileIconWrapper>
            <div className="flex-row">
                <p className="text">ABOUT</p>
                <MdArrowRight className="icon" />
            </div>
                {showMobileAbout && (
                    <Drawer>
                      <h2>Services</h2>
                        <ul>
                          <li>Consulting</li>
                          <li>Audit & Assurance</li>
                          <li>Risk Advisory</li>
                          <li>Legal</li>
                        </ul>
                      <h2>Insights</h2>
                        <ul>
                          <li>Strategy</li>
                          <li>Technology</li>
                          <li>Industries</li>
                          <li>Spotlight</li>
                      </ul>
                    </Drawer> 
                )}
        </MobileTab>
        <MobileTab onClick={handleSupportClick}>
            <MobileIconWrapper>
                <MdContactSupport />
            </MobileIconWrapper>
            <div className="flex-row">
                <p className="text">SUPPORT</p>
                <MdArrowRight className="icon" />
            </div>
                {showMobileSupport && (
                    <Drawer>
                      <h2>Support</h2>
                        <ul>
                          <li>Existing Clients</li>
                          <li>Our Services</li>
                          <li>Tips</li>
                        </ul>
                    </Drawer>
                )}
        </MobileTab>
        <MobileEndContainer>
            <MobileIconWrapper>
                <MdReadMore />
                <span className="endText">Learn More About our Faculty</span>
            </MobileIconWrapper>
            <MobileIconWrapper>
                <MdPlaylistAddCheck />
                <span className="endText">Get the latest news</span>
            </MobileIconWrapper>
        </MobileEndContainer>
        </>
      }
    </RelativeWrapper>
  ) 
}
