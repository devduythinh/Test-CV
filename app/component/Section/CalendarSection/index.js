import Calendar from "./Calendar";
import BookingForm from "./BookingForm";
import Title from "../../Atomic/Title";

export default function CalendarSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col gap-10">
        <Title title="Nos activités" />
        <Calendar />
      </div>
    </div>
  );
}
