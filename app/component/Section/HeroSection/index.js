import Image from "next/image";
import Link from "next/link";

import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Youtube from "@/public/icons/youtube.svg";

import HeroImage from "@/public/images/image-hero.svg";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[1000px] flex flex-col items-center justify-center text-center px-4">
        <Image
          src={HeroImage}
          alt="Decorative fruits and flowers"
          fill
          className="object-cover rotate-360"
          priority
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-activityText">
            Explorez Avec BASIC
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-[#562C2C80]/50 opacity-100">
            Dès Aujourd'hui
          </h2>
          <p className="mt-6 text-activityText max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button className="mt-8 px-8 py-3 bg-[#FF6B50] text-white rounded-full hover:bg-[#FF8B70] transition-colors ">
            Explorer
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#582D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold mb-4">BASIC</h3>
              <p>(514) 904-6789</p>
              <p>Quebec, 3100 Boulevard de la Côte-Vertu</p>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-bold mb-4">Activités</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Activité 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Activité 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Activité 3
                  </Link>
                </li>
              </ul>
            </div>

            {/* Titles */}
            <div>
              <h3 className="font-bold mb-4">Titres</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Titre 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Titre 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Titre 3
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog & Contact */}
            <div>
              <h3 className="font-bold mb-4">Blog</h3>
              <Link href="#" className="hover:text-gray-300">
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center pb-10">
            <p className="text-sm">&copy; BASIC 2024</p>
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
