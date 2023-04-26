import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { TitleDiv } from "@/components/common/TitleDiv";
import CartItem from "@/components/cart/CartItem";
import { useEffect, useState } from "react";
import { Item } from "@/components/common/Box";
import { useRouter } from "next/router";

export interface IBasket {
  basketId: number;
  ended: string;
  imagePath: string;
  method: string;
  price: number;
  started: string;
  title: string;
}
export default function Cart() {
  /* 장바구니 목록 임시데이터 입니다 */
  const tempbasket = [
    {
      basketId: 1,
      ended: "2023-02-07T09:00",
      imagePath: "https://~",
      method: "택배수령",
      price: 15000,
      started: "2023-02-05T13:00",
      title: "카메라",
    },
    {
      basketId: 2,
      ended: "2023-02-07T09:00",
      imagePath: "https://~",
      method: "픽업",
      price: 30000,
      started: "2023-02-05T13:00",
      title: "메롱",
    },
  ];
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [] as number[];
      tempbasket.forEach((item) => {
        idArray.push(item.basketId);
        setTotalPrice((prev) => (prev += item.price));
      });
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
      setTotalPrice(0);
    }
  };
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
      tempbasket.forEach((item) => {
        if (item.basketId === id) {
          setTotalPrice((prev) => (prev += item.price));
        }
      });
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el: number) => el !== id));
      tempbasket.forEach((item) => {
        if (item.basketId === id) {
          setTotalPrice((prev) => (prev -= item.price));
        }
      });
    }
  };

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
            checked={checkItems.length === tempbasket.length ? true : false}
          />

          <Title>
            <Name>상품정보</Name>
            <Name>예약기간</Name>
            <Name>금액</Name>
            <Name>거래방법</Name>
          </Title>
        </MenuBar>
      </TitleDiv>
      {tempbasket.map((item) => (
        <ItemDiv>
          <SelectBox>
            <input
              type="checkbox"
              onChange={(e) =>
                handleSingleCheck(e.target.checked, item.basketId)
              }
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={checkItems.includes(item.basketId) ? true : false}
            />
          </SelectBox>
          <CartItem key={item.basketId} {...item} />
        </ItemDiv>
      ))}
      <TotalBox>총 결제 금액 | {totalPrice}</TotalBox>
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
