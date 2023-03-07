import { useDaumPostcodePopup } from "react-daum-postcode";
import { BoxInput } from "../common/Box";
import styled from "styled-components";

export default function Address({ setAddress }: any) {
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
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
    setAddress({
      RoadAddress: fullAddress,
      postNumber: data.zonecode,
    });

    //setRoadAddress(`${"[" + data.zonecode + "] "}` + fullAddress);
    console.log({
      RoadAddress: fullAddress,
      postNumber: data.zonecode,
    });

    //setRoadAddress(`${"[" + data.zonecode + "] "}` + fullAddress);
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  /* 우편번호 검색 서비스 popup 열기 */
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };

  return (
    <>
      <Button onClick={searchAddressHandler}>우편번호 검색</Button>
    </>
  );
}
const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  height: 50px;
  width: 70px;
  cursor: pointer;
  margin: 5px;
`;
