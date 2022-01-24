import React, { useState } from "react";
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

/*
 mobile view - min-width: 870px;
 desktop view - max-width: 869px;
*/

//ORGANISM - 1

const DesktopView = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  font-family: sans-serif;

  @media (max-width: 870px) {
      display: none;
  }
`;

//MOLECULES - 3

const LogoContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.GRAYSWIRL};
  color: black;
  position: relative;
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

//ATOMS - 3

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

//MOBILE
const MobileView = styled.div`

    @media (min-width: 870px) {
        display: none;
    }  

    @media (max-width: 870px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        font-family: sans-serif;
    }  
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

export default function header() {

  const [showAbout, setShowAbout] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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

  const handleBurgerClick = () => {
    console.log("burger!");
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
        <DesktopView>
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
        </DesktopView>

        <MobileView>
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
                        <p className="text">ABOUT</p>
                        <MdArrowDropDown className="icon" />
                        {showAbout && (
                        <Drawer>
                            <div className="about">
                            <h2>About</h2>
                            </div>
                        </Drawer>
                        )}
                    </MobileTab>
                    <MobileTab onClick={handleSupportClick}>
                        <MobileIconWrapper>
                            <MdContactSupport />
                        </MobileIconWrapper>
                        <p className="text">SUPPORT</p>
                        <MdArrowDropDown className="icon" />
                        {showSupport && (
                        <Drawer>
                            <div className="support">
                            <h2>Support</h2>
                            </div>
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
        </MobileView>
    </>
  );
}
