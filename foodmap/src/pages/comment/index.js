import HeaderNav from '@/components/common/header_nav'
import Layout from '@/components/common/layout'
import RevWrap from '@/components/common/reviewCard'
import styled from '@emotion/styled'

const commentPage = () => {
  return (
    <AllWrap>
      <Layout></Layout>
      <RevWrap></RevWrap>
      <RevWrap></RevWrap>
      <RevWrap></RevWrap>
      <RevWrap></RevWrap>
    </AllWrap>
  )
}

export default commentPage

export const AllWrap = styled.div`
  //display: flex;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  // border: 1px solid black;
`
