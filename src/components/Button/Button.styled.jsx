import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
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
