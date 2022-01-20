import styled from "styled-components";
import { MdHome, MdMenuBook, MdContactMail, MdContactSupport, MdReadMore, MdPlaylistAddCheck } from "react-icons/md";
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

    .text {
        color: black;
        font-size: 16px;
        padding-left: 15px;
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
        </Tab>
        <Tab>
            <IconWrapper>
                <MdContactSupport />
            </IconWrapper>
            <p className="text">
                SUPPORT
            </p> 
        </Tab>
        <EndContainer>
            <IconWrapper>
                <MdReadMore />
                <span className="text">Learn More About our Faculty</span>
            </IconWrapper>
            <IconWrapper>
                <MdPlaylistAddCheck />
                <span className="text">Get the latest news</span>
            </IconWrapper> 
        </EndContainer>
    </Main>
  ) 
}
