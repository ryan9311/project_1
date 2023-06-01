import styled from "@emotion/styled";

const FoodCard = () => {
  return (
    <>
      <CardWarp>
        <FoodImg>이미지</FoodImg>
        <FoodInfo>
          <ShopName>음식점 이름 : </ShopName>
          <ShopInfo>음식점 주소 : </ShopInfo>
          <ShopInfo>가장 높은 평점 : </ShopInfo>
          <ShopInfo>가장 낮은 평점 : </ShopInfo>
        </FoodInfo>
        <MyListIcn>하트</MyListIcn>
      </CardWarp>
    </>
  );
};

export default FoodCard;

export const CardWarp = styled.div`
  position: relative;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 1000px;
  height: 280px;
`;

export const FoodImg = styled.div`
  height: 240px;
  width: 240px;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
  background-color: azure;
`;

export const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 760px;
  padding-left: 15px;
  border: 1px solid black;
  height: 240px;
  border-radius: 15px;
  background-color: bisque;
`;

export const ShopName = styled.p`
  font-size: 20px;
`;

export const ShopInfo = styled.p`
  font-size: 1em;
`;

export const MyListIcn = styled.div`
  position: absolute;
  right: 50px;
  top: 40px;
  background-color: red;
`;
