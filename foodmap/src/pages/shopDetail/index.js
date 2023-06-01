import HeaderNav from '@/components/common/header_nav'
import styled from '@emotion/styled'

const shopDetailPage = () => {
  return (
    <Container>
      <HeaderNav></HeaderNav>
      <ListWrap>
        <option>서울 전체</option>
        <option>서울 강남</option>
        <option>서울 서초</option>
        <option>서울 관악</option>
        <option>서울 홍대</option>
        <option>서울 이대</option>
      </ListWrap>
      <FoodTemaWrap>
        <FoodImage>이미지</FoodImage>
        <FoodDetail>
          <FoodShopName>음식점이름</FoodShopName>
          <FoodShopInfo>음식점 주소 :</FoodShopInfo>
          <FoodShopInfo>가장 높은 평점</FoodShopInfo>
          {/* <div class="rating_box">
            <div class="rating">
              ★★★★★
              <span class="rating_star">★★★★★</span>
              <input type="range" value="1" step="1" min="0" max="10" />
            </div>
          </div> */}
          <FoodShopInfo>가장 낮은 평점 </FoodShopInfo>
          {/* <div class="rating_box">
            <div class="rating">
              ★★★★★
              <span class="rating_star">★★★★★</span>
              <input type="range" value="1" step="1" min="0" max="10" />
            </div>
          </div> */}
        </FoodDetail>
      </FoodTemaWrap>
      <FoodImageWrap>
        <FoodImagePlus>이미지</FoodImagePlus>
        <FoodImagePlus>이미지</FoodImagePlus>
        <FoodImagePlus>이미지</FoodImagePlus>
        <FoodImagePlus>이미지</FoodImagePlus>
      </FoodImageWrap>
      <H1Wrap>
        <h1>평점 및 리뷰 남기기</h1>
      </H1Wrap>
      <FoodTemaWrap>
        <FoodImage>이미지</FoodImage>

        <FoodDetail>
          <FoodShopInfo>별점 :</FoodShopInfo>
          {/* <div>
            <div class="rating_box">
              <div class="rating">
                ★★★★★
                <span class="rating_star">★★★★★</span>
                <input type="range" value="1" step="1" min="0" max="10" />
              </div>
            </div>
          </div> */}
          <TextAreaWrap>
            <Text></Text>
          </TextAreaWrap>
          <Button>확인</Button>
        </FoodDetail>
      </FoodTemaWrap>
    </Container>
  )
}

export default shopDetailPage

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const ListWrap = styled.select`
  width: 110px;
  margin: 5px auto;
`
export const FoodTemaWrap = styled.div`
  width: 1000px;
  height: 280px;
  border: 1px solid black;
  box-sizing: border-box;
  //position: relative;
  display: flex;
  margin: 0 auto;
  padding: 15px;
`
export const FoodImage = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  box-sizing: border-box;
  width: 240px;
  height: 240px;
  text-align: center;
`
export const FoodDetail = styled.div`
  border: 1px solid black;
  margin-left: 20px;
  width: 800px;
  height: 250px;
`
export const FoodShopName = styled.p`
  margin: 13px 10px;
  width: 20;
  font-size: 20px;
`
export const FoodShopInfo = styled.p`
  margin: 13px 10px;
  font-size: 18px;
`

// export const likeBtn = styled.div`
//   position: absolute;
//   right: 50px;
//   top: 40px;
// `

export const Rating_box = styled.div`
  margin: 13px 10px;
`
export const FoodImageWrap = styled.div`
  width: 1000px;
  height: 300px;
  border: 1px solid black;
  box-sizing: border-box;
  //position: relative;
  display: flex;
  margin: 0 auto;
  padding: 18px;
  //background-color: red;
`
export const FoodImagePlus = styled.div`
  border: 1px solid black;
  // border-radius: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  width: 260px;
  height: 240px;
  text-align: center;
  margin: 10px 20px;
`

// 리뷰 및 평점 css
export const Wrap = styled.div`
  width: 1000px;
  height: 35vh;
  border: 1px solid black;
  box-sizing: border-box;
  //position: relative;
  display: flex;
  margin: 0 auto;
  padding: 18px;
  // background-color: orange;
`
export const H1Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  color: gray;
  border: 1px solid black;
`

export const theReviewWrap = styled.div`
  border: 1px solid black;
  justify-content: space-between;
`

export const TextAreaWrap = styled.div`
  padding-top: 10px;
`

export const Text = styled.textarea`
  width: 95%;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
  font-size: 18px;
  resize: none;
`
export const Button = styled.button`
  display: inline-block;
  width: 70px;
  height: 30px;
  margin-left: 10px;
  //background-color: gray;
  // padding: 5px;
  height: 20px;
  font-size: 15px;
  text-align: center;
  align-items: center;
  //margin-right: 10px;
`
