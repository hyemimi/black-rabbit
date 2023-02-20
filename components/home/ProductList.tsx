import Product from "./Product";
import styled from "styled-components";
export default function ProductList() {
  const tempdata = [
    // 임시데이터 요기서 api call
    {
      id: 1,
      name: "캐논어쩌구",
      price: 25000,
      detail: "사용에 편리한.. 어쩌구",
      image: "",
    },
    {
      id: 2,
      name: "장비",
      price: 25000,
      detail: "일단 넣어둔 데이터",
      image: "",
    },
    {
      id: 3,
      name: "장비3",
      price: 3000,
      detail: "일단 넣어둔 데이터3",
      image: "",
    },
    {
      id: 4,
      name: "장비4",
      price: 3000,
      detail: "일단 넣어둔 데이터3",
      image: "",
    },
    {
      id: 5,
      name: "장비5",
      price: 3000,
      detail: "일단 넣어둔 데이터3",
      image: "",
    },
  ];
  return (
    <Wrapper>
      {tempdata.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 900px;
`;
