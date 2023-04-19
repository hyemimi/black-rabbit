import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { forwardRef, useRef } from "react";
// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import styled from "styled-components";
import dynamic from "next/dynamic";

const TuiCalendar = dynamic(() => import("./TuiCalendarWrapper"), {
  ssr: false,
});

const CalendarWithForwardedRef = forwardRef((props: any, ref) => (
  <TuiCalendar {...props} forwardedRef={ref} />
));

const UpdateItemPlan = () => {
  const cal = useRef(null);
  // const calendars = "";
  const schedules = "";
  const onClickSchedule = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const onBeforeCreateSchedule = "";
  const onBeforeDeleteSchedule = "";
  const onBeforeUpdateSchedule = "";
  const initialEvents = [
    //여기에 일정
    {
      id: "1",
      calendarId: "1",
      title: "렌탈중",
      category: "time",
      start: "2023-03-02T12:00:00",
      end: "2023-03-04T13:30:00",
    },
    {
      id: "2",
      calendarId: "2",
      title: "수리중",
      category: "time",
      start: "2023-03-28T15:00:00",
      end: "2023-03-30T15:30:00",
    },
  ];
  const calendars = [
    {
      id: "1",
      name: "RENTAL",
      backgroundColor: "skyblue",
      borderColor: "blue",
    },
    {
      id: "2",
      name: "FIX",
      backgroundColor: "lightgreen",
      borderColor: "green",
    },
  ];

  return (
    <>
      <StyledDiv>
        <CalendarWithForwardedRef
          view="month"
          calendars={calendars}
          useCreationPopup
          useDetailPopup
          schedules={calendars}
          onBeforeCreateSchedule={onBeforeCreateSchedule}
          onBeforeDeleteSchedule={onBeforeDeleteSchedule}
          onBeforeUpdateSchedule={onBeforeUpdateSchedule}
          onClickSchedule={onClickSchedule}
          events={initialEvents}
          ref={cal}
        />
        <button>next</button>
      </StyledDiv>
    </>
  );
};
export default UpdateItemPlan;

const StyledDiv = styled.div`
  width: 80%;
  margin: 1.5rem 1rem 3rem 10rem;
  justify-content: right;
  text-align: center;
`;
