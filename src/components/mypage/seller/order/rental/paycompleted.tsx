import {
  ColumnDiv,
  DeleteButton,
  DeleteDiv,
  ItemTitle,
  Label,
  LeftTd,
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  RowButtonDiv,
} from "@/styles/MypageSellerStyle";
import { useState } from "react";
import ShippingDateModal from "@/src/components/common/modal/ShippingDateModal";
import Modal from "@/src/components/common/modal/Modal";
import DeliveryProcessModal from "../../../../common/modal/DeliveryProcessModal";
import PickUpProcessModal from "@/src/components/common/modal/PickUpProcessModal";

const Paycompleted = ({ ItemList }: any) => {
  //itemID로 구분
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [selectDeliveryModal, setSelectDeliveryModal] =
    useState<boolean>(false);
  const [selectPickUpModal, setSelectPickUpModal] = useState<boolean>(false);

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

  const closeModal = (e: any) => {
    e.stopPropagation();
    setSelectModal((prev) => !prev);
  };

  const closeDeliveryModal = (e: any) => {
    e.stopPropagation();
    setSelectDeliveryModal((prev) => !prev);
  };

  const closePickUpModal = (e: any) => {
    e.stopPropagation();
    setSelectPickUpModal((prev) => !prev);
  };

  const handleShippingDate = () => {
    setSelectModal(true);
  };
  const handleDeliveryProcess = () => {
    setSelectDeliveryModal(true);
  };

  const handlePickUpProcess = () => {
    setSelectPickUpModal(true);
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
        <RowButtonDiv>
          <DeleteButton onClick={handleShippingDate}>출고일 지정</DeleteButton>
          {selectModal && (
            <Modal>
              <ShippingDateModal
                closeModal={closeModal}
                selectedItems={ItemList.filter((item: any) =>
                  checkItems.includes(item.itemId)
                ).filter((item: any) => item.productStatus === "결제완료")}
              ></ShippingDateModal>
            </Modal>
          )}
          <DeleteButton onClick={handleDeliveryProcess}>배송처리</DeleteButton>
          {selectDeliveryModal && (
            <Modal>
              <DeliveryProcessModal
                closeDeliveryModal={closeDeliveryModal}
                selectedItems={ItemList.filter((item: any) =>
                  checkItems.includes(item.itemId)
                ).filter((item: any) => item.productStatus === "결제완료")}
              ></DeliveryProcessModal>
            </Modal>
          )}
          <DeleteButton onClick={handlePickUpProcess}>픽업처리</DeleteButton>
          {selectPickUpModal && (
            <Modal>
              <PickUpProcessModal
                closePickUpModal={closePickUpModal}
                selectedItems={ItemList.filter((item: any) =>
                  checkItems.includes(item.itemId)
                ).filter((item: any) => item.productStatus === "결제완료")}
              ></PickUpProcessModal>
            </Modal>
          )}
        </RowButtonDiv>
      </DeleteDiv>

      <OverflowDiv>
        <Table>
          <Thead>
            <tr>
              <th>선택</th>
              <th>주문번호</th>
              <th>상품정보</th>
              <th>거래방법</th>
              <th>주문일시</th>
              <th>출고(예정)일</th>
              <th>택배사</th>
              <th>운송장번호</th>
              <th>결제금액</th>
              <th>고객명</th>
            </tr>
          </Thead>
          <Tbody>
            {ItemList.filter(
              (item: any) => item.productStatus === "결제완료"
            ).map((item: any, index: any) => (
              <Tr key={index}>
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
                <Td>
                  <ColumnDiv>
                    <ItemTitle>{item.title}</ItemTitle>
                  </ColumnDiv>
                </Td>
                <Td>{item.method === "PARCEL" ? "배송" : "방문"}</Td>
                <Td>{item.orderedDate}</Td>
                <Td>{item.deliveryDate}</Td>
                <Td>{item.parcelCompany}</Td>
                <Td>{item.waybillNumber}</Td>
                <Td>{item.price}원</Td>
                <RightTd>{item.customerName}</RightTd>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </OverflowDiv>
    </>
  );
};
export default Paycompleted;
