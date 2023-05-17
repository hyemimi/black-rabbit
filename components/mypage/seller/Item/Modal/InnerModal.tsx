import { useState } from "react";
import styled from "styled-components";

interface closeModalProps {
  closeModal: () => void;
  setPostalCode: React.Dispatch<React.SetStateAction<number>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setAddressDetail: React.Dispatch<React.SetStateAction<string>>;
}

export default function InnerModal({
  setPostalCode,
  setAddress,
  setAddressDetail,
  closeModal,
}: closeModalProps) {
  const [checkedNumber, setCheckedNumber] = useState<number>(1);

  const addresses = [
    {
      id: 0,
      postalCode: 12344,
      address: "용인시 기흥구 덕영대로 17",
      addressDetail: "202호",
    },
    {
      id: 1,
      postalCode: 32334,
      address: "경기도 성남시 대왕판교로 7",
      addressDetail: "103동 203호",
    },
  ];

  const handleClose = () => {
    closeModal();
  };

  const addressSelectHandler = (e: React.MouseEvent) => {
    for (var i = 0; i < addresses.length; i++) {
      if (i == checkedNumber) {
        setPostalCode(addresses[i].postalCode);
        setAddress(addresses[i].address);
        setAddressDetail(addresses[i].addressDetail);
      }
    }
    closeModal();
    //선택된 값을 전달
  };

  return (
    <Div>
      <ModalDiv>
        <Header>
          <BigTitle>주소지 목록</BigTitle>
          <Exit onClick={handleClose}>닫기</Exit>
        </Header>
        <TableDiv>
          <Table>
            <Thead>
              <Tr>
                <LeftTd>선택</LeftTd>
                <Td>이름</Td>
                <Td>우편번호</Td>
                <Td>기본주소</Td>
                <RightTd>상세주소</RightTd>
              </Tr>
            </Thead>
            <Tbody>
              {addresses.map((add) => (
                <tr key={add.id}>
                  <LeftTd>
                    {
                      <input
                        type="radio"
                        name="address"
                        onChange={(e) => setCheckedNumber(add.id)}
                      ></input>
                    }
                  </LeftTd>
                  <Td>기본배송지</Td>

                  <Td> {add.postalCode} </Td>
                  <Td>{add.address}</Td>
                  <RightTd>{add.addressDetail}</RightTd>
                </tr>
              ))}
            </Tbody>
          </Table>
        </TableDiv>

        <ButtonDiv>
          <StyledButton onClick={addressSelectHandler}>선택</StyledButton>
        </ButtonDiv>
      </ModalDiv>
    </Div>
  );
}
// ${(props) => props.theme.searchColor};
const Header = styled.div`
  background: #b6dcbe;
`;
const BigTitle = styled.h2`
  padding: 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
`;

export const ModalDiv = styled.div`
  position: fixed;
  width: 800px;
  height: 600px;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.modalColor};
  top: 50%;
  overflow-y: scroll;
  left: 55%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  weight: 100vw;
  height: 100vhv;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 10px 350px;
  border: 0;
  background: #b9d9c0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

const ButtonDiv = styled.div`
  margin: 0 auto;
  text-align: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;
const TableDiv = styled.div`
  margin: 1rem auto;
  text-align: center;
  align-items: center;
`;

const Exit = styled.button`
  position: absolute;
  width: 50px;
  height: 40px;
  margin: 10px;
  right: 0;
  top: 0;
  border: 0;
  background: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

//상품 정보 표
const Table = styled.table`
  width: 700px;
  text-align: center;
  margin: auto;
  border-collapse: separate;
  border-spacing: 0 10px;
  white-space: nowrap;
`;

const Thead = styled.thead`
  width: 960px;
  border: 1px solid;
  font-weight: 400;
`;

const Tr = styled.tr`
  width: 960px;
  cursor: pointer;
`;

const Td = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  vertical-align: center;
  vertical-align: middle;
`;

const LeftTd = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 0 0 1px #f1f1f1;
  vertical-align: middle;
`;
const RightTd = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 0 0 1px #f1f1f1;
  vertical-align: middle;
`;

const Tbody = styled.tbody`
  background: #f1f1f1;
  oveflow-x: auto;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
`;
