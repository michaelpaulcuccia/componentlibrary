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

const MobileLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.GRAYSWIRL};
  color: black;
  position: relative;
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
    align-items: baseline;
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

export default function mobileheader() {

    const [showMobileAbout, setShowMobileAbout] = useState(false);
    const [showMobileSupport, setShowMobileSupport] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false)
  
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
      setShowMobileSupport(!showMobileSupport);
    };
  
    const handleBurgerClick = () => {
      console.log("burger!");
      setShowMobileMenu(!showMobileMenu);
    };

  return (
    <>
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
                    <div className="about">
                        <h2>About</h2>
                    </div> 
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
                    <div className="support">
                        <h2>Support</h2>
                    </div>
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
    </>
  ) 
}
