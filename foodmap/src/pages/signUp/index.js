import styled from "@emotion/styled";
import Image from "next/image";
import { Logo } from "..";

const signupPage = () => {
  return (
    <BodyContainer>
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
  );
};

export default signupPage
export const SignupWrap = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff7f7;
`
export const InputWrap = styled.div`
  // height: 20px;
  margin: 0px;
`
export const Input = styled.input`
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  margin-top: 20px;
  cursor: pointer;
`
