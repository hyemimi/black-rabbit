import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "tui-calendar/dist/tui-calendar.css";
import { Title } from "@/components/detail/Seller";

import { forwardRef, useRef, useState, useCallback } from "react";
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

CalendarWithForwardedRef.displayName = "CalendarWithForwardedRef";

const Calendar = () => {
  const cal = useRef(null);
  console.log(cal.current);
  const [currenVeiwMonth, setCurrentVeiwMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [currentVeiwYear, setCurrentVeiwYear] = useState<number>(
    new Date().getFullYear()
  );

  const schedule = [
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

  const onPrevSchedule = (e: any) => {
    const inst = cal?.current.getInstance();
    if (inst !== null) {
      inst.prev();
      setCurrentVeiwMonth((currenVeiwMonth % 12) - 1);
      if (currenVeiwMonth === 1) {
        setCurrentVeiwMonth(12);
        setCurrentVeiwYear(currentVeiwYear - 1);
      }
      if (currenVeiwMonth === 12) {
        setCurrentVeiwMonth(currenVeiwMonth - 1);
      }
    }
  };

  const onNextSchedule = (e: any) => {
    const inst = cal?.current.getInstance();
    if (inst !== null) {
      inst.next();
      if (Math.floor(currenVeiwMonth / 12) >= 1) {
        setCurrentVeiwYear(currentVeiwYear + 1);
      }
      setCurrentVeiwMonth((currenVeiwMonth % 12) + 1);
    }
  };

  const onClickSchedule = useCallback((e: any) => {
    const { calendarId, id } = e.schedule;
    const el = cal.current.calendarInst.getElement(id, calendarId);

    console.log(e, el.getBoundingClientRect());
  }, []);

  // const onBeforeCreateSchedule = (newEvent: any) => {
  //   const newSchedule = {
  //     ...event,
  //     id: schedules.length,
  //     title: newEvent.title,
  //     calendarId: newEvent.calendarId,
  //     category: newEvent.isAllDay ? "allday" : "time",
  //     attendees: newEvent.attendees,
  //     isVisible: true,
  //     start: newEvent.start,
  //     end: newEvent.end,

  //     isAllDay: newEvent.isAllDay,
  //     dueDateClass: "",
  //     location: newEvent.location,
  //     // raw: {
  //     //   class: event.raw["class"]
  //     // },
  //     state: newEvent.state,
  //     body: newEvent.body,
  //   };
  //   console.log(newEvent.date);
  //   cal.current.createSchedule(newSchedule);
  //   console.log(newSchedule);
  // };

  const onBeforeCreateSchedule = useCallback((scheduleData: any) => {
    console.log(scheduleData);

    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      raw: {
        class: scheduleData.raw["class"],
      },
      state: scheduleData.state,
    };

    cal.current.calendarInst.createSchedules([schedule]);
  }, []);

  // const onBeforeDeleteSchedule = "";
  // const onBeforeUpdateSchedule = "";
  const onBeforeDeleteSchedule = useCallback((res: any) => {
    console.log(res);

    const { id, calendarId } = res.schedule;

    cal.current.calendarInst.deleteSchedule(id, calendarId);
  }, []);

  const onBeforeUpdateSchedule = useCallback((e: any) => {
    console.log(e);

    const { schedule, changes } = e;

    cal.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId,
      changes
    );
  }, []);
  const calendars = [
    {
      id: "1",
      name: "RENTAL",
      backgroundColor: "#B6DCBE",
      borderColor: "green",
    },
    {
      id: "2",
      name: "FIX",
      backgroundColor: "#cacaf6",
      borderColor: "#204ac8",
    },
  ];

  return (
    <>
      <StyledDiv>
        <H1>
          {currentVeiwYear}년 {currenVeiwMonth}월
        </H1>
        <HeaderDiv>
          <MonthButton type="button" onClick={onPrevSchedule}>
            이전달
          </MonthButton>
          <MonthButton type="button" onClick={onNextSchedule}>
            다음달
          </MonthButton>
        </HeaderDiv>

        <CalendarWithForwardedRef
          ref={cal}
          view="month"
          calendars={calendars}
          useFormPopup={true}
          useCreationPopup={true}
          useDetailPopup={true}
          onBeforeCreateSchedule={onBeforeCreateSchedule}
          onBeforeDeleteSchedule={onBeforeDeleteSchedule}
          onBeforeUpdateSchedule={onBeforeUpdateSchedule}
          onClickSchedule={onClickSchedule}
          monthMoreTitleDate
          monthGrid
          events={schedule}
          template={{
            milestone(schedule: any) {
              return `<span style="color:#fff;background-color: ${schedule.bgColor};">${schedule.title}</span>`;
            },
            milestoneTitle() {
              return "Milestone";
            },
            allday(schedule: any) {
              return `<span style="color: green;">${schedule.title}</span>`;
            },
            alldayTitle() {
              return "All Day";
            },
            titlePlaceholder() {
              return "일련번호를 포함한 제목";
            },
            locationPlaceholder() {
              return "장소";
            },
            popupSave() {
              return "저장";
            },
            popupUpdate() {
              return "수정";
            },
            popupEdit() {
              return "수정";
            },
            popupDelete() {
              return "삭제";
            },
            monthGridHeaderExceed(hiddenEvents: any) {
              return `<span>${hiddenEvents} more</span>`;
            },

            monthGridFooter() {
              return "";
            },
            monthGridHeader(model: any) {
              const date = parseInt(model.date.split("-")[2], 10);

              return `<span>${date}</span>`;
            },
            monthMoreTitleDate(moreTitle: any) {
              const { date } = moreTitle;

              return `<span>${date}</span>`;
            },
          }}
        />
      </StyledDiv>
    </>
  );
};
export default Calendar;

const StyledDiv = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const HeaderDiv = styled.div`
  justify-contnent: right;
  text-align: right;
`;

const MonthButton = styled.button`
  background: #b6dcbe;
  border-radius: 5px;
  margin: 0 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

const H1 = styled.h1`
  width: 140px;
  font-size: 1.5rem;
  font-weight: 500;
  background: #d9d9d9;
  border-radius: 10px;
  margin-top: 1rem;
`;
