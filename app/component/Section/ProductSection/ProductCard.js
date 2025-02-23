import Image from "next/image";
import ImageFood1 from "@/public/images/food-1.svg";
import ImageFood2 from "@/public/images/food-2.svg";
import ImageFood3 from "@/public/images/food-3.svg";
import Button from "../../Atomic/Button";
import DetailIcon from "@/public/icons/detail.svg";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

export default function ProductCard() {
  const { content } = useLanguage();
  const cases = _get(content, "[0].bloc_1.cases", []);

  const cards = [
    {
      image: ImageFood1,
      title: "Case titre",
      subtitle: "Case sous titre",
      text: "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
      buttonText: "Forfait 1",
      alt: "Various citrus fruits arranged on a wooden board",
    },
    {
      image: ImageFood2,
      title: "Case titre",
      subtitle: "Case sous titre",
      text: "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
      buttonText: "Forfait 2",
      alt: "Colorful smoothie with fruits and garnish",
    },
    {
      image: ImageFood3,
      title: "Case titre",
      subtitle: "Case sous titre",
      text: "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
      buttonText: "Forfait 3",
      alt: "Fresh lemons on a white background",
    },
  ];

  return (
    <div className="container mx-auto h-full pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {cases.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden  transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-64">
              <Image
                src={cards[index].image}
                alt={cards[index].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="pt-5">
              <div className="space-y-2">
                <h3 className="text-exploreBg text-xs sm:text-sm font-medium">
                  {card.category}
                </h3>
                <h2 className="text-2xl font-medium text-headerBg">
                  {card.tagline}
                </h2>
                <p className="text-productText/80 line-clamp-2">
                  {card.description}
                </p>
              </div>
              <Button
                type="activity"
                className="rounded-full px-4 pt-[10px] mt-5 !font-medium"
                iconAfter={
                  <Image src={DetailIcon} alt="Detail" width={14} height={14} />
                }
              >
                {card.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
