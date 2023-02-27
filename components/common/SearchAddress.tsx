import { useDaumPostcodePopup } from "react-daum-postcode";
import { useState } from "react";
import styled from "styled-components";
import { BoxInput } from "./Box";

const SearchAddress = () => {
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const [isOpenPost, setIsOpenPost] = useState(false); // 모달 열기 & 닫기
  const [RoadAddress, setRoadAddress] = useState(""); // 도로명 주소
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  /* 도로명 주소를 받습니다*/
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
    setRoadAddress(`${"[" + data.zonecode + "] "}` + fullAddress);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  /* 우편번호 검색 서비스 popup 열기 */
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };

  /* 배송지 저장 제출*/
  const submitAddressHandler = () => {
    setRoadAddress("");
    setDetailAddress("");
  };

  return (
    <FormDiv>
      <Div>
        <BoxInput
          width="500px"
          height="50px"
          name="storeRoadAddress"
          value={RoadAddress}
          type="text"
          onChange={(e) => setRoadAddress(e.target.value)}
          placeholder="도로명 주소 검색"
          required
          readOnly
        />
        <Button onClick={searchAddressHandler}>주소 찾기</Button>
      </Div>
      <BoxInput
        width="500px"
        height="50px"
        type="text"
        value={detailAddress}
        placeholder="상세 주소 입력"
        onChange={(e) => setDetailAddress(e.currentTarget.value)}
      ></BoxInput>
      <Button color="yes" onClick={submitAddressHandler}>
        저장
      </Button>
    </FormDiv>
  );
};

export default SearchAddress;

const Div = styled.div`
  display: flex;
`;
const FormDiv = styled.div`
  justify-content: space-around;
`;
const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  height: 50px;
  width: 70px;
  cursor: pointer;
  margin: 5px;
`;
