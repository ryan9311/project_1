import HeaderNav from '@/components/common/header_nav'
import { Container } from '@/pages/main'
import styled from '@emotion/styled'
import Image from 'next/image'

const commentUpdatedPage = () => {
  return (
    <Container>
      <HeaderNav></HeaderNav>
      <RevWrap>
        <Name>음식점이름</Name>
        <Grade>
          평점:
          <Image src={'../star.svg'} width={'15'} height={'15'} />
          <Image src={'../star-fill.svg'} width={'15'} height={'15'} />
          <Image src={'../star-half.svg'} width={'15'} height={'15'} />
        </Grade>
        {/* <Star>★★★★★</Star> */}
        <ModifyTag>수정</ModifyTag>
        <CencleTag>취소</CencleTag>
        <Card>
          <FoodImg>이미지</FoodImg>
          <FoodImg>이미지</FoodImg>
          <FoodImg>이미지</FoodImg>
          <FoodImg>이미지</FoodImg>
        </Card>
      </RevWrap>
      <TextWrap>
        {/* <h1>댓글</h1> */}
        <GradeText></GradeText>
      </TextWrap>
    </Container>
  )
}
export default commentUpdatedPage

export const RevWrap = styled.div`
  position: relative;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 2px;
  display: flex;
  padding: 20px;
  width: 1000px;
  height: 350px;
`
export const Name = styled.div`
  position: absolute;
  left: 50px;
  top: 5px;
  font-size: 40px;
  margin: 4px 4px;
`

export const Grade = styled.div`
  position: absolute;
  left: 50px;
  top: 60px;
  font-size: 20px;
  margin: 4px 4px;
`

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 70px auto;
  display: flex;
  padding: 20px;
  width: 1000px;
  height: 200px;
`
export const Star = styled.div`
  position: absolute;
  left: 100px;
  top: 58px;
  font-size: 20px;
  margin: 4px 4px;
`

export const FoodImg = styled.div`
  height: 200px;
  width: 200px;
  text-align: center;
  border: 1px solid black;
  margin: 10px 13px;
`

export const TextWrap = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  border: 1px solid black;
  height: 650px;
`

export const commentText = styled.h1`
  position: absolute;
  left: 50px;
  top: 5px;
  font-size: 40px;
  margin: 4px 4px;
`
export const GradeText = styled.textarea`
  width: 90%;
  height: 500px;
  border: 1px solid black;
  margin: 20px;
  margin-left: 37px;
  font-size: 18px;
  resize: none;
`

export const ModifyTag = styled.a`
  position: absolute;
  right: 90px;
  top: 20px;
`
export const CencleTag = styled.a`
  position: absolute;
  right: 50px;
  top: 20px;
`
