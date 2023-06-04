import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: #141414;
  width: 200px;
  height: 100vh;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    bottom: 0;
    position: fixed;
  }
`;



export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItemWrapper = styled.li`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItemLink = styled.a`
  color: #4a4a4a !important;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;

  border-radius: 4px;

  @media (max-width: 768px) {
    display: none;
  }

  :hover {
    background: orange !important;
  }
`;

export const MenuItemIcon = styled.i`
  margin-right: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const TabMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const TabMenuItem = styled.a`
  color: #303030 !important;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  
  :hover {
    background: orange !important;
  }
`;
