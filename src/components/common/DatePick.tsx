import { useEffect, useState } from "react";
import { ko } from "date-fns/locale";
import { getMonth, getYear, getDate, getDay } from "date-fns";
import DatePicker from "react-datepicker";
import styled from "styled-components";
export default function ({ count, pricePerOne, setTotal }: any) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange as any;
  const [isOpen, setIsOpen] = useState(false);
  //const [price, setPrice] = useState<number>(0);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
    setTotal(count * pricePerOne * getDate(endDate - startDate));
  }, [endDate]);
  return (
    <>
      <Div>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update: any) => {
            setDateRange(update);
          }}
          /*excludeDates={[addDays(getDate(new Date()), 3)]}*/
          /*excludeDateIntervals={[
            { start: subDays(new Date(), 1), end: addDays(new Date(), 5) },
          ]}*/
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          closeOnScroll={true}
          placeholderText="예약 날짜 선택"
          isClearable={true}
          locale={ko}
          disabledKeyboardNavigation
        />
      </Div>
    </>
  );
}

const Div = styled.div`
  font-display: row;
  justify-content: space-between;

  width: 272px;
  margin-left: 10px;
`;
