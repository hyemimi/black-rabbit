import React, { ReactElement, useEffect, useState, useRef } from "react";

import styled from "styled-components";

interface closeModalProps {
  closeAddModal: () => void;
}

interface InputItem {
  id: number;
  serialNum: string;
}

const ProductAddModal = ({ closeAddModal }: closeModalProps) => {
  const nextId = useRef<number>(1);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    {
      id: 0,
      serialNum: "",
    },
  ]);
  const addInput = () => {
    const inputContents = {
      id: nextId.current,
      serialNum: "",
    };
    setInputItems([...inputItems, inputContents]);
    nextId.current += 1;
  };

  function deleteInput(index: number) {
    // 인덱스 값을 받아서
    setInputItems(inputItems.filter((item) => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    // ↓ 이벤트 객체를 받고, 인덱스를 받자
    if (index > inputItems.length) return; // 혹시 모르니 예외처리

    // 인풋배열을 copy 해주자
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].serialNum = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자
    setInputItems(inputItemsCopy); // 그걸 InputItems 에 저장해주자
  }
  return (
    <Div>
      <ModalDiv>
        <Header>
          <BigTitle>개별 상품 추가</BigTitle>
          <Exit onClick={closeAddModal}>닫기</Exit>
        </Header>
        <ContentsDiv>
          <Title>상품정보</Title>
          <Box>
            <ItemsRowDiv>
              <P>상품명 </P>
              <P>캐논오토보이 </P>
            </ItemsRowDiv>
            <P>추가할 상품정보</P>
            <ItemBox>
              <RowDivWithMargin>
                <State>일련번호 </State>
                <ColumnDiv>
                  {inputItems.map((item, index) => (
                    <RowDiv key={index}>
                      <Input
                        type="text"
                        id={`serialNum-${index}`}
                        onChange={(e) => handleChange(e, index)}
                        value={item.serialNum}
                      />
                      {index === 0 && inputItems.length < 10 && (
                        <PlusButton onClick={addInput}> + </PlusButton>
                      )}
                      {index > 0 && inputItems[index - 1] ? (
                        <PlusButton onClick={() => deleteInput(item.id)}>
                          -
                        </PlusButton>
                      ) : (
                        ""
                      )}
                    </RowDiv>
                  ))}
                </ColumnDiv>
              </RowDivWithMargin>
            </ItemBox>
          </Box>
          <ButtonDiv>
            <Button>등록</Button>
          </ButtonDiv>
        </ContentsDiv>
      </ModalDiv>
    </Div>
  );
};
export default ProductAddModal;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  weight: 100vw;
  height: 100vhv;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
`;
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

const ContentsDiv = styled.div`
  margin: 0 auto;
  padding: 5px 20px;
  align-items: center;
  border-radius: 10px;
`;

const Title = styled.h1`
  padding: 20px 0 0px 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
  text-align: left;
`;

const Box = styled.div`
  margin: 10px;
  padding: 20px 20px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

const P = styled.p`
  margin: 10px;
  font-weight: 400;
`;

const ItemBox = styled.div`
  background: #f1f1f1;
  border-radius: 10px;
  padding: 10px;
`;

const RowDivWithMargin = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 10px;
`;

const State = styled.h1`
  width: 60px;
  margin: 10px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 80px;
  background: #cee8d3;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;
const ItemsRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonDiv = styled.div`
  margin: 25px;
  text-align: center;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlusButton = styled.div`
  border: none;
  border-radius: 5px;
  background: #d9d9d9;
  width: 20px;
  text-align: center;
  vertical-align: middle;
  font-weight: 400;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 120px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  margin: 3px;
`;
