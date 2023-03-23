import { Wrapper } from "@/components/common/Wrapper";
import { GreenBox } from "@/components/common/GreenBox";
import styled from "styled-components";
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
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useGetOrderList } from "@/hooks/api/payment/GetOrderInfo";

interface FormData {
  addressname: string;
  name: string;
  phone_1: string;
  phone_2: string;
  post_number: string;
  road_address: string;
  detail_address: string;
}
interface pickupFormData {
  name: string;
  phone1: string;
  phone2: string;
}
const requestList = [
  { value: "부재 시 경비실에 맡겨주세요" },
  { value: "부재 시 택배함에 넣어주세요" },
  { value: "부재 시 집 앞에 놔주세요" },
  { value: "배송 전 연락 바랍니다" },
  { value: "파손 위험, 주의 바랍니다" },
  { value: "직접입력" },
];

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "cyxvwiRl9bBlieSh4r6W6";
/*직접 개발자센터에서 내 클라이언트 키를 사용하거나, 아래 예시에 있는 키를 사용*/
//const clientKey = "test_ck_Z0RnYX2w532BPRwZBZK3NeyqApQE";
/*결제 고객 식별 : 상점에서 사용하는 고유값 비회원 결제시 ANONYMOUS 사용*/
//const customerKey = ANONYMOUS;

export default function payment() {
  const router = useRouter();
  console.log(router.query);
  let basketIds = router.query.basketIds;

  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const [RoadAddress, setRoadAddress] = useState(""); // 도로명 주소
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소
  const [postNumber, setPostNumber] = useState(""); // 우편번호
  const [message, setMessage] = useState(""); // 배송메시지
  const [inputmessage, setinputMessage] = useState(""); // 배송메시지 - 직접입력
  const [isOpen, setIsOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isaddressvalid, setIsAddressValid] = useState({
    road_postaddress: false,
    detail: false,
  });
  const [isAllVisit, setIsAllVisit] = useState(false); // 전체 픽업 여부

  let pickupaddress = "경기 화성시"; // temp data

  //const { OrderInfo } = useGetOrderList(router.query.basketIds, 1); // 주문 정보
  /* 주소 검색 시스템 */
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
    setIsAddressValid({ ...isaddressvalid, road_postaddress: true });
  };
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };
  /* 결제 시스템 */
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

  /* form 시스템 : 배송 포함 */
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const handleValid = (data: FormData) => {
    //Api 호출

    /* setValue("userID", "");
    setValue("userPW", ""); */
    if (
      isaddressvalid.detail === true &&
      isaddressvalid.road_postaddress === true
    ) {
      console.log(data, RoadAddress, postNumber, detailAddress);
      if (message === "직접입력") {
        console.log(inputmessage);
      } else {
        console.log(message);
      }
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
    } else {
      window.confirm("주소를 입력해주세요");
    }
  };

  /* form 시스템 : 전체 픽업 */
  const {
    register: pickupregister,
    handleSubmit: pickuphandleSubmit,
    formState: { errors: pickuperrors },
  } = useForm<pickupFormData>();

  const handlepickupValid = (data: pickupFormData) => {
    //Api 호출

    /* setValue("userID", "");
    setValue("userPW", ""); */
    console.log(data);
    console.log(pickupaddress);

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
  };

  //const { OrderInfo } = useGetOrderList(router?.query?.basketIds, 1);

  return (
    <Wrapper>
      <form
        onSubmit={
          !isAllVisit
            ? handleSubmit(handleValid)
            : pickuphandleSubmit(handlepickupValid)
        }
      >
        <Box height="100%">
          {!isAllVisit ? (
            <>
              <GreenBox>배송정보</GreenBox>
              <Box width="100%" height="100%">
                <Row>
                  <H1>배송지</H1>
                  <BoxInput
                    {...register("addressname", {
                      required: "배송지 이름을 입력해주세요",
                    })}
                    width="300*6px"
                    height="30px"
                    required
                  />

                  <Button onClick={() => setIsOpen(true)} color="no">
                    배송지 변경
                  </Button>
                </Row>
                <hr />

                <Row>
                  <H1>이름</H1>
                  <BoxInput
                    width="600px"
                    height="30px"
                    required
                    {...register("name", {
                      required: "이름을 입력해주세요",
                    })}
                  />
                </Row>
                <hr />
                <Row>
                  <H1>연락처</H1>
                  <BoxInput
                    width="300px"
                    height="30px"
                    placeholder="ex) 010-1234-5678"
                    {...register("phone_1", {
                      required: "연락처를 입력해주세요",
                      pattern: {
                        value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
                        message: "올바른 입력처를 입력해주세요",
                      },
                    })}
                    required
                  />
                  <StyledSpan>
                    {errors?.phone_1 && errors?.phone_1.message}
                  </StyledSpan>
                  <BoxInput
                    width="300px"
                    height="30px"
                    {...register("phone_2", {
                      required: "연락처를 입력해주세요",
                      pattern: {
                        value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
                        message: "올바른 연락처를 입력해주세요",
                      },
                    })}
                    required
                  />
                  <StyledSpan>
                    {errors?.phone_2 && errors?.phone_2.message}
                  </StyledSpan>
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
                    <Button onClick={searchAddressHandler}>
                      우편번호 검색
                    </Button>
                    <BoxInput
                      placeholder="상세 주소를 입력해주세요"
                      type="text"
                      width="500px"
                      height="30px"
                      value={detailAddress}
                      onChange={(e) => {
                        setDetailAddress(e.target.value);
                        setIsAddressValid({ ...isaddressvalid, detail: true });
                      }}
                      required
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
            </>
          ) : (
            <>
              <GreenBox>픽업정보</GreenBox>
              <Box width="100%" height="100%">
                <Row>
                  <H1>픽업주소</H1>
                  <BoxInput
                    value={pickupaddress}
                    type="text"
                    readOnly
                    width="500px"
                    height="30px"
                  />
                </Row>
                <Row>
                  <H1>이름</H1>
                  <BoxInput
                    type="text"
                    width="600px"
                    height="30px"
                    required
                    {...pickupregister("name", {
                      required: "이름을 입력해주세요",
                    })}
                  />
                </Row>
                <Row>
                  <H1>연락처</H1>
                  <BoxInput
                    width="300px"
                    height="30px"
                    placeholder="ex) 010-1234-5678"
                    {...pickupregister("phone1", {
                      required: "연락처를 입력해주세요",
                      pattern: {
                        value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
                        message: "올바른 연락처를 입력해주세요",
                      },
                    })}
                  />
                  <BoxInput
                    width="300px"
                    height="30px"
                    placeholder="ex) 010-1234-5678"
                    {...pickupregister("phone2", {
                      required: "연락처를 입력해주세요",
                      pattern: {
                        value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
                        message: "올바른 연락처를 입력해주세요",
                      },
                    })}
                    type="text"
                  />
                </Row>
              </Box>
            </>
          )}
          <GreenBox>상품정보 / 결제금액</GreenBox>
          <Box width="100%">
            <TitleDiv>
              <Title>상품정보</Title>
              <Title>예약기간</Title>
              <Title>금액</Title>
              <Title>거래방법</Title>
            </TitleDiv>
            <Hr />
            <ItemBox>아이템 박스1</ItemBox>
            <Hr />
          </Box>
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

        <Button>결제하기</Button>
      </form>
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

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled.h1`
  margin: 10px;
`;
const Hr = styled.hr`
  background-color: ${(props) => props.theme.pointColor};
`;

const StyledSpan = styled.span`
  font-size: small;
  color: red;
`;
const ImageDiv = styled.div`
  width: 200px;
`;
const ItemBox = styled.div`
  width: 800px;
  height: 118px;
  display: flex;
`;
const Item = styled.div`
  width: 158px;

  text-align: center;
  align-items: center;
  padding: 20px;
`;
