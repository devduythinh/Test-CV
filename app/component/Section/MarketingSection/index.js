import Image from "next/image";
import MarketingImage from "@/public/images/marketing.svg";

// Icon
import ProtectIcon from "@/public/icons/protect.svg";
import RespectIcon from "@/public/icons/respect.svg";
import DiversityIcon from "@/public/icons/diversity.svg";
import PersonalizationIcon from "@/public/icons/personalization.svg";
import AppeaseIcon from "@/public/icons/appease.svg";

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
  return (
    <section className="bg-white py-16">
      <div className="mx-auto  max-w-[1240px] px-4 ">
        <div className=" grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 hidden md:grid">
          <div className="hidden sm:block">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="block text-[#FF6B50]">
                DES EXPÉRIENCES INOUBLIABLES
              </span>
              <span className="block text-[#FFA088] mt-2">
                LOREM IPSUM TRUC
              </span>
            </h2>
            <div className="flex gap-12 mt-16">
              <div className="w-20 ">
                <div className="w-20 border border-[#BBBBBB] mt-3"></div>
              </div>
              <div className="flex-1">
                <h3 className=" text-2xl font-semibold text-activityText">
                  À Propos De BASIC
                </h3>
              </div>
            </div>
            <p className="mt-6  text-lg leading-7 text-productText/80 lg:ml-32">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
              <span className="block text-[#FF6B50]">
                DES EXPÉRIENCES INOUBLIABLES
              </span>
              <span className="block text-[#FFA088] mt-2">
                LOREM IPSUM TRUC
              </span>
            </h2>
            <div className="mt-8">
              <h3 className=" text-2xl font-semibold text-activityText border-l-2 border-[#BBBBBB] pl-2">
                À Propos De BASIC
              </h3>
              <p className="mt-2  text-lg leading-7 text-productText/80">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap flex-row gap-2 justify-center items-center sm:grid grid-cols-2 md:gap-8 md:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.name} className="text-center basis-[40%] ">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0E9594]">
                  <Image
                    src={feature.icon}
                    alt={feature.name}
                    width={27}
                    height={27}
                  />
                </div>
                <h3 className="mt-3 text-2xl font-medium text-activityText">
                  {feature.name}
                </h3>
                <p className="mt-2 text-lg text-productText/80">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
