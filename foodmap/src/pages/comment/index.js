import HeaderNav from "@/components/common/header_nav";
import Layout from "@/components/common/layout";
import RevWrap from "@/components/common/reviewCard";
import styled from "@emotion/styled";
import { Container } from "../main";

const commentPage = () => {
  return (
    <Container>
      <HeaderNav></HeaderNav>
      <RevWrap></RevWrap>
      <RevWrap></RevWrap>
      <RevWrap></RevWrap>
      <RevWrap></RevWrap>
    </Container>
  );
};

export default commentPage;

export const AllWrap = styled.div`
  /* //display: flex;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  // border: 1px solid black; */

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff7f7;
`;
