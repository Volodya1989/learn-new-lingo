import styled from 'styled-components';

export const CardWrapper = styled.li`
  //   position: relative;
  //   box-shadow: var(--shade);
  font-family: Roboto;
  border-radius: 20px;
  width: 1100px;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-bottom: 60px;
  //   margin-bottom: 35px;
  transition: transform 0.4s;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  // &:hover {
  //   transition: transform 0.4s;
  //   transform: scale(1.05);
  // }
  //   @media screen and (min-width: 768px) {
  //     width: 200px;
  //     height: 362px;
  //     margin-left: 0;
  //     margin-right: 0;
  //   }
  //   @media screen and (min-width: 1150px) {
  //     width: 187px;
  //     height: 335px;
  //   }
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: solid #fbe9ba 3px;
  padding: 10px;
`;

export const StyledIsActive = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #38cd3e;
  border: 3px solid #fff;
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const StyledFirstSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 95px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-align: left;
  margin-bottom: 32px;
`;
export const StyledBook = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledLessons = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledFirstSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledPipe = styled.div`
  border: solid #121417 0.5px;
  opacity: 0.3;
  height: 16px;
`;

export const StyledPrice = styled.span`
  color: #0bb81c;
`;

export const StyledSubTitle = styled.div`
  color: #8a8a89;
`;
export const StyledDescription = styled.span`
  color: #8a8a89;
`;
export const StyledFirstName = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 24px;
  line-height: calc(24 / 24);
  color: black;
`;

export const StyledDescMain = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  margin-bottom: 8px;
`;

export const StyledReadMore = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

export const StyledLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(16 / 14);
`;

export const StyledLevelEl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 4px 12px 4px 12px;
  height: 32px;
  border-radius: 35px;
  opacity: 0px;
  margin-top: 25px;
  border: solid lightgray 1px;
`;

export const MainButton = styled.button`
  width: Hug (232px) px;
  height: Hug (60px) px;
  padding: 16px 48px 16px 48px;
  gap: 0px;
  margin-top: 25px;
  border-radius: 12px;
  opacity: 0px;
  font-weight: 700;
  background: #f4c550;
  border: none;
  font-size: 18px;
  line-height: calc(28 / 18);
  cursor: pointer;
  &:hover {
    transition: opacity 0.4s;
    opacity: 0.8;
    transition-timing-function: ease;
  }
`;
export const Comments = styled.div`
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const CommentsRating = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Heart = styled.div`
  cursor: pointer;
  &:hover {
    transition: opacity 0.4s;
    opacity: 0.6;
    transition-timing-function: ease;
  }
`;
