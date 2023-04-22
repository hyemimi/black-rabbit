import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const AgreeTerms = () => {
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const data = [
    { id: 0, title: "선택 1" },
    { id: 1, title: "선택 2" },
    { id: 2, title: "선택 3" },
    { id: 3, title: "선택 4" },
  ];

  // 체크박스 단일 선택
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev: number[]) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  return (
    <>
      <StyledH1>약관동의</StyledH1>
      <input
        type="checkbox"
        name="terms"
        value="selectall"
        onChange={(e) => handleAllCheck(e.target.checked)}
        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
        checked={checkItems.length === 4 ? true : false}
      />
      <StyledLabel htmlFor="allTermsAgree">약관에 모두 동의합니다.</StyledLabel>
      <StyledHr />

      <div>
        <input
          name={`select-${data[0].id}`}
          type="checkbox"
          value="serviceterm"
          onChange={(e) => handleSingleCheck(e.target.checked, data[0].id)}
          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
          checked={checkItems.includes(data[0].id) ? true : false}
        />
        <Link href="">
          <StyledLabel>서비스 이용 약관(필수)</StyledLabel>
        </Link>
      </div>
      <div>
        <input
          name={`select-${data[1].id}`}
          type="checkbox"
          value="privacyterm"
          id="2"
          onChange={(e) => handleSingleCheck(e.target.checked, data[1].id)}
          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
          checked={checkItems.includes(data[1].id) ? true : false}
        />
        <Link href="">
          <StyledLabel>개인정보 처리방침(필수)</StyledLabel>
        </Link>
      </div>
      <div>
        <input
          name={`select-${data[2].id}`}
          type="checkbox"
          value="locationterm"
          onChange={(e) => handleSingleCheck(e.target.checked, data[2].id)}
          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
          checked={checkItems.includes(data[2].id) ? true : false}
        />
        <Link href="">
          <StyledLabel>위치기반 서비스 이용 약관(필수)</StyledLabel>
        </Link>
      </div>
      <div>
        <input
          name={`select-${data[3].id}`}
          type="checkbox"
          value="alertterm"
          onChange={(e) => handleSingleCheck(e.target.checked, data[3].id)}
          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
          checked={checkItems.includes(data[3].id) ? true : false}
        />
        <Link href="">
          <StyledLabel>프로모션 알림 메일 및 SMS 수신(선택)</StyledLabel>
        </Link>
      </div>
    </>
  );
};
export default AgreeTerms;

const StyledLabel = styled.label`
  text-align: left;
  line-height: 2rem;
`;

const StyledH1 = styled.h1`
  font-weight: 500;
  line-height: 2rem;
`;

const StyledHr = styled.hr`
  margin: 1rem irem 0 0;
`;
