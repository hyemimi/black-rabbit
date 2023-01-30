import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import ProductList from "@/components/home/ProductList";
import { Wrapper } from "@/components/common/Wrapper";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>데이필름</title>
      </Head>
      <Banner>
        <Title>데이필름과 함께 멋진 작품을 만들어보세요</Title>
      </Banner>
      <FilterDiv>
        <Selector name="category">
          <option disabled selected>
            분류
          </option>
          <option>전체</option>
          <option>카메라</option>
          <option>렌즈</option>
          <option>캠코더</option>
          <option>드론, 액션캠</option>
          <option>음향 및 마이크</option>
          <option>조명</option>
          <option>액세서리</option>
          <option>기타</option>
        </Selector>
        <Selector name="how">
          <option disabled selected>
            거래방법
          </option>
          <option>전체</option>
          <option>픽업</option>
          <option>배송</option>
          <option>직거래</option>
        </Selector>
        <Selector name="where">
          <option disabled selected>
            지역
          </option>
          <option>전체</option>
          <option>서울</option>
          <option>경기</option>
        </Selector>

        <Input placeholder="최소금액" />
        <Span>~</Span>
        <Input placeholder="최대금액" />
        <button>가격설정</button>
      </FilterDiv>
      <FilterDiv>
        <div>
          <FilterButton>인기순</FilterButton>
          <FilterButton>가격대순</FilterButton>
          <FilterButton>리뷰순</FilterButton>
          <FilterButton>평점순</FilterButton>
        </div>
        <div>
          <FilterButton>전체보기</FilterButton>
        </div>
      </FilterDiv>
      <ProductList />
    </Wrapper>
  );
}

const Banner = styled.div`
  background-color: ${(props) => props.theme.pointColor};
  height: 250px;
  width: 900px;
`;
const Input = styled.input`
  width: 180px;
  height: 35px;
  padding: 5px 10px;
  background: #f5f5f5;
  border: 1px solid white;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: #2b2b2b;
`;
const Span = styled.span`
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const Title = styled.h1`
  padding-top: 100px;
  text-align: center;
  font-size: 30px;
`;

const Selector = styled.select`
  width: 150px;
  height: 35px;
  padding: 5px 30px 5px 10px;
  outline: 0 none;
  color: #444;
  background-color: #fff;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
`;
const FilterDiv = styled.span`
  display: flex;
  justify-content: space-between;
  width: 900px;
`;
const FilterButton = styled.button`
  margin: 10px;
  height: fit-content;
  font-size: 14px;
  padding: 5px 16px 5px 16px;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.textColor};
  background-color: D9D9D9;
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 50ms;
  &: hover {
    color: rgb(254, 254, 254);
    background-color: rgb(63, 63, 63);
  transition-duration: 100ms;
  }}
`;
