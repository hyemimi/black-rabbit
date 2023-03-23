import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { TitleDiv } from "@/components/common/TitleDiv";
import { items } from "@/temp/items";
import CartItem from "@/components/cart/CartItem";
import { useState } from "react";
import { Item } from "@/components/common/Box";
import { useRouter } from "next/router";
export default function Cart() {
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const router = useRouter();
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [] as number[];
      items.forEach((item) => idArray.push(item.Item_id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el: number) => el !== id));
    }
  };
  console.log(checkItems);
  return (
    <Wrapper>
      <TitleDiv>
        <h1>장바구니</h1>
        <Hr />
        <MenuBar>
          <p>전체선택</p>
          <Button
            as="input"
            type="checkbox"
            color="gray"
            onChange={(e) => {
              handleAllCheck(e.target.checked);
            }}
            checked={checkItems.length === items.length ? true : false}
          />

          <Title>
            <Name>상품정보</Name>
            <Name>예약기간</Name>
            <Name>금액</Name>
            <Name>거래방법</Name>
          </Title>
        </MenuBar>
      </TitleDiv>
      {items.map((item) => (
        <ItemDiv>
          <SelectBox>
            <input
              type="checkbox"
              onChange={(e) =>
                handleSingleCheck(e.target.checked, item.Item_id)
              }
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={checkItems.includes(item.Item_id) ? true : false}
            />
          </SelectBox>
          <CartItem key={item.Item_id} {...item} />
        </ItemDiv>
      ))}
      <TotalBox>총 결제 금액 | 어쩌구</TotalBox>
      <ButtonDiv>
        <Button height="86px" width="290px" color="delete">
          삭제하기
        </Button>
        <Button
          height="86px"
          width="290px"
          onClick={() => {
            router.push(
              { pathname: "/reservation", query: { basketIds: checkItems } },
              "reservation"
            );
          }}
        >
          결제하기
        </Button>
      </ButtonDiv>
    </Wrapper>
  );
}

const Hr = styled.div`
  border: 1.5px solid gray;
  margin-top: 10px;
`;
const MenuBar = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
const Button = styled.button<{ width?: string; height?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "45px")};
  font-size: 15px;
`;
const ButtonDiv = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const SelectBox = styled.div`
  width: 68px;
  height: 118px;
  background-color: ${(props) => props.theme.pointColor};
  padding: 25px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.h1`
  margin-left: 80px;
  font-size: 3px;
`;

const TotalBox = styled.div`
  font-size: 30px;
  background-color: ${(props) => props.theme.searchColor};
`;
const ItemDiv = styled.div`
  display: flex;
`;
