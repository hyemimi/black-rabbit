import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import ProductList from "@/components/home/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>검은토끼</title>
      </Head>
      <Banner>
        <Title>검은토끼와 함께 멋진 작품을 만들어보세요</Title>
      </Banner>
      <FilterDiv>
        <div>
          <FilterButton>전체</FilterButton>
          <FilterButton>인기</FilterButton>
          <FilterButton>추천</FilterButton>
          <FilterButton>최근</FilterButton>
        </div>
        <div>
          <FilterButton>전체보기</FilterButton>
        </div>
      </FilterDiv>
      <ProductList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  justify-content: center;
  width: 1000px;
  padding-left: 550px;
  padding-right: 10px;
`;

const Banner = styled.div`
  background-color: ${(props) => props.theme.pointColor};
  height: 250px;
  width: 900px;
`;

const Title = styled.h1`
  padding-top: 100px;
  text-align: center;
  font-size: 30px;
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
