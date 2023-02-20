import styled from "styled-components";

const addItem = () => {
  return (
    <Wrapper>
      <div>
        <StyledTitle>상품 등록</StyledTitle>
        <hr />
        <StyledTitle>상품 정보</StyledTitle>
        <Label>카테고리</Label>
        <Input type="text" />
        <Label>브랜드명</Label>
        <Input type="text" />
        <Label>모델명</Label>
        <Input type="text" />
        <Label>가격</Label>
        <Input type="text" />
        <Label>수량</Label>
        <Input type="text" />
        <Label>거래방법</Label>
        <Input type="text" />
        <Label>지역</Label>
        <Input type="text" />
        <Label>상세설명</Label>
        <textarea />
        <div>
          <Label>이미지등록</Label>
          <label htmlFor="ItemImage">이미지 업로드</label>
          <FileInput id="ItemImage" type="file" accept="image/*" />
        </div>
        <button>다음</button>
      </div>
    </Wrapper>
  );
};
export default addItem;

const StyledTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;
const Label = styled.label`
  text-align: left;
  line-height: 30px;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  height: 2.5rem;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 0 auto;
`;

const FileInput = styled.input`
  display: none;
`;
