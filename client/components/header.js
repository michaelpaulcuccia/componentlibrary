import React, { useState } from "react";
import styled from "styled-components";
import { MdHome, MdMenuBook, MdContactMail, MdContactSupport, MdReadMore, MdPlaylistAddCheck, MdArrowDropDown } from "react-icons/md";
import * as palette from '../constants/palette';
import Logo from './logo';

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

        @media (max-width: 1050px){
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

    @media (max-width: 1050px){
        font-size: 22px;
    }

    .endText {
        color: black;
        font-size: 16px;
        padding-left: 15px;

        @media (max-width: 1050px){
            font-size: 12px;
            padding-left: 10px;
        }
    }
`;

const DownWrapper = styled.span`
    position: relative;
    cursor: pointer;
    
    .icon {
        position: absolute;
        font-size: 30px;
        left: -14px;
    }
`;

const AboutBox = styled.div`
    height: 200px;
    width: 225px;
    background-color: black;
    position: absolute;
    top: 165px;

    @media (max-width: 1565px){
        width: 200px;
        right: 500px;
    }

    @media (max-width: 1350px){
        right: 400px;
    }

    @media (max-width: 1050px){
        right: 275px;
    }
`;

const SupportBox = styled.div`
    height: 200px;
    width: 225px;
    background-color: black;
    position: absolute;
    top: 165px;

    @media (max-width: 1565px){
        width: 200px;
        right: 275px;
    }

    @media (max-width: 1350px){
        right: 175px;
    }

    @media (max-width: 1050px){
        right: 35px;
    }
`;

export default function header() {

    const [showAbout, setShowAbout] = useState(false);
    const [showSupport, setShowSupport] = useState(false);

    const handleAboutClick = () => {
        console.log('about click!');
        setShowAbout(!showAbout)
    };

    const handleSupportClick = () => {
        console.log('support click!');
        setShowSupport(!showSupport)
    };

  return(
    <Main>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <Tab>
            <IconWrapper>
                <MdHome/>
            </IconWrapper>     
            <p className="text">
                HOME
            </p>   
        </Tab>
        <Tab>
            <IconWrapper>
                <MdContactMail />
            </IconWrapper> 
            <p className="text">
                CONTACT
            </p> 
        </Tab>
        <Tab>
            <IconWrapper>
                <MdMenuBook />
            </IconWrapper>
            <p className="text">
                About
            </p> 
            <DownWrapper onClick={handleAboutClick}>
                <MdArrowDropDown className="icon"/>
            </DownWrapper>
            {
                showAbout &&
                <AboutBox />
            }
        </Tab>
        <Tab>
            <IconWrapper>
                <MdContactSupport />
            </IconWrapper>
            <p className="text">
                SUPPORT
            </p> 
            <DownWrapper onClick={handleSupportClick}>
                <MdArrowDropDown className="icon"/>
            </DownWrapper>
            {
                showSupport &&
                <SupportBox />
            }
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
  ) 
}
