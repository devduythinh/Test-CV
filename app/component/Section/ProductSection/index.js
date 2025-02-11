import Title from "../../Atomic/Title";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <div className="h-full w-full bg-white py-8 ">
      <div className="max-w-[1240px] mx-auto px-4">
        <Title title="TITRE" />
        <h3 className=" w-full text-center text-sm font-medium text-gray-600 pb-5 sm:pb-8">
          Sous titre
        </h3>
        <ProductCard />
      </div>
    </div>
  );
}
