import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 100px 100px 350px;
`;

export const WholeDiv = styled.div`
  margin: 0 auto;
  align: left;
  width: 1440px;
`;
export const Title = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-left: 10px;
`;

export const StatusDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StatusBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  margin: 10px;
  width: 120px;
  height: 120px;
  text-align: center;
  border-radius: 5px;
  vertical-align: middle;
  padding: 20px 10px;
`;

export const StatusName = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-top: 5px;
  font-weight: 400;
  height: 50px;
`;

export const Number = styled.h1`
  font-size: 20px;
  text-align: center;
`;

// 검색 및 필터링
export const SearchDiv = styled.div`
  width: 960px;
  height: 50px;
  background: #f1f1f1;
  border-radius: 10px;
  margin: 20px 5px;
  display: flex;
  flex-direction: row;
`;

export const P = styled.p`
  line-height: 50px;
  font-weight: 400;
  margin: 0px 5px 0px 0px;
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  width: max-content;
  height: 30px;
  margin: 10px 5px;
  border: 1px solid #329d3d;
  background: #ffffff;
  vertical-align: middle;
`;

export const FilterName = styled.p`
  margin: 6px 0px 5px 10px;
  font-size: 15px;
  font-weight: 400;
  vertical-align: middle;
`;

export const Option = styled.option`
  margin: 5px 5px 5px 5px;
  color: #329d3d;
  font-weight: 400;
  font-size: 15px;
  border: none;
  border-radius: 40px;
  vertical-align: middle;
`;

export const Select = styled.select`
  margin: 5px 5px 5px 5px;
  border: none;
  width: max-content;
  border-radius: 40px;
  color: #329d3d;
  font-size: 15px;
`;

//전체 상품 목록

export const WholeLists = styled.h1`
  margin: 30px 10px 10px 11px;
  font-weight: 400;
`;

export const Hr = styled.hr`
  margin: 10px 100px 0px 10px;
  width: 960px;
  border: 0.7px solid #777c77;
`;

export const DeleteDiv = styled.div`
  margin: 0 0 0 10px;
  border: none;
  height: 50px;
  width: 960px;
  background: ${(props) => props.theme.pointColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TabDiv = styled.div`
  margin: 0 0 0 10px;
  border: none;
  height: 50px;
  width: 960px;
  background: ${(props) => props.theme.pointColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.label`
  line-height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 400;
`;

export const DeleteButton = styled.button`
  height: 30px;
  margin: 10px 10px 10px auto;
  background: #fafafa;
  border: 1px #d9d9d9;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const RowButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StateButton = styled.button`
  width: 480px;
  margin: 0;
  padding: 10px;
  border: none;
  font-size: 20px;
  background: ${(props) => props.theme.pointColor};
  &:active {
    background-color: #${(props) => props.theme.pointColor};
  }
`;

export const WhiteButton = styled.button`
  width: 480px;
  margin: 0;
  padding: 10px;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  background: white;
`;

//상품 정보 표
export const Table = styled.table`
  width: 960px;
  text-align: center;
  margin-left: 10px;
  border-collapse: separate;
  border-spacing: 0 10px;
  white-space: nowrap;
  font-weight: 400;
  overflow: scroll;
`;

export const Thead = styled.thead`
  width: 960px;
  border: 1px solid;
  font-weight: 400;
`;

export const Th = styled.th`
  vertical-align: center;
  vertical-align: middle;
`;

export const Tr = styled.tr`
  width: 960px;
`;

export const Td = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  vertical-align: center;
  vertical-align: middle;
`;

export const LeftTd = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 0 0 1px #f1f1f1;
  vertical-align: middle;
`;
export const RightTd = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 0 0 1px #f1f1f1;
  vertical-align: middle;
`;

export const Tbody = styled.tbody`
  background: #f1f1f1;
  oveflow-x: auto;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemTitle = styled.h1`
  width: min-content;
`;

export const OverflowDiv = styled.div`
  oveflow-x: scroll;
  width: 960px;
`;

export const GreenButton = styled.button`
  background: ${(props) => props.theme.pointColor};
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

export const GrayButton = styled.button`
  background: #d9d9d9;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;
