import styled from "@emotion/styled";
import Image from "next/image";
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
          <Image src={"list.svg"} width={"50"} height={"50"} />
          <Menu isOpen={isOpen}>
            <Menus>Home</Menus>
            <Menus>내 맛집</Menus>
            <Menus>리뷰 관리</Menus>
          </Menu>
        </HamNav>
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

export const HamNav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
  overflow: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const Menu = styled.div`
  position: absolute;
  background-color: white;
  z-index: 3;
  top: 100px;
  right: ${(props) => (props.isOpen ? "0px" : "-70px")};
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  transition: right 0.3s ease;
`;

export const Menus = styled.a`
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
`;
