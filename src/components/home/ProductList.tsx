import Product from "./Product";
import styled from "styled-components";
import { items } from "@/src/temp/items";
import { IContent } from "@/src/pages/like";
export default function ProductList(items: any) {
  console.log(items?.data?.content);
  return (
    <Wrapper>
      {items.data?.content?.map((product: IContent) => (
        <Product key={product.itemId} {...product} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 900px;
`;
