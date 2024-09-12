import styled from 'styled-components';

export const DropdownMenu = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const DropdownBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 48 px;
  padding: 16px 18px 16px 18px;
  border-radius: 14px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 5px;
`;
export const DropdownDescr = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: #8a8a89;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 221 px;
  margin-top: 20px;
  margin-right: 15px;
`;
export const DropdownArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DropdownList = styled.ul`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style: none;
  padding-left: 0;
  width: 100%;
  height: 200px;
  border-radius: 14px;
  margin-top: 5px;
  overflow: scroll;
  padding-bottom: 10px;
  cursor: pointer;
`;
export const DropdownItem = styled.li`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background: #f4c550;
  }
`;
