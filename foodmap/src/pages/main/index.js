import FoodCard from '@/components/common/foodCard'
import HeaderNav from '@/components/common/header_nav'
import styled from '@emotion/styled'

const mainPage = () => {
  return (
    <Container>
      <HeaderNav></HeaderNav>
      <AreaList>
        <option>서울 전체</option>
        <option>서울 강남</option>
        <option>서울 서초</option>
        <option>서울 관악</option>
        <option>서울 홍대</option>
        <option>서울 이대</option>
      </AreaList>
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
      <MyInfoBtn>내 맛집</MyInfoBtn>
    </Container>
  )
}

export default mainPage

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const AreaList = styled.select`
  margin: 10px 0;
  width: 100px;
`

export const MyInfoBtn = styled.button`
  width: 1000px;
  height: 50px;
  margin: 10px 0;
`
