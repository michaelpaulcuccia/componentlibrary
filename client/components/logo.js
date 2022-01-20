import styled from 'styled-components';
import Image from 'next/image';
import wulogo from '../public/images/wulogo.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(200,275,275,1);
`;

const ImageContainer = styled.div`
  padding-top: 5px;
  margin-bottom: -5px;
`;

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const LineText = styled.p`
  letter-spacing: 5px;
  font-size: 16px;
  font-family: sans-serif;
  color: #6CC04A;
`;

const Line = styled.div`
  width: 35%;
  border-bottom: solid 1.5px #6CC04A;;
  margin-bottom: 8px;
`;

const BottomTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  letter-spacing: 4px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 900;

  .wutang {
    color: #6CC04A;
    //rgba represents #6CC04A;
    text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
    padding-right: 10px;
  }

  .faculty {
    text-shadow: 1px 1px 1px rgba(0,0,0,.45);
  }
`;

export default function logo() {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={wulogo}/>
      </ImageContainer>
      <LineContainer>
        <Line />
        <LineText>
        THE
        </LineText>
        <Line />
      </LineContainer>
      <BottomTextContainer>
        <span className='wutang'>WUTANG</span>
        <span className='faculty'>FACULTY</span>
      </BottomTextContainer>
    </Wrapper>
  )
}
