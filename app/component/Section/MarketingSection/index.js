import Image from "next/image";
import MarketingImage from "@/public/images/marketing.svg";

// Icon
import ProtectIcon from "@/public/icons/protect.svg";
import RespectIcon from "@/public/icons/respect.svg";
import DiversityIcon from "@/public/icons/diversity.svg";
import PersonalizationIcon from "@/public/icons/personalization.svg";
import AppeaseIcon from "@/public/icons/appease.svg";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

const features = [
  {
    name: "Authenticité",
    subtitle: "Sous-titre",
    icon: ProtectIcon,
  },
  {
    name: "Respect",
    subtitle: "Sous-titre",
    icon: RespectIcon,
  },
  {
    name: "Diversité",
    subtitle: "Sous-titre",
    icon: DiversityIcon,
  },
  {
    name: "Personnalisation",
    subtitle: "Sous-titre",
    icon: PersonalizationIcon,
  },
  {
    name: "Confort",
    subtitle: "Sous-titre",
    icon: AppeaseIcon,
  },
];

export default function MarketingSection() {
  const { content } = useLanguage();
  const title = _get(content, "[0].bloc_4.title", "");
  const subtitle = _get(content, "[0].bloc_4.text_title", "");
  const subtitle2 = _get(content, "[0].bloc_4.subtitle", "");
  const text = _get(content, "[0].bloc_4.text", "");
  const pictos = _get(content, "[0].bloc_4.pictos", []);
  return (
    <section className="bg-white mt-10 md:mt-0 md:mb-[120px]">
      <div className="mx-auto  max-w-[1240px] px-4 sm:px-8 lg:px-0 py-10 md:py-0">
        <div className=" grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 hidden md:grid">
          <div className="hidden sm:block">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="block text-[#FF6B50]">{title}</span>
              <span className="block text-[#FFA088] mt-2">{subtitle}</span>
            </h2>
            <div className="flex gap-12 mt-[60px]">
              <div className="w-20 ">
                <div className="w-20 border border-[#BBBBBB] mt-3"></div>
              </div>
              <div className="flex-1">
                <h3 className=" text-2xl font-semibold text-activityText">
                  {subtitle2}
                </h3>
              </div>
            </div>
            <p className="mt-[20px]  text-lg leading-7 text-productText/80 lg:ml-32">
              {text}
            </p>
          </div>
          <div className="relative">
            <Image
              src={MarketingImage}
              alt="Ice cream cone"
              width={500}
              height={600}
              className="rounded-2xl w-full"
            />
          </div>
        </div>
        <div
          className="block md:hidden relative rounded-2xl py-8 px-4"
          style={{
            backgroundImage: `url('/images/marketing.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col py-4 px-3 bg-[#FFFFFF99] rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold tracking-tight ">
              <span className="block text-[#FF6B50]">{title}</span>
              <span className="block text-[#FFA088] mt-2">{subtitle}</span>
            </h2>
            <div className="mt-8">
              <h3 className=" text-2xl font-semibold text-activityText border-l-2 border-[#BBBBBB] pl-2">
                {subtitle2}
              </h3>
              <p className="mt-2  text-lg leading-7 text-productText/80">
                {text}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <div className="flex flex-wrap flex-row gap-2 justify-center items-center sm:grid grid-cols-2 md:gap-8 md:grid-cols-5">
            {pictos.map((feature, index) => (
              <div key={index} className="text-center basis-[40%] ">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0E9594]">
                  <Image
                    src={features[index].icon}
                    alt="product image"
                    width={27}
                    height={27}
                  />
                </div>
                <h3 className="mt-3 text-2xl font-medium text-activityText">
                  {feature.title}
                </h3>
                <p className="mt-2 text-lg text-productText/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
