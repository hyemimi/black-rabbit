import { Wrapper } from "@/components/common/Wrapper";
import { TitleDiv } from "@/components/common/TitleDiv";
import { useGetUserOrderList } from "@/hooks/api/user/GetOrderList";
import { Box } from "@/components/common/Box";
import { Item } from "@/components/common/Box";
import { useRouter } from "next/router";
import styled from "styled-components";

interface IOrderContents {
  created: string;
  ended: string;
  imagePath: string;
  orderId: string;
  orderPk: number;
  payMethod: string;
  price: number;
  started: string;
  status: string;
  title: string;
}
interface IOrder {
  contents: IOrderContents[];
  isLast: boolean;
  totalPage: number;
}

export default function orderlist() {
  const router = useRouter();
  /* 회원의 주문 목록을 가져옵니다. 첫번째 파라미터 : userId, 
  두 번째 파라미터 : false일 경우 주문 처리가 완료된 주문만 가져옵니다*/
  const { orderList } = useGetUserOrderList(1, false);

  /* 임시 데이터 사용 */
  const tempdata = {
    contents: [
      {
        created: "2023-03-15T23:11",
        ended: "2023-03-20T23:00",
        imagePath: "https://s3.~",
        orderId: "string",
        orderPk: 1,
        payMethod: "ACCOUNT_TRANSFER",
        price: 25000,
        started: "2023-03-16T23:00",
        status: "PAY_WAITING",
        title: "캐논 카메라",
      },
    ],
    isLast: false,
    totalPage: 10,
  };

  return (
    <Wrapper>
      <TitleDiv>
        <h1>주문목록</h1>
      </TitleDiv>
      {tempdata.contents.map((item) => (
        <Box>
          <Header>
            <H1>{item.created.slice(0, 10)} 주문</H1>
            <H1>주문 상세보기 &gt;</H1>
          </Header>
          <InnerBox>
            <ImageDiv></ImageDiv>
            <Item width="500px">
              <Title>{item.title}</Title>
              <H1>
                {item.started.slice(0, 10)} ~ {item.ended.slice(0, 10)}{" "}
              </H1>
              <H1>{item.price}원</H1>
            </Item>
            <Item width="200px">
              <ItemDiv>
                <H1>{item.status}</H1>
              </ItemDiv>
              <Button>배송상태</Button>
              <Button
                onClick={() =>
                  router.push({
                    pathname: `/mypage-user/cancel/${item.orderPk}`,
                    query: { title: item.title },
                  })
                }
              >
                교환/반품 신청
              </Button>
              <Button
                onClick={() =>
                  router.push({
                    pathname: `/mypage-user/review/${item.orderPk}`,
                    query: { title: item.title },
                  })
                }
              >
                리뷰 작성하기
              </Button>
            </Item>
          </InnerBox>
        </Box>
      ))}
    </Wrapper>
  );
}

const ItemDiv = styled.div`
  display: flex;
`;
const H1 = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const Button = styled.button`
  margin-bottom: 20px;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ImageDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.pointColor};
  margin-top: 25px;
`;

const InnerBox = styled.div`
  display: flex;
`;
