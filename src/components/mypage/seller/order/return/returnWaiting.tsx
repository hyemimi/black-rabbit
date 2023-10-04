import {
  DeleteButton,
  DeleteDiv,
  Label,
  LeftTd,
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@/styles/MypageSellerStyle";
import { useState } from "react";
import Modal from "@/src/components/common/modal/Modal";
import ReturnProcessModal from "../../../../common/modal/ReturnProcessModal";

const ReturnWaiting = ({ ItemList }: any) => {
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const closeModal = (e: any) => {
    e.stopPropagation();
    setSelectModal((prev) => !prev);
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked: boolean, itemId: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev: number[]) => [...prev, itemId]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el: any) => el !== itemId));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      ItemList.forEach((el: any) => idArray.push(el.itemId));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  const handleRefundCheck = () => {
    setSelectModal(true);
  };

  return (
    <>
      <DeleteDiv>
        <Label>
          <input
            type="checkbox"
            onChange={(e) => handleAllCheck(e.target.checked)}
            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
            checked={checkItems.length === 4 ? true : false}
          />
          전체선택
        </Label>
        <DeleteButton onClick={handleRefundCheck}>반납처리</DeleteButton>
        {selectModal && (
          <Modal>
            <ReturnProcessModal
              closeModal={closeModal}
              selectedItems={ItemList.filter((item: any) =>
                checkItems.includes(item.itemId)
              ).filter((item: any) => item.productStatus === "반납대기")}
            ></ReturnProcessModal>
          </Modal>
        )}
      </DeleteDiv>

      <Table>
        <Thead>
          <tr>
            <th>선택</th>
            <th>주문번호</th>
            <th>상품명</th>
            <th>거래방법</th>
            <th>주문일시</th>
            <th>결제금액</th>
            <th>고객명</th>
          </tr>
        </Thead>
        <Tbody>
          {ItemList.filter(
            (item: any) => item.productStatus === "반납대기"
          ).map((item: any, index: number) => (
            <Tr key={item.title}>
              <LeftTd>
                <input
                  type="checkbox"
                  key={item.itemId}
                  onChange={(e: any) => {
                    e.stopPropagation();
                    handleSingleCheck(e.target.checked, item.itemId);
                  }}
                  // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(item.itemId) ? true : false}
                ></input>
              </LeftTd>
              <Td>{item.orderNum}</Td>
              <Td>{item.title}</Td>
              <Td>{item.method}</Td>
              <Td>{item.orderedDate}</Td>

              <Td>{item.price}</Td>
              <RightTd>{item.customerName}</RightTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
export default ReturnWaiting;
