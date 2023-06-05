import styled from '@emotion/styled'
import Image from 'next/image'
import { Logo } from '..'

const signupPage = () => {
  return (
    <SignupWrap>
      <div>
        <Logo></Logo>
      </div>
      <div>
        <InputWrap>
          <Input type="text" placeholder="ID를 입력해주세요" />
        </InputWrap>
        <div>
          <Input type="text" placeholder="닉네임을 입력해주세요" />
        </div>
        <div>
          <Input type="password" placeholder="비밀번호" />
        </div>
        <div>
          <Input type="password" placeholder="비밀번호 확인" />
        </div>
        <Button>가입하기</Button>
      </div>
    </SignupWrap>
  )
}

export default signupPage
export const SignupWrap = styled.div`
  //display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh;
  margin-top: 20vh;
  text-align: center;
`
export const InputWrap = styled.div`
  // height: 20px;
  margin: 5px;
`
export const Input = styled.input`
  align-items: center;
  //width: 20%;
  margin: 3px;
  font-size: 20px;
  text-align: center;
  width: 400px;
  height: 30px;
`

export const Button = styled.button`
  /* width: 150px;
  height: 25px;
  // border-radius: 15px;
  align-items: center;
  border: 1px solid gray;
  //background-color: pink;
  font-size: 15px;
  font-weight: 30px; */
  width: 200px;
  height: 30px;
  background-color: #3a8ef0;
  border-radius: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  color: whitesmoke;
  border: none;
  margin-bottom: 20px;
  border: 2px solid black;
  cursor: pointer;
`
