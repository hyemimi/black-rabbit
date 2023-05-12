import styled from "styled-components";
import { Wrapper } from "@/components/common/Wrapper";
import { Box } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { BoxInput } from "@/components/common/Box";
import { useState } from "react";
import { Select } from "@/components/detail/Seller";
import { Option } from "@/components/detail/Seller";
import { useRouter } from "next/router";
import useCancelMutation from "@/hooks/api/payment/CancelMutation";

export default function Cancel() {
  const [reason, setReason] = useState<string>("");
  const { mutate } = useCancelMutation();
  const router = useRouter();
  const cancelOrder = () => {
    if (reason !== "") {
      if (window.confirm("환불하시겠습니까?")) {
        console.log(reason);
        mutate(
          { cancelReason: reason, orderPk: Number(router.query.id) },
          {
            onSuccess: () => router.push("/mypage-user/cancel/Success"),
            onError: () => {
              window.confirm("오류가 발생했습니다");
            },
          }
        );
      }
    } else {
      window.confirm("환불 사유를 선택해주세요");
    }
  };

  return (
    <Wrapper>
      <TitleDiv>
        <h1>환불신청</h1>
      </TitleDiv>
      <Box height="300px">
        <form>
          <Row>
            <H1>oo렌탈 Canon EOS Rebel T7 18-55mm 번들 세트</H1>
          </Row>
          <hr />
          <Row>
            <H1>환불사유</H1>
            <Select onChange={(e) => setReason(e.currentTarget.value)}>
              <Option value="" defaultChecked>
                ---선택---
              </Option>
              <Option value="단순 변심">단순 변심</Option>
              <Option value="옵션 변경">옵션 변경</Option>
              <Option value="배송 지연">배송 지연</Option>
            </Select>
          </Row>
        </form>
      </Box>
      <Button onClick={() => cancelOrder()}>환불신청</Button>
    </Wrapper>
  );
}
const Row = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  text-align: center;
  width: 100%;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;
