import styled from "styled-components";

export const Box = styled.div<{ height?: string }>`
  width: 900px;
  height: ${(props) => (props.height ? props.height : "300px")};
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 10px;
`;

export const BoxInput = styled.input<{ height?: string; width?: string }>`
  margin-left: 20px;
  width: ${(props) => (props.width ? props.width : "730px")};
  height: ${(props) => (props.height ? props.height : "300px")};
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 10px;
`;

export const Item = styled.div<{ width: string }>`
  margin: 10px;
  width: ${(props) => props.width};
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-size: 30px;
`;
