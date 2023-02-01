import { useEffect, useState } from "react";
import { ko } from "date-fns/locale";
import { getMonth, getYear, getDate, getDay } from "date-fns";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
import DatePicker from "react-datepicker";
import styled from "styled-components";
export default function () {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange as any;
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState<number>(0);
  let onedayprice = 10000;
  const handleClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
    setPrice(onedayprice * (getDay(endDate) - getDay(startDate) + 1));
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
          excludeDates={[addDays(getDate(new Date()), 3)]}
          excludeDateIntervals={[
            { start: subDays(new Date(), 1), end: addDays(new Date(), 5) },
            { start: addDays(new Date(), 10), end: addDays(new Date(), 30) },
          ]}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          closeOnScroll={true}
          placeholderText="예약 날짜 선택"
          isClearable={true}
          locale={ko}
          disabledKeyboardNavigation
        />
        가격 : {price >= 0 && price}
      </Div>
    </>
  );
}

const Div = styled.div`
  font-display: row;
  justify-content: space-between;
  align-items: center;
  width: 272px;
`;

const Button = styled.div`
  width: 200px;
  background-color: ${(props) => props.theme.pointColor};
  cursor: pointer;
`;
