import styled from "styled-components";
import { MdHome, MdMenuBook, MdContactMail, MdContactSupport, MdReadMore, MdPlaylistAddCheck, MdArrowDropDown } from "react-icons/md";
import * as palette from '../constants/palette';
import Logo from './logo';

const Main = styled.div`
    width: 100%;
    display: flex;
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
    
    .icon {
        position: absolute;
        font-size: 30px;
        left: -14px;
    }
`;

export default function header() {
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
            <DownWrapper>
                <MdArrowDropDown className="icon"/>
            </DownWrapper>
        </Tab>
        <Tab>
            <IconWrapper>
                <MdContactSupport />
            </IconWrapper>
            <p className="text">
                SUPPORT
            </p> 
            <DownWrapper>
                <MdArrowDropDown className="icon"/>
            </DownWrapper>
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
