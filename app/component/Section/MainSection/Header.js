"use client";

import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@/public/icons/menu.svg";
import MountainIcon from "@/public/icons/mountain.svg";
import FishIcon from "@/public/icons/fish.svg";
import TargetIcon from "@/public/icons/target.svg";
import ContactIcon from "@/public/icons/contact.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Atomic/Button";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

const Header = () => {
  const menuRef = useRef(null);

  const { language, setLanguage, content } = useLanguage();
  console.log("content", content);

  const [isOpen, setIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState("1");

  const handleMenuClick = (id) => {
    setMenuSelected(id);
    setIsOpen(false);
  };

  const listMenu = _get(content, "[0].head_menu", [])
    .slice(0, -1)
    .map((item, index) => ({
      title: item,
      href: "#",
      id: index,
    }));

  const textContact =
    _get(content, "[0].head_menu", []).length > 0
      ? _get(content, "[0].head_menu", [])[
          _get(content, "[0].head_menu", []).length - 1
        ]
      : "";

  console.log("textContact", textContact);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className=" bg-headerBg w-full fixed top-0 left-0 right-0 z-50 "
    >
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-8 max-w-[1240px]">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            Logo sample
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          <div className="md:flex gap-5 hidden">
            <Button className="!px-0">
              <Image src={MountainIcon} alt="Mountain" width={24} height={24} />
            </Button>
            <Button className="!px-0">
              <Image src={FishIcon} alt="Fish" width={24} height={24} />
            </Button>
            <Button className="!px-0">
              <Image src={TargetIcon} alt="Target" width={24} height={24} />
            </Button>
            <Button
              type="explore"
              className="rounded-full px-4 py-[10px] Poppins"
              iconAfter={
                <Image src={ContactIcon} alt="Contact" width={14} height={14} />
              }
            >
              <p className="sm:hidden lg:block">{textContact}</p>
            </Button>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={MenuIcon} alt="Menu" width={24} height={24} />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 lg"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-6 ">
            {listMenu.map((item, index) => (
              <li key={index}>
                <button
                  className={`block py-2 px-3 md:p-0 text-white dark:text-white`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${isOpen ? "block sm:hidden" : "hidden"} w-full`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 ">
            {listMenu.map((item, index) => (
              <li key={index}>
                <button
                  className={`block py-2 px-3 w-full text-left text-white dark:text-white   ${
                    menuSelected === item.id ? "bg-headerBg/70  rounded-lg" : ""
                  } `}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
            <li className="flex flex-col gap-2 ">
              <div className="border-t border-gray-100 pt-4 w-full max-w-[90%] mx-auto"></div>
            </li>
            <li className="flex flex-col gap-2">
              <Button
                type="explore"
                className="rounded-full px-4 py-[10px] w-full"
                iconAfter={
                  <Image
                    src={ContactIcon}
                    alt="Contact"
                    width={14}
                    height={14}
                  />
                }
              >
                <p className="sm:hidden lg:block text-white">{textContact}</p>
              </Button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
