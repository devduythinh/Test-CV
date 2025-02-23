import Image from "next/image";
import Link from "next/link";

import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Youtube from "@/public/icons/youtube.svg";

import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

export default function HeroSection() {
  const { content } = useLanguage();
  const title = _get(content, "[0].bloc_6.title", "");
  const subtitle = _get(content, "[0].bloc_6.subtitle", "");
  const text = _get(content, "[0].bloc_6.text", "");
  const button = _get(content, "[0].bloc_6.button", "");
  const phone = _get(content, "[0].footer.address.phone", "");
  const address = _get(content, "[0].footer.address.location", "");
  const nameShop = _get(content, "[0].footer.address.name", "");
  const listLink1 = [..._get(content, "[0].footer.links", [])].slice(0, 3);
  const listLink2 = [..._get(content, "[0].footer.links", [])].slice(3, 6);
  const listLink3 = [..._get(content, "[0].footer.links", [])].slice(6, 8);
  console.log(listLink1, listLink2, listLink3);
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className=" bg-gray-200 bg-linear-to-b from-white to-slate-50 bg-cover  bg-no-repeat relative h-[666px] flex flex-col items-center justify-center text-center px-4 bg-[url('/images/bg-footer-mb.png')] md::bg-[url('/images/bg-footer-md.png')] lg:bg-[url('/images/footer-image-2.png')] bg- bg-center">
        <div className="relative z-10 max-w-[647px] mx-auto">
          <h1 className="text-3xl md:text-[52px] font-bold text-activityText">
            {title}
          </h1>
          <h2 className="text-3xl md:text-[52px] leading-[60px] font-semibold mt-2 text-[#562C2C80]/50 opacity-100">
            {subtitle}
          </h2>
          <p className="mt-6 text-activityText max-w-xl mx-auto text-2xl">
            {text}
          </p>
          <button className="mt-8 px-8 py-3 bg-[#F2542D] text-white rounded-full hover:bg-[#FF8B70] transition-colors ">
            {button}
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#582D2D] text-white relative z-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex justify-between flex-col md:flex-row gap-8 text-center md:text-left ">
            <div className="text-lg text-white leading-[24px]">
              <p>{nameShop}</p>
              <p>{phone}</p>
              <p>{address}</p>
            </div>

            {/* Activities */}
            <div>
              <ul className="space-y-2 text-white/60">
                {listLink1.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-gray-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Titles */}
            <div>
              <ul className="space-y-2 text-white/60">
                {listLink2.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-gray-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog & Contact */}
            <div>
              <ul className="space-y-2 text-white/60">
                {listLink3.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-gray-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center pb-10 text-center md:text-left">
            <p className="text-sm">
              &copy; {nameShop} {new Date().getFullYear()}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="bg-exploreBg p-2 rounded-full">
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-exploreBg p-2 rounded-full">
                <Image src={Instagram} alt="Instagram" width={24} height={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-exploreBg p-2 rounded-full">
                <Image src={Youtube} alt="Youtube" width={24} height={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
