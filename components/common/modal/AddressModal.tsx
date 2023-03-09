import styled from "styled-components";
import { ModalDiv } from "./ModalDiv";
import { reviews } from "@/temp/reviews";
import {
  ModalSection,
  ModalButton,
  ModalHeader,
  ModalFooter,
  ModalMain,
  HeaderButton,
} from "./ModalComponent";

export default function AddressModal({ setIsOpen, isOpen }: any) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const addresslist = [
    {
      name: "집",
      postalCode: 1234,
      address: "경기 화성시 서동탄로 11",
      addressDetail: "205동 개인정보 어쩌구",
    },
    {
      name: "자취방",
      postalCode: 1234,
      address: "경기 용인시 국",
      addressDetail: "전자정보대...가기싫다",
    },
  ];

  return (
    <ModalDiv>
      <ModalSection>
        <ModalHeader>
          배송지 목록
          <HeaderButton onClick={closeModal}>X</HeaderButton>
        </ModalHeader>
        <ModalMain>
          {addresslist.map((address) => (
            <Box>
              <Circle>{address.name}</Circle>
              <h1>
                {address.postalCode} {address.address} {address.addressDetail}
              </h1>

              <ModalButton>선택</ModalButton>
            </Box>
          ))}
        </ModalMain>
        <ModalFooter>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
        </ModalFooter>
      </ModalSection>
    </ModalDiv>
  );
}
export const Box = styled.div`
  width: 750px;
  max-width: 750px;
  height: 80px;
  font-weight: bold;
  background-color: rgb(230, 230, 230);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  margin: 10px;
  * {
    color: rgb(39, 39, 39);
    font-weight: bold;
  }
  button {
    color: rgb(230, 230, 230);
  }
`;

const Circle = styled.div`
  border-radius: 30px;
  background-color: ${(props) => props.theme.pointColor};
`;
