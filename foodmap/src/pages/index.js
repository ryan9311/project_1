import styled from '@emotion/styled'
import { Route } from 'react-router-dom'

const HomeLoginPage = () => {
  return (
    <>
      <BodyContainer>
        <Login>
          <Logo></Logo>
          <InputBox type="text" name="id" placeholder="ID를 입력해주세요" />
          <InputBox type="password" name="pw" placeholder="PW를 입력해주세요" />
          <LoginPageBtn onClick={() => alert('로그인 성공!')}>
            로그인
          </LoginPageBtn>
          <SignUp>SignUp</SignUp>
        </Login>
      </BodyContainer>
    </>
  )
}

export default HomeLoginPage

export const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff7f7;
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`

export const Logo = styled.div`
  background-image: url(/Logo.png);
  background-position: center;
  margin: 0 auto;
  width: 400px;
  height: 400px;
`

export const InputBox = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 400px;
  height: 30px;
  font-size: 1rem;
  background: rgba(250, 250, 250);
  text-align: left;
  padding: 9px 0 7px 8px;
  border: 0.1px solid gray;
  border-radius: 5px;
`

export const LoginPageBtn = styled.button`
  width: 200px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #3a8ef0;
  border-radius: 15px;
  font-weight: bold;
  font-size: 20px;
  color: whitesmoke;
  border: none;
  cursor: pointer;
`

export const SignUp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: #3a8ef0;
  border-radius: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: whitesmoke;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
`
