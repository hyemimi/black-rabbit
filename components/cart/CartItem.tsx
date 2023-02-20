import { IItem } from "@/temp/items";
import styled from "styled-components";
import { useState } from "react";

export default function CartItem({
  Item_id,
  modelName,
  image,
  title,
  pricePerOne,
  brandName,
  method,
}: IItem) {
  return (
    <ItemBox>
      <ImageDiv>{image}</ImageDiv>
      <Item>
        <h1>
          {brandName} {modelName}
        </h1>
      </Item>
      <Item>{pricePerOne}</Item>
      <Item>{pricePerOne}</Item>
      <Item>{pricePerOne}</Item>
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
