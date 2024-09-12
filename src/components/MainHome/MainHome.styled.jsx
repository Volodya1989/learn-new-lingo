import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 75px;
`;
export const StyledDescription = styled.div`
  background: #f8f8f8;
  border-radius: 30px;
  width: 720px;
  padding-left: 60px;
  padding-right: 70px;
  padding-top: 70px;
`;
export const StyledUnlocked = styled.h3`
  font-weight: 500;
  font-size: 48px;
  line-height: calc(56 / 43);
  width: 100%;
`;
export const StyledLanguage = styled.span`
  font-weight: 400;
  font-style: italic;
  background: #fbe9ba;
`;

export const StyledText = styled.p`
  width: 471px;
  font-size: 16px;
  line-height: calc(22 / 16);
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(28 / 18);
  width: 271px;
  height: 60px;
  background: #f4c550;
  border-radius: 12px;
  cursor: pointer;
`;

export const StyledList = styled.ul`
  display: flex;
  width: auto;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  text-decoration: none;
  border: 1.5px dashed #f4c550;
  border-radius: 18px;
`;
export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 28px;
  line-height: calc(32 / 28);
  width: 271px;
  height: 116px;
`;
export const StyledSpan = styled.span`
  width: 100px;
  padding-left: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
`;
export const StyledContainer = styled.div`
  max-width: 1350px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
