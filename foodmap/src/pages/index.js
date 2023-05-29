import Image from "next/image";

const HomeLoginPage = () => {
  return (
    <>
      <div>
        <Image src={"/Logo.png"} alt={"Logo image"} width={400} height={400} />
      </div>
      <div>
        <input type="text" placeholder="id를 입력해주세요" />
      </div>
      <div>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div>
        <button>로그인</button>
      </div>
      <div>
        <button>회원가입</button>
      </div>
    </>
  );
};

export default HomeLoginPage;
