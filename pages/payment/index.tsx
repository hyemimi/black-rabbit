import { Wrapper } from "@/components/common/Wrapper";
import { GreenBox } from "@/components/common/GreenBox";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { BoxInput } from "@/components/common/Box";
import SearchAddress from "./../../components/common/SearchAddress";
interface FormData {
  name: string;
  phone_1: string;
  phone_2: string;
  post_number: string;
  road_address: string;
  detail_address: string;
}
const requestList = [
  { value: "부재 시 경비실에 맡겨주세요" },
  { value: "부재 시 택배함에 넣어주세요" },
  { value: "부재 시 집 앞에 놔주세요" },
  { value: "배송 전 연락 바랍니다" },
  { value: "파손 위험, 주의 바랍니다" },
  { value: "직접입력" },
];
export default function payment() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const handleValid = ({
    name,
    phone_1,
    phone_2,
    post_number,
    road_address,
    detail_address,
  }: FormData) => {
    //Api 호출
    setValue("name", "");
    setValue("phone_1", "");
    setValue("phone_2", "");
    setValue("post_number", "");
    setValue("road_address", "");
    setValue("detail_address", "");
  };
  return (
    <Wrapper>
      <Box as="form" height="100%">
        <GreenBox>배송정보</GreenBox>
        <Box width="100%" height="100%">
          <Row>
            <H1>배송지</H1>
          </Row>
          <hr />
          <Row>
            <H1>이름</H1>
            <BoxInput width="600px" height="30px" />
          </Row>
          <hr />
          <Row>
            <H1>연락처</H1>
            <BoxInput width="600px" height="30px" />
          </Row>
          <hr />
          <Row>
            <H1>주소</H1>
          </Row>
          <hr />
          <Row>
            <H1>배송 요청사항</H1>
            <select>
              <option value="">배송시 요청사항을 선택해주세요</option>
              {requestList.map((request) => (
                <option key={request.value} value={request.value}>
                  {request.value}
                </option>
              ))}
            </select>
          </Row>
        </Box>
        <GreenBox>상품정보 / 결제금액</GreenBox>
        <Box width="100%"></Box>
        <GreenBox>결제정보</GreenBox>
        <Box width="100%"></Box>
      </Box>
    </Wrapper>
  );
}

const Row = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 15px;
  margin-right: 30px;
  width: 100px;
`;
export const Box = styled.div<{ height?: string; width?: string }>`
  width: ${(props) => (props.width ? props.width : "900px")};
  height: ${(props) => (props.height ? props.height : "300px")};
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;
