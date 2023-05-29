import styled from "@emotion/styled";
import Image from "next/image";

const HomeLoginPage = () => {
  return (
    <Logo>
      <div>
        <Image src={"/Logo.png"} alt={"Logo image"} width={400} height={400} />
      </div>
      <div>
        <input type="text" placeholder="id를 입력해주세요" />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </Logo>
  );
};

export default HomeLoginPage;

export const Logo = styled.div`
  align-items: center;
  text-align: center;
  margin: 25% auto;
`;
