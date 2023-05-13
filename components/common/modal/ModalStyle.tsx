import styled from "styled-components";

export const Div = styled.div`
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
export const Header = styled.div`
  background-color: ${(props) => props.theme.searchColor};
`;
export const BigTitle = styled.h2`
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

export const Exit = styled.button`
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

export const ContentsDiv = styled.div`
  margin: 0 auto;
  padding: 5px 20px;
  align-items: center;
  border-radius: 10px;
`;

export const Title = styled.h1`
  padding: 20px 0 0px 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
  text-align: left;
`;

export const Box = styled.div`
  margin: 10px;
  padding: 20px 20px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

export const P = styled.p`
  margin: 10px;
  font-weight: 400;
`;

export const ItemBox = styled.div`
  background: #f1f1f1;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  align-items: center;
`;

//#cee8d3;
export const Button = styled.button`
  width: 80px;
  background: ${(props) => props.theme.pointColor};
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  margin: 5px;
`;
export const ItemsRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonDiv = styled.div`
  margin: 25px;
  text-align: center;
`;

export const Input = styled.input`
  width: 90px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  margin: 3px;
`;

export const ModalTable = styled.table`
  width: 150px;
  font-size: 14px;
  text-align: center;
  margin: 10px auto;
  border-collapse: separate;
  border-spacing: 0 10px;
  white-space: nowrap;
  font-weight: 400;
`;

export const CheckQuestion = styled.p`
  text-align: center;
  margin: 10px 0;
`;
