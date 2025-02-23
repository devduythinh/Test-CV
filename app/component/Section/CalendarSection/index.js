import Calendar from "./Calendar";
import Title from "../../Atomic/Title";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

export default function CalendarSection() {
  const { content } = useLanguage();
  const title = _get(content, "[0].bloc_2.title", "");

  return (
    <div className="bg-white mt-[80px] md:mt-0 lg:mt-[40px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-0 flex flex-col gap-10">
        <Title title={title} />
        <Calendar />
      </div>
    </div>
  );
}
