import styled from '@emotion/styled'

const HeaderNav = () => {
  return (
    <>
      <Header>
        <MiniLogo></MiniLogo>
        <HamNav>
          <HamNavSpan></HamNavSpan>
          <HamNavSpan></HamNavSpan>
          <HamNavSpan></HamNavSpan>
        </HamNav>
      </Header>
    </>
  )
}

export default HeaderNav

export const Header = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const MiniLogo = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background-image: url(/Logo.png);
  background-size: cover;
  background-position: center;
`

export const HamNav = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
`

export const HamNavSpan = styled.span`
  height: 4px;
  background-color: blue;
  width: 100%;
  border-radius: 10px;
`
