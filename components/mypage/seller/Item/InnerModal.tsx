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
      address: "용인시 기흥구 덕영대로 1asdfasfsdfasfas 7",
      addressDetail: "203호",
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
            <thead>
              <tr>
                <td></td>
                <td>우편번호</td>
                <td>기본주소</td>
                <td>상세주소</td>
              </tr>
            </thead>
            <tbody>
              {addresses.map((add) => (
                <tr key={add.id}>
                  <Td>
                    {
                      <input
                        type="radio"
                        name="address"
                        onChange={(e) => setCheckedNumber(add.id)}
                      ></input>
                    }
                  </Td>

                  <Td> {add.postalCode} </Td>
                  <Td>{add.address}</Td>
                  <Td>{add.addressDetail}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableDiv>

        <ButtonDiv>
          <StyledButton onClick={addressSelectHandler}>선택</StyledButton>
        </ButtonDiv>
      </ModalDiv>
    </Div>
  );
}

const Header = styled.div`
  background-color: ${(props) => props.theme.searchColor};
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
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
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
  margin: 0 auto;
  text-align: center;
  align-items: center;
`;
const Table = styled.table`
  border: 1px solid #333;
  width: 700px;
  margin: 1rem auto;
`;

const Td = styled.td`
  border: 1px solid #333;
  overflow: scroll;
  vertical-align: center;
`;

const Exit = styled.button`
  position: absolute;
  width: 50px;
  height: 40px;
  margin: 10px;
  right: 0;
  top: 0;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;
