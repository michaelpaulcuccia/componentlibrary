import styled from "styled-components";
import * as palette from '../constants/palette';
import Logo from './logo';

const Main = styled.div`
    width: 100%;
    display: flex;
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
