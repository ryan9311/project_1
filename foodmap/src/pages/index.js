import styled from "@emotion/styled";
import Image from "next/image";

const HomeLoginPage = () => {
  return (
    <>
      <BodyContainer>
        <Login>
          <Logo></Logo>
          <InputBox type="text" name="id" placeholder="ID를 입력해주세요" />
          <InputBox type="password" name="pw" placeholder="PW를 입력해주세요" />
          <LoginPageBtn>로그인</LoginPageBtn>
          <LoginPageBtn>회원가입</LoginPageBtn>
        </Login>
      </BodyContainer>
    </>
  );
};

export default HomeLoginPage;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  background-image: url(/Logo.png);
  background-position: center;
  margin: 0 auto;
  width: 400px;
  height: 400px;
`;

export const InputBox = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 400px;
  height: 30px;
  font-size: 20px;
`;

export const LoginPageBtn = styled.button`
  width: 200px;
  height: 30px;
  background-color: #fff7f7;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
