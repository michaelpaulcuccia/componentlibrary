import React, { useState } from "react";
import Image from 'next/image';
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
import MobileHeader from './mobileheader';
import * as palette from "../../constants/palette";
import Logo from "../logo";
import helpdesk from '../../public/images/help-desk.svg';

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
  width: 350px;
  border-radius: 5px;
  border: solid 1px ${palette.WUGOLD};
  background: ${palette.GRAYSWIRL};
  position: absolute;
  top: 165px;
  right: 25%;
  display: flex;

  ul {
    list-style-type: none;
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
    width: 55%;

    h2 {
      color: ${palette.WUGOLD};
      text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
      padding-left: 15px;
      padding-bottom: 5px;
      &:first-of-type{
        padding-top: 5px;
      }
    }

    ul {
      li {
        font-size: 18px;
        font-weight: 400;
        text-shadow: 1px 1px 1px rgba(0,0,0,.25);
        padding-left: 20px;
        padding-bottom: 3px;
        &:last-child{
          padding-bottom: 8px;
        }
      }
    }
  }

  .image-container {
    width: 45%;
    padding: 10%;
  }

  .support {
    margin-left: auto;
    display: flex;
    flex-direction: column;

    h2 {
      color: ${palette.WUGOLD};
      text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
      padding-right: 15px;
      padding-bottom: 5px;
      &:first-of-type{
        padding-top: 5px;
      }
    }

    ul {
      li {
        font-size: 18px;
        font-weight: 400;
        text-shadow: 1px 1px 1px rgba(0,0,0,.25);
        padding-right: 20px;
        padding-bottom: 3px;
        &:last-child{
          padding-bottom: 8px;
        }
      }
    }
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
                </div>
                <div className="image-container">
                  <Image src={helpdesk} height={87} width={87}/>
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
                        <ul>
                          <li>Existing Clients</li>
                          <li>Enlisting Our Services</li>
                          <li>Tips</li>
                        </ul>
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
          <MobileHeader />
        </MobileView>
    </>
  );
}
