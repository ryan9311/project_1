import styled from '@emotion/styled'

const commentCard = () => {
  return (
    <>
      <RevWrap>
        <Name>음식점이름</Name>
        <Grade>평점</Grade>
        <Star>★★★★★</Star>
        <ModifyTag>수정</ModifyTag>
        <CencleTag>취소</CencleTag>
        <Card>
          <FoodImg>이미지</FoodImg>
          <TextWrap>
            <GradeText></GradeText>
          </TextWrap>
        </Card>
      </RevWrap>
    </>
  )
}

export default commentCard

export const RevWrap = styled.div`
  position: relative;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 2px;
  display: flex;
  padding: 20px;
  width: 1000px;
  height: 260px;
`
export const Name = styled.div`
  position: absolute;
  left: 50px;
  top: 5px;
  font-size: 25px;
`

export const Grade = styled.div`
  position: absolute;
  left: 50px;
  top: 48px;
  font-size: 16px;
`

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  display: flex;
  padding: 20px;
  width: 1000px;
  height: 200px;
`
export const Star = styled.div`
  position: absolute;
  left: 100px;
  top: 48px;
  font-size: 16px;
`

export const FoodImg = styled.div`
  height: 160px;
  width: 160px;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
`

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 760px;
  padding-left: 15px;
  border: 1px solid black;
  height: 160px;
  border-radius: 15px;
`
export const GradeText = styled.textarea`
  width: 95%;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
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
