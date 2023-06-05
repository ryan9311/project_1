import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

const FoodCard = () => {
  const [heartClick, setHeartClick] = useState(false);

  const handleHeartClick = () => {
    setHeartClick(!heartClick);
  };

  return (
    <>
      <CardWarp>
        <FoodImg>이미지</FoodImg>
        <FoodInfo>
          <ShopName>음식점 이름 : </ShopName>
          <ShopInfo>음식점 주소 : </ShopInfo>
          <ShopInfo>
            높은 평점 :
            <Image src={"star.svg"} width={"20"} height={"20"} />
            <Image src={"star-fill.svg"} width={"20"} height={"20"} />
            <Image src={"star-half.svg"} width={"20"} height={"20"} />
          </ShopInfo>
          <ShopInfo>
            낮은 평점 :
            <Image src={"star.svg"} width={"20"} height={"20"} />
            <Image src={"star.svg"} width={"20"} height={"20"} />
            <Image src={"star-fill.svg"} width={"20"} height={"20"} />
            <Image src={"star-half.svg"} width={"20"} height={"20"} />
          </ShopInfo>
        </FoodInfo>
        <MyListIcn onClick={handleHeartClick}>
          <Image
            className="heartImg"
            src={heartClick ? "heart-fill.svg" : "heart.svg"}
            width={"40"}
            height={"40"}
          />
        </MyListIcn>
        <ShareBtn>공유하기</ShareBtn>
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
  flex-direction: row;
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
  font-size: 20px;
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

export const ShopInfo = styled.div`
  font-size: 1em;
`;

export const MyListIcn = styled.div`
  position: absolute;
  right: 50px;
  top: 40px;
  border: none;
  cursor: pointer;
`;

export const ShareBtn = styled.button`
  position: absolute;
  bottom: 40px;
  right: 50px;
  width: 150px;
  height: 50px;
  background-color: #3a8ef0;
  border-radius: 15px;
  font-weight: bold;
  font-size: 20px;
  color: whitesmoke;
  border: none;
  cursor: pointer;
`;
