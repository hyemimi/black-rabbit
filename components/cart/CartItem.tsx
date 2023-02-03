import { IItem } from "@/temp/items";
import styled from "styled-components";
export default function CartItem({
  Item_id,
  modelName,
  image,
  title,
  pricePerOne,
  brandName,
  method,
}: IItem) {
  // 체크박스 상태 관리는 recoil로 하기
  return (
    <ItemDiv>
      <SelectBox>
        <input type="checkbox"></input>
      </SelectBox>
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
    </ItemDiv>
  );
}
const ItemDiv = styled.div`
  display: flex;
`;
const SelectBox = styled.div`
  width: 68px;
  height: 118px;
  background-color: ${(props) => props.theme.pointColor};
  padding: 25px;
`;
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
