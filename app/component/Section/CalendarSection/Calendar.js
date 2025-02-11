"use client";

import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  eachDayOfInterval,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  addWeeks,
} from "date-fns";
import { fr, enUS } from "date-fns/locale";
import BookingForm from "./BookingForm";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)); // July 2025
  const calendarStart = startOfWeek(startOfMonth(currentMonth), {
    weekStartsOn: 1,
  });

  const calendarEnd = endOfWeek(addWeeks(calendarStart, 4), {
    weekStartsOn: 1,
  });

  const [selectedDates, setSelectedDates] = useState([]);
  const [days, setDays] = useState(
    eachDayOfInterval({
      start: calendarStart,
      end: calendarEnd,
    }).map((date) => ({
      date,
      status: isSameMonth(date, currentMonth)
        ? Math.random() > 0.5
          ? "libre"
          : "occupé"
        : null,
    }))
  );

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const toggleDate = (date) => {
    if (selectedDates.some((d) => d.getTime() === date.getTime())) {
      setSelectedDates(
        selectedDates.filter((d) => d.getTime() !== date.getTime())
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full border border-calendarBorder rounded-xl p-4 shadow-[#F2542D1A]/10 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={prevMonth} className="p-2">
            {/* <ChevronLeft className="h-5 w-5" /> */}
          </button>
          <h2 className="text-lg font-semibold text-activityText">
            {format(currentMonth, "MMM yyyy", { locale: enUS })}
          </h2>
          <button onClick={nextMonth} className="p-2">
            {/* <ChevronRight className="h-5 w-5" /> */}
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold py-2 text-activityText"
            >
              {day}
            </div>
          ))}

          {days.map(({ date, status }) => {
            const isSelected = selectedDates.some(
              (d) => d.getTime() === date.getTime()
            );
            const isCurrentMonth = isSameMonth(date, currentMonth);
            const isDisabled = !isCurrentMonth;
            const isLibre = status === "libre";
            const isOccupe = status === "occupé";
            const isOtherMonth = !isCurrentMonth;

            const buttonClasses = `
            h-9 sm:h-[72px] rounded-lg border p-2 relative transition-colors
            ${
              isLibre
                ? "bg-calendarBg border-exploreBg text-productText"
                : "bg-white"
            }
            ${isOccupe ? "border-gray-100 text-[#999999]" : ""}
            ${isOtherMonth ? "bg-[#F5F5F5] text-[#CCCCCC]" : ""}
          `;
            return (
              <button
                key={date.toString()}
                onClick={() =>
                  isCurrentMonth && status === "libre" && toggleDate(date)
                }
                disabled={isDisabled}
                className={buttonClasses}
              >
                <span className="text-sm sm:text-xl text-center font-semibold ">
                  {format(date, "d")}
                </span>
                {status && isCurrentMonth && (
                  <span
                    className={`
                  text-lg sm:block hidden font-normal
                  ${status === "libre" ? "text-exploreBg" : "text-[#AAAAAA]"}
                `}
                  >
                    {status}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
