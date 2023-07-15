import FoodCard from "@/components/common/foodCard";
import styled from "@emotion/styled";

import { Container } from "../main";
import HeaderNav from "@/components/common/header_nav";
import { Marker, NaverMap } from "react-naver-maps";

const MyinfoPage = () => {
  return (
    <Container>
      <HeaderNav></HeaderNav>
      <MyMap>
        <NaverMap
          mapDivId={"myMap"}
          defaultCenter={{ lat: 37.5665, lng: 126.978 }}
          defaultZoom={13}
        ></NaverMap>
        <Marker>
          key={1}
          position={{ lat: 37.5665, lng: 126.978 }} // 마커 위치 좌표 animation=
          {2}
        </Marker>
      </MyMap>
      <FoodCard></FoodCard>
    </Container>
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
