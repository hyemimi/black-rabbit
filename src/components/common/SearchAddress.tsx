import { useDaumPostcodePopup } from "react-daum-postcode";
import { useState } from "react";
import styled from "styled-components";
import { BoxInput } from "../../../styles/Box";
import useAddAddressMutation from "@/src/hooks/api/user/AddAddressMutation";

const SearchAddress = () => {
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const [RoadAddress, setRoadAddress] = useState<string>(""); // 도로명 주소
  const [detailAddress, setDetailAddress] = useState<string>(""); // 상세 주소
  const [postNumber, setPostNumber] = useState<number>(0); // 우편번호
  const [nickname, setNickname] = useState<string>("");
  const { mutate: addAddressMutate } = useAddAddressMutation();
  const [isDefault, setIsDefault] = useState<boolean>(false);
  const [isaddressvalid, setIsAddressValid] = useState({
    road_postaddress: false,
    detail: false,
  });
  let userId = 1;

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
    setIsAddressValid({ ...isaddressvalid, road_postaddress: true });
    //setRoadAddress(`${"[" + data.zonecode + "] "}` + fullAddress);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  /* 우편번호 검색 서비스 popup 열기 */
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };

  /* 배송지 저장 제출*/
  const submitAddressHandler = () => {
    if (
      // 유효성 검사
      isaddressvalid.detail === true &&
      isaddressvalid.road_postaddress === true
    ) {
      addAddressMutate({
        address: {
          address: RoadAddress,
          addressDetail: detailAddress,
          postalCode: Number(postNumber),
        },
        isDefault: isDefault,
        nickname: nickname,
        userId: userId,
      });
      // input 값 초기화
      setNickname("");
      setPostNumber(0);
      setRoadAddress("");
      setDetailAddress("");
      setIsDefault(false);
      setIsAddressValid({
        road_postaddress: false,
        detail: false,
      });
    } else {
      window.confirm("주소지 입력을 다시 확인해주세요");
    }
  };

  return (
    <>
      <Div>
        <BoxInput
          width="300px"
          height="50px"
          name="nickname"
          value={nickname}
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          placeholder="배송지명"
          required
        />
      </Div>
      <Div>
        <BoxInput
          width="300px"
          height="50px"
          name="postnumber"
          value={Number(postNumber)}
          type="text"
          onChange={(e) => setPostNumber(Number(e.target.value))}
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
        onChange={(e) => {
          setDetailAddress(e.currentTarget.value);
          setIsAddressValid({ ...isaddressvalid, detail: true });
        }}
      ></BoxInput>
      <Div>
        <input
          type="checkbox"
          checked={isDefault}
          onChange={(e: any) => setIsDefault(e.target.checked)}
        />
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
