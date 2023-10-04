import styled from "styled-components";

export const ModalButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.searchColor};
`;
export const ModalSection = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
`;
export const ModalHeader = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #f1f1f1;
  font-weight: 700;
  text-align: center;
  color: black;
`;
export const ModalMain = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const ModalFooter = styled.div`
  padding: 16px;
  padding: 12px 16px;
  text-align: center;
  background-color: #f1f1f1;
`;
export const HeaderButton = styled.div`
  position: absolute;
  left: 95%;
  right: 30%;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  top: 20%;
  margin: 0 auto;
  color: #999;
  background-color: transparent;
`;
