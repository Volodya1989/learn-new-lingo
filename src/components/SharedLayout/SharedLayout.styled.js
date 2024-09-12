import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-itmes: center;
  font-size: 16px;
  line-height: calc(20 / 16);
  // width: 100%;

  &:hover {
    color: gray;
  }

  // @media screen and (min-width: 768px) {
  //   line-height: 1.07;
  // }

  // &.active {
  //   color: red;
  //   text-decoration: underline;
  // }
`;
export const Logo = styled.span`
  size: 50px;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(20 / 24);
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 430px;
`;

export const StyledLogin = styled.span`
  font-weight: 700;
  padding-left: 5px;
`;

export const StyledRegistration = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: black;
  border-radius: 12px;
  width: 166px;
  height: 48px;
  color: #fff;
`;

export const StyledHeader = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
  text-decoration: none;
`;

export const Block = styled.div`
  display: flax;
  justify-content: space-around;
`;
export const BlockRight = styled.div`
  justify-content: right;
`;

export const StyledItem = styled.li`
  text-decoration: none;
`;
