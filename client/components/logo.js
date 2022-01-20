import styled from 'styled-components';
import Image from 'next/image';
import * as palette from '../constants/palette';
import wulogo from '../public/images/wulogo.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${palette.GRAYSWIRL};
`;

const ImageContainer = styled.div`
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
  color: ${palette.WUGOLD};

  //FIRST MEDIA QUERY
  @media (max-width: 1295px) {
    letter-spacing: 4px;
    font-size: 14px;
  }

  //SECOND MEDIA QUERY
  @media (max-width: 1095px) {
    font-size: 12px;
  }
`;

const Line = styled.div`
  width: 35%;
  border-bottom: solid 1.5px ${palette.WUGOLD};;
  margin-bottom: 8px;
`;

const BottomTextContainer = styled.div`
  width: 100%;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  letter-spacing: 4px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 900;

  //FIRST MEDIA QUERY
  @media (max-width: 1295px) {
    font-size: 18px;
  }

  //SECOND MEDIA QUERY
  @media (max-width: 1095px) {
    font-size: 14px;
    letter-spacing: 3px;
  }

  .wutang {
    color: ${palette.WUGOLD};
    //rgba represents #6CC04A / WUGOLD;
    text-shadow: 1px 1px 1px rgba(108,192,74,0.45);
    padding-right: 10px;

    //FIRST MEDIA QUERY
    @media (max-width: 1295px) {
      padding-right: 8px;
    }

    //SECOND MEDIA QUERY
    @media (max-width: 1095px) {
      padding-right: 5px;
    }
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
