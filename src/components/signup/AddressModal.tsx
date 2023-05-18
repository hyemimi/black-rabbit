import DaumPostcode from "react-daum-postcode";
import { ModalDiv } from "../common/modal/ModalDiv";
import styled from "styled-components";

interface AddressProps {
  setOpenPostcode: React.Dispatch<React.SetStateAction<boolean>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setPostalCode: React.Dispatch<React.SetStateAction<number>>;
}

const AddressModal = ({
  setOpenPostcode,

  setAddress,
  setPostalCode,
}: AddressProps) => {
  const handle = {
    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setAddress(data.address);
      setPostalCode(data.zonecode);
      setOpenPostcode(false);
    },
  };

  return (
    <Div>
      <ModalDiv>
        <DaumPostcode
          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          autoClose={true} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
        />
      </ModalDiv>
    </Div>
  );
};
export default AddressModal;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  weight: 100vw;
  height: 100vhv;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
`;
