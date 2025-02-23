import Title from "../../Atomic/Title";
import { useLanguage } from "../../Context/LanguageContext";
import ProductCard from "./ProductCard";
import _get from "lodash/get";

export default function ProductSection() {
  const { content } = useLanguage();
  const title = _get(content, "[0].bloc_1.title", "");
  const subtitle = _get(content, "[0].bloc_1.subtitle", "");
  return (
    <div className="h-full w-full bg-white pt-[20px] pb-4 ">
      <div className="max-w-[1240px] mx-auto px-4">
        <Title title={title} />
        <h3 className=" w-full text-center text-sm font-medium text-gray-600 pb-5 sm:pb-8">
          {subtitle}
        </h3>
        <ProductCard />
      </div>
    </div>
  );
}
