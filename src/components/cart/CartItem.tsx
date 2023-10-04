import { IItem } from "@/src/temp/items";
import styled from "styled-components";
import { useState } from "react";
import { IBasket } from "@/src/pages/cart";

export default function CartItem({
  basketId,
  ended,
  imagePath,
  method,
  price,
  started,
  title,
}: IBasket) {
  return (
    <ItemBox>
      <ImageDiv>{imagePath}</ImageDiv>
      <Item>
        <h1>{title}</h1>
      </Item>
      <Item>{price}</Item>
      <Item>
        {started} ~ {ended}
      </Item>
      <Item>{method}</Item>
    </ItemBox>
  );
}

const ImageDiv = styled.div`
  width: 200px;
`;
const ItemBox = styled.div`
  width: 832px;
  height: 118px;
  border: 1px solid gray;
  display: flex;
`;
const Item = styled.div`
  width: 158px;

  text-align: center;
  align-items: center;
  padding: 20px;
`;
