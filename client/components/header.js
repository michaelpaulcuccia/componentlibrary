import React, { useState } from "react";
import Image from 'next/image';
import styled from "styled-components";
import { MdHome, MdMenuBook, MdContactMail, MdContactSupport, MdReadMore, MdPlaylistAddCheck, MdArrowDropDown } from "react-icons/md";
import * as palette from '../constants/palette';
import Logo from './logo';
import helpdesk from '../public/images/help-desk.svg';

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
    border-radius: 5px;
    border: solid 1px ${palette.WUGOLD};
    position: absolute;
    top: 165px;

    .headline {
        text-shadow: 1px 1px 1px rgba(0,0,0,.45);
        text-align: center;
        padding: 5px 0;
    }

    @media (max-width: 1565px){
        width: 200px;
        right: 500px;
    }

    @media (max-width: 1350px){
        right: 400px;
    }

    @media (max-width: 1050px){
        right: 300px;
    }
`;

const SupportBox = styled.div`
    width: 230px;
    padding: 5px 0;
    border-radius: 5px;
    border: solid 1px ${palette.WUGOLD};
    position: absolute;
    top: 165px;

    .headline {
        text-shadow: 1px 1px 1px rgba(0,0,0,.45);
        text-align: center;
        padding: 8px 0;
    }

    .imageContainer {
        height: 45px;
        width: 45px;
        padding-left: 5px;
        color: ${palette.WUGOLD};
    }

    .contentBox {
        display: grid;
        grid-template-columns: 30% 70%;
        padding-top: 5px;
        font-size: 14px;
    }

    .existing {

        &-headline {
            color: ${palette.WUGOLD};
            text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
            font-size: 16px;
        }

        ul {
            padding-top: 3px;
            //clears ALL list-style-types, including those in .potential
            list-style-type: none;
            li {
                //applies to all li, including those in .potential
                padding-top: 3px;
                padding-left: 3px;
                font-weight: 200;
                &:last-of-type {
                    padding-bottom: 3px;
                }
            }
        }
    }

    .potential {
        &-headline {
            color: ${palette.WUGOLD};
            text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
            font-size: 16px;
            padding-top: 5px;
        }
    }
}

    @media (max-width: 1565px){
        width: 200px;
        right: 275px;
    }

    @media (max-width: 1350px){
        right: 175px;
    }

    @media (max-width: 1050px){
        right: 75px;
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
                <AboutBox>
                    <div className="headline">OUR TEAM</div>
                </AboutBox>
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
                <SupportBox>
                    <div className="headline">HOW CAN WE HELP?</div>  
                    <div className="contentBox">
                        <div className="imageContainer">
                            <Image src={helpdesk} />
                        </div>
                        <div className="existing">
                            <p className="existing-headline">Existing Clients</p>
                            <ul>
                                <li>accounts receivable</li>
                                <li>accounts payable</li>
                                <li>accounts delinquent</li>
                            </ul>
                            <p className="potential-headline">Potential Clients</p>
                            <ul>
                                <li>our services</li>
                                <li>testimonials</li>
                                <li>legal</li>
                            </ul>
                        </div>
                    </div>
                </SupportBox>
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
