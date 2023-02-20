import Product from "./Product";
import styled from "styled-components";
import { items } from "@/temp/items";
export default function ProductList() {
  return (
    <Wrapper>
      {items.map((product) => (
        <Product key={product.Item_id} {...product} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 900px;
`;
