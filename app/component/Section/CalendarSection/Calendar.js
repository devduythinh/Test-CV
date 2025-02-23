"use client";

import { useState, useEffect } from "react";
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
import { enUS } from "date-fns/locale";
import BookingForm from "./BookingForm";

import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Image from "next/image";
import { useLanguage } from "../../Context/LanguageContext";

export default function Calendar() {
  const { content, language } = useLanguage();
  console.log("language", language);

  const [currentMonth, setCurrentMonth] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [days, setDays] = useState([]);

  const textBusy = language !== "en" ? "Occupé" : "Busy";
  const textFree = language !== "en" ? "Libre" : "Free";

  useEffect(() => {
    setCurrentMonth(new Date());
  }, []);

  useEffect(() => {
    if (!currentMonth) return;

    const calendarStart = startOfWeek(startOfMonth(currentMonth), {
      weekStartsOn: 1,
    });
    const calendarEnd = endOfWeek(addWeeks(calendarStart, 4), {
      weekStartsOn: 1,
    });

    setDays(
      eachDayOfInterval({ start: calendarStart, end: calendarEnd }).map(
        (date) => ({
          date,
          status: isSameMonth(date, currentMonth) ? textFree : null,
          content: null,
        })
      )
    );
  }, [currentMonth]);

  const nextMonth = () =>
    setCurrentMonth((prev) => (prev ? addMonths(prev, 1) : null));
  const prevMonth = () =>
    setCurrentMonth((prev) => (prev ? subMonths(prev, 1) : null));

  const toggleDate = ({ date, content }) => {
    setSelectedDates({ date, content });
  };

  const handleSubmitInfoDate = (data, type = "submit") => {
    if (type === "clear") {
      const listDate = [...days].map(({ date, status, content }) => {
        if (date.getTime() === data.date.getTime()) {
          return { date, status: textFree, content: null };
        }
        return { date, status, content };
      });
      setDays(listDate);
      return;
    }
    const listDate = [...days].map(({ date, status, content }) => {
      if (date.getTime() === data.date.getTime()) {
        console.log("data", data);
        if (
          data.content.message === "<p></p>" &&
          !data.content.name &&
          !data.content.email
        ) {
          return { date, status: textFree, content: null };
        } else {
          return { date, status: textBusy, content: data.content };
        }
      }
      return { date, status, content };
    });
    setDays(listDate);
  };

  const getWeekDays = () => {
    const formatter = new Intl.DateTimeFormat(
      language !== "en" ? "fr-FR" : "en-US",
      { weekday: "short" }
    );
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(2024, 0, i + 1);
      const day = formatter.format(date).replace(".", "");
      return day.charAt(0).toUpperCase() + day.slice(1);
    });
  };

  if (!currentMonth) return null; // Tránh lỗi render sai trên server

  return (
    <div className="w-full">
      <div className="w-full border border-calendarBorder rounded-xl shadow-[#F2542D1A]/10 shadow-lg p-6">
        <div className="mb-8 flex items-center justify-center gap-4">
          <button onClick={prevMonth} className="p-2">
            <Image src={ArrowLeft} alt="Arrow Left" width={24} height={24} />
          </button>
          <h2 className="text-lg font-semibold text-activityText">
            {format(currentMonth, "MMM yyyy", { locale: enUS })}
          </h2>
          <button onClick={nextMonth} className="p-2">
            <Image src={ArrowRight} alt="Arrow Right" width={24} height={24} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {getWeekDays().map((day) => (
            <div
              key={day}
              className="text-center font-semibold py-2 text-activityText"
            >
              {day}
            </div>
          ))}

          {days.map(({ date, status, content }) => {
            const isSelected = selectedDates?.date === date;
            const isCurrentMonth = isSameMonth(date, currentMonth);
            const isLibre = status === textBusy;

            return (
              <button
                key={date.toString()}
                onClick={() => isCurrentMonth && toggleDate({ date, content })}
                disabled={!isCurrentMonth}
                className={`h-9 sm:h-[72px] rounded-lg border p-2 transition-colors
                  ${
                    isLibre || isSelected
                      ? "bg-calendarBg border-exploreBg text-productText"
                      : "bg-white"
                  }
                  ${
                    !isLibre && !isSelected
                      ? "border-gray-100 text-[#999999]"
                      : ""
                  }
                  ${!isCurrentMonth ? "bg-[#F5F5F5] text-[#CCCCCC]" : ""}
                `}
              >
                <span className="text-sm sm:text-xl text-center font-semibold">
                  {format(date, "d")}
                </span>
                {status && isCurrentMonth && (
                  <span
                    className={`text-lg sm:block hidden font-normal
                    ${
                      status === textBusy ? "text-exploreBg" : "text-[#AAAAAA]"
                    }`}
                  >
                    {status}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {selectedDates ? (
        <BookingForm dateInfo={selectedDates} onSubmit={handleSubmitInfoDate} />
      ) : null}
    </div>
  );
}
