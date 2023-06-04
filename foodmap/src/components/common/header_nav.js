import styled from "@emotion/styled";
import { useState } from "react";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header>
        <MiniLogo></MiniLogo>
        <HamNav onClick={toggleMenu} isOpen={isOpen}>
          <HamNavSpan></HamNavSpan>
          <HamNavSpan></HamNavSpan>
          <HamNavSpan></HamNavSpan>
        </HamNav>
        <Menu isOpen={isOpen}>
          <Menus>홈</Menus>
          <Menus>내 맛집</Menus>
          <Menus>리뷰 관리</Menus>
        </Menu>
      </Header>
    </>
  );
};

export default HeaderNav;

export const Header = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const MiniLogo = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background-image: url(/Logo.png);
  background-size: cover;
  background-position: center;
`;

export const HamNav = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
`;

export const HamNavSpan = styled.span`
  height: 4px;
  background-color: blue;
  width: 100%;
  border-radius: 10px;
`;

export const Menu = styled.div`
  background-color: white;
  position: fixed;
  z-index: 3;
  top: 100px;
  right: ${(props) => (props.isOpen ? "0" : "-300px")};
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  transition: right 0.5s ease;
`;

export const Menus = styled.a`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
`;
