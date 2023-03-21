import { useDaumPostcodePopup } from "react-daum-postcode";
import { useState } from "react";
import styled from "styled-components";
import { BoxInput } from "./Box";

const SearchAddress = () => {
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const [RoadAddress, setRoadAddress] = useState(""); // 도로명 주소
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소
  const [postNumber, setPostNumber] = useState(""); // 우편번호

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
    setPostNumber(data.zonecode);
    setRoadAddress(fullAddress);

    //setRoadAddress(`${"[" + data.zonecode + "] "}` + fullAddress);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  /* 우편번호 검색 서비스 popup 열기 */
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };

  /* 배송지 저장 제출*/
  const submitAddressHandler = () => {
    setPostNumber("");
    setRoadAddress("");
    setDetailAddress("");
  };

  return (
    <>
      <Div>
        <BoxInput
          width="300px"
          height="50px"
          name="postnumber"
          value={postNumber}
          type="text"
          onChange={(e) => setPostNumber(e.target.value)}
          placeholder="우편번호"
          required
          readOnly
        />

        <Button onClick={searchAddressHandler}>우편번호 검색</Button>
      </Div>
      <BoxInput
        width="800px"
        height="50px"
        name="storeRoadAddress"
        value={RoadAddress}
        type="text"
        onChange={(e) => setRoadAddress(e.target.value)}
        placeholder="주소지"
        required
        readOnly
      />
      <BoxInput
        width="800px"
        height="50px"
        type="text"
        value={detailAddress}
        placeholder="상세 주소를 입력해주세요."
        onChange={(e) => setDetailAddress(e.currentTarget.value)}
      ></BoxInput>
      <Div>
        <input type="checkbox" />
        <h3>기본배송지로 선택</h3>
      </Div>
      <ButtonDiv>
        <Button color="yes" onClick={submitAddressHandler}>
          저장
        </Button>
      </ButtonDiv>
    </>
  );
};

export default SearchAddress;

const Div = styled.div`
  display: flex;
  width: 820px;
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
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
