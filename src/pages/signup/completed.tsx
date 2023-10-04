import styled from "styled-components";
import { Wrapper } from "@/src/components/common/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";

const Completed = (props: string) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Div>
        <Icons>📸✔️</Icons>
        <GreenBox>
          <Title>
            {router.query.nickname}님, <br /> 회원가입이 완료되었습니다🎉
          </Title>
          <SubTitle>데이필름과 함께 즐거운 촬영해요!</SubTitle>
        </GreenBox>
        <Link href="/">
          <HomeButton>홈으로</HomeButton>
        </Link>
        <Link href="/userLogin">
          <LoginButton>로그인</LoginButton>
        </Link>
      </Div>
    </Wrapper>
  );
};
export default Completed;

const Div = styled.div`
  width: 700px;
  height: 500px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  margin: 5rem auto;
  padding: 2rem auto;
`;

const GreenBox = styled.div`
  background-color: #b6dcbe;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  margin: 1rem auto;
  padding: 100px auto;
  display: table;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  padding: 6rem 1rem 3rem 1rem;
  vertical-align: middle;
`;

const Icons = styled.h1`
  font-size: 60px;
  padding: 1rem;
`;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 17px;
  vertical-align: middle;
`;

const HomeButton = styled.button`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 0.5rem 1rem;
  margin: 1rem 2rem 2rem 1rem;
  cursor: pointer;
`;

const LoginButton = styled.button`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 0.5rem 1rem;
  background: #d9d9d9;
  cursor: pointer;
`;
