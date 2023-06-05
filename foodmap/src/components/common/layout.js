import styled from "@emotion/styled";
import HeaderNav from "./header_nav";
import FoodCard from "./foodCard";

const Layout = () => {
  return (
    <>
      <BodyLayout>
        <HeaderNav></HeaderNav>
      </BodyLayout>
    </>
  );
};

export default Layout;

export const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff7f7;
`;
