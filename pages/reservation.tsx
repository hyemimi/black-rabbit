import { Wrapper } from "@/components/common/Wrapper";
import { GreenBox } from "@/components/common/GreenBox";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { BoxInput } from "@/components/common/Box";

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
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [RoadAddress, setRoadAddress] = useState(""); // 도로명 주소
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소
  const [postNumber, setPostNumber] = useState(""); // 우편번호

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setRoadAddress(fullAddress);
    setPostNumber(data.zonecode);
  };
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };

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
      <Box height="100%">
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
            <AddressInput>
              <BoxInput
                value={`${"[" + postNumber + "]" + RoadAddress}`}
                type="text"
                placeholder="검색버튼을 눌러 주소지를 입력해주세요"
                required
                readOnly
                width="500px"
                height="30px"
              />
              <button onClick={searchAddressHandler}>우편번호 검색</button>

              <BoxInput width="400px" height="30px" />
            </AddressInput>
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
        <Box width="100%">
          <Row>
            <H1>결제수단</H1>
            일반결제
            <input type="checkbox" />
          </Row>
          <hr />
          <Row>
            <H1>환불안내</H1>
          </Row>
          <hr />
          <Row>
            <H1>주문자 동의</H1>
          </Row>
          <hr />
        </Box>
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
const AddressInput = styled.div`
  flex-direction: column;
`;
