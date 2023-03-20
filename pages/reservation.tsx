import { Wrapper } from "@/components/common/Wrapper";
import { GreenBox } from "@/components/common/GreenBox";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { BoxInput } from "@/components/common/Box";
import Modal from "@/components/common/modal/Modal";
import AddressModal from "@/components/common/modal/AddressModal";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
interface FormData {
  name: string;
  phone_1: string;
  phone_2: string;
  post_number: string;
  road_address: string;
  detail_address: string;
}
const requestList = [
  { value: "부재 시 경비실에 맡겨주세요" },
  { value: "부재 시 택배함에 넣어주세요" },
  { value: "부재 시 집 앞에 놔주세요" },
  { value: "배송 전 연락 바랍니다" },
  { value: "파손 위험, 주의 바랍니다" },
  { value: "직접입력" },
];
/*직접 개발자센터에서 내 클라이언트 키를 사용하거나, 아래 예시에 있는 키를 사용*/
//const clientKey = "test_ck_Z0RnYX2w532BPRwZBZK3NeyqApQE";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
/*결제 고객 식별 : 상점에서 사용하는 고유값 비회원 결제시 ANONYMOUS 사용*/
const customerKey = ANONYMOUS;

export default function payment() {
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const [name, setName] = useState(""); // 이름
  const [phone, setPhone] = useState({ first: "", second: "" }); // 연락처
  const [RoadAddress, setRoadAddress] = useState(""); // 도로명 주소
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소
  const [postNumber, setPostNumber] = useState(""); // 우편번호
  const [message, setMessage] = useState(""); // 배송메시지
  const [inputmessage, setinputMessage] = useState(""); // 배송메시지 - 직접입력
  const [isOpen, setIsOpen] = useState(false);
  const [addressname, setAddressName] = useState("");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setRoadAddress(fullAddress);
    setPostNumber(data.zonecode);
  };
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };
  const startPayment = () => {
    setIsPaymentOpen(true);
  };
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const price = 1;
  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      paymentWidget.renderPaymentMethods("#payment-widget", price);
      const paymentAgreement = paymentWidget.renderAgreement("#agreement");
      paymentWidgetRef.current = paymentWidget;
    })();
  }, []);

  return (
    <Wrapper>
      <Box height="100%">
        <GreenBox>배송정보</GreenBox>

        <Box width="100%" height="100%">
          <Row>
            <H1>배송지</H1>
            <BoxInput
              width="300*6px"
              height="30px"
              value={addressname}
              onChange={(e) => setAddressName(e.target.value)}
            />
            <Button onClick={() => setIsOpen(true)} color="no">
              배송지 변경
            </Button>
          </Row>
          <hr />

          <Row>
            <H1>이름</H1>
            <BoxInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              width="600px"
              height="30px"
            />
          </Row>
          <hr />
          <Row>
            <H1>연락처</H1>
            <BoxInput
              width="300px"
              height="30px"
              value={phone.first}
              onChange={(e) => setPhone({ ...phone, first: e.target.value })}
            />
            <BoxInput
              width="300px"
              height="30px"
              value={phone.second}
              onChange={(e) => setPhone({ ...phone, second: e.target.value })}
            />
          </Row>
          <hr />
          <Row>
            <H1>주소</H1>
            <AddressInput>
              <BoxInput
                value={`${postNumber + " " + RoadAddress}`}
                type="text"
                placeholder="검색버튼을 눌러 주소지를 입력해주세요"
                required
                readOnly
                width="500px"
                height="30px"
              />
              <Button onClick={searchAddressHandler}>우편번호 검색</Button>
              <BoxInput
                placeholder="상세 주소를 입력해주세요"
                type="text"
                width="500px"
                height="30px"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
            </AddressInput>
          </Row>
          <hr />
          <Row>
            <H1>배송 요청사항</H1>
            <select onChange={(e) => setMessage(e.target.value)}>
              <option value="">배송시 요청사항을 선택해주세요</option>
              {requestList.map((request) => (
                <option key={request.value} value={request.value}>
                  {request.value}
                </option>
              ))}
            </select>
            {message === "직접입력" && (
              <BoxInput
                height="50px"
                type="textarea"
                placeholder="최대 50자입니다"
                value={inputmessage}
                onChange={(e) => {
                  setinputMessage(e.target.value);
                }}
              />
            )}
          </Row>
        </Box>
        <GreenBox>상품정보 / 결제금액</GreenBox>
        <Box width="100%"></Box>
        <GreenBox>결제정보</GreenBox>
        <Box width="100%" height="100%">
          <Row>
            <H1>결제수단</H1>
          </Row>
          <div id="payment-widget" />
          <hr />
          <Row>
            <H1>환불안내</H1>
          </Row>
          <hr />
          <Row>
            <H1>주문자 동의</H1>
          </Row>
          <div id="agreement" />
          <hr />
        </Box>
      </Box>
      {isOpen && (
        <>
          <AnimatePresence>
            <Overlay
              onClick={() => setIsOpen(false)}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </AnimatePresence>
          <Modal>
            <AddressModal isOpen={isOpen} setIsOpen={setIsOpen}></AddressModal>
          </Modal>
        </>
      )}
      <Button
        onClick={() => {
          const paymentWidget = paymentWidgetRef.current;
          try {
            paymentWidget?.requestPayment({
              orderId: nanoid(),
              orderName: "test",
              customerName: "김토스",
              customerEmail: "customer123@gmail.com",
              successUrl: `${window.location.origin}/success`,
              failUrl: `${window.location.origin}/fail`,
            });
          } catch (err) {
            console.log(err);
          }
        }}
      >
        결제하기
      </Button>
    </Wrapper>
  );
}

const Row = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 15px;
  margin-right: 5px;
  width: 100px;
`;
const Box = styled.div<{ height?: string; width?: string }>`
  width: ${(props) => (props.width ? props.width : "900px")};
  height: ${(props) => (props.height ? props.height : "300px")};
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const AddressInput = styled.div`
  flex-direction: column;
`;
const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  height: 50px;
  width: 100px;
  cursor: pointer;
  margin: 5px;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 120%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
