import styled from "styled-components";
import { ModalDiv } from "./ModalDiv";
import { reviews } from "@/temp/reviews";
export default function AddressModal() {
  return (
    <ModalDiv>
      <Header>
        {" "}
        <BigTitle>배송지 목록</BigTitle>{" "}
      </Header>
    </ModalDiv>
  );
}
const Header = styled.div`
  background-color: ${(props) => props.theme.searchColor};
`;
const BigTitle = styled.h2`
  padding: 20px;
  font-size: 46px;
  position: relative;
`;
