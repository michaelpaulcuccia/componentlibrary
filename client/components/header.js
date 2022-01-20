import styled from "styled-components";
import Image from 'next/image';
import Logo from './logo';
import wulogo from '../public/images/wulogo.svg';

const Main = styled.div`
    width: 100%;
    display: flex;
    background-color: yellow;
`;

const LogoContainer = styled.div`
    width: 20%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
`;

const Tab = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;   
`;

export default function header() {
  return(
    <Main>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <Tab>Home</Tab>
        <Tab>Contact</Tab>
        <Tab>About</Tab>
        <Tab>Support</Tab>
        <LogoContainer>
            Hello World
        </LogoContainer>
    </Main>
  ) 
}
