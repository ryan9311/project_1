import FoodCard from "@/components/common/foodCard";
import HeaderNav from "@/components/common/header_nav";
import Layout from "@/components/common/layout";
import styled from "@emotion/styled";

const MyinfoPage = () => {
  return (
    <>
      <Layout></Layout>
      <MyMap>지도</MyMap>
      <FoodCard></FoodCard>
    </>
  );
};

export default MyinfoPage;

export const MyMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 700px;
  width: 1000px;
  border: 1px solid black;
`;
