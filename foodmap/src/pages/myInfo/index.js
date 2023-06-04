import FoodCard from "@/components/common/foodCard";
import HeaderNav from "@/components/common/header_nav";
import Layout from "@/components/common/layout";
import styled from "@emotion/styled";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MyinfoPage = () => {
  return (
    <>
      <Layout></Layout>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <MyMap>
          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            zoom={10}
            center={{ lat: 37.498095, lng: 127.02761 }} // 지도 초기 좌표
          />
        </MyMap>
      </LoadScript>
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
