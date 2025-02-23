"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import ListItem from "@tiptap/extension-list-item";
import Text from "@tiptap/extension-text";
import "./styleTiptap.scss";

import Image from "next/image";
import Button from "../../Atomic/Button";

// Import icons
import Paperclip from "@/public/icons/paperClip.svg";
import SendIcon from "@/public/icons/send.svg";
import BoldIcon from "@/public/icons/TextB.svg";
import ItalicIcon from "@/public/icons/TextI.svg";
import UnderlineIcon from "@/public/icons/TextUnderline.svg";
import HighLightIcon from "@/public/icons/TextHighlight.svg";
import ListBulletIcon from "@/public/icons/ListBullets.svg";
import ListNumberIcon from "@/public/icons/ListNumber.svg";
import TextAlignLeftIcon from "@/public/icons/TextAlignLeft.svg";
import TextAlignCenterIcon from "@/public/icons/TextAlignCenter.svg";
import TextAlignRightIcon from "@/public/icons/TextAlignRight.svg";
import CaretUpDownIcon from "@/public/icons/CaretUpDown.svg";
import { FontSize } from "./ExtensionCustom/FontSize";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../Context/LanguageContext";
import _get from "lodash/get";

const fontSizes = [
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "36",
  "48",
  "60",
  "72",
];

const InputStyled = ({ ...props }) => {
  return (
    <input
      type="text"
      className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-red-500 shadow-[#F2542D1A]/10 shadow-lg rounded-full"
      {...props}
    />
  );
};

export default function BookingForm({ onSubmit, dateInfo }) {
  const fileInputRef = useRef(null);
  const { content: contentLanguage } = useLanguage();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    file: null,
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      TextStyle,
      Underline,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      OrderedList,
      ListItem,
      Paragraph,
      Text,
      FontSize,
    ],
    content: "",
  });

  const handleFileChange = (e) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      // Kiểm tra định dạng file
      if (uploadedFile.type !== "application/pdf") {
        setFormInfo({ ...formInfo, file: null });
      } else {
        setFormInfo({ ...formInfo, file: uploadedFile });
      }
    }
  };

  const handleEditorAction = (event, action) => {
    event.preventDefault(); // Chặn reload trang

    if (!editor) return;

    switch (action) {
      case "bold":
        editor.chain().focus().toggleBold().run();
        break;
      case "italic":
        editor.chain().focus().toggleItalic().run();
        break;
      case "underline":
        editor.chain().focus().toggleUnderline().run();
        break;
      case "align-left":
        editor.chain().focus().setTextAlign("left").run();
        break;
      case "align-center":
        editor.chain().focus().setTextAlign("center").run();
        break;
      case "align-right":
        editor.chain().focus().setTextAlign("right").run();
        break;
      case "bullet-list":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "ordered-list":
        editor.chain().focus().toggleOrderedList().run();
        break;
      case "highlight":
        editor.chain().focus().toggleHighlight().run();
        break;
      case "clear":
        editor.chain().focus().clearContent().run();
        break;
      case "focus":
        editor.chain().focus().run();
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = editor?.getHTML();
    onSubmit({
      content: {
        name: formInfo.name,
        email: formInfo.email,
        message: content,
        file: formInfo.file,
      },
      date: dateInfo.date,
    });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFormInfo({
      name: "",
      email: "",
      file: null,
    });
    handleEditorAction(e, "clear");
    onSubmit(
      {
        content: {
          name: "",
          email: "",
          message: "",
          file: null,
        },
        date: dateInfo.date,
      },
      "clear"
    );
  };

  useEffect(() => {
    if (dateInfo) {
      setFormInfo({
        name: dateInfo?.content?.name || "",
        email: dateInfo?.content?.email || "",
        file: dateInfo?.content?.file || null,
      });
      if (editor) {
        editor.commands.setContent(dateInfo?.content?.message || "<p></p>");
      }
    }
  }, [dateInfo]);

  return (
    <form className="w-full py-10 space-y-4 text-activityText">
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">
            {_get(contentLanguage, "[0].bloc_2_2.btn_1[0]", "")}:
          </p>
        </div>
        <div className="flex-1">
          <InputStyled
            placeholder={_get(contentLanguage, "[0].bloc_2_2.btn_1[1]", "")}
            value={formInfo.name}
            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
          />
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">
            {_get(contentLanguage, "[0].bloc_2_2.btn_2[0]", "")}:
          </p>
        </div>
        <div className="flex-1">
          <InputStyled
            placeholder={_get(contentLanguage, "[0].bloc_2_2.btn_2[1]", "")}
            value={formInfo.email}
            onChange={(e) =>
              setFormInfo({ ...formInfo, email: e.target.value })
            }
            type="email"
          />
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">
            {_get(contentLanguage, "[0].bloc_2_2.btn_3", "")}:
          </p>
        </div>
        <div className="flex-1">
          <div className="border rounded-lg shadow-md bg-white text-black">
            {/* Thanh công cụ */}
            <div className="flex gap-1 border-b p-2 flex-wrap">
              {/* Dropdown chọn kích cỡ chữ */}
              <div className="relative text-toolColor border-r">
                <select
                  className="appearance-none p-2 pr-8 rounded font-bold text-base bg-white relative"
                  onChange={(e) => editor.commands.setFontSize(e.target.value)}
                >
                  {fontSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                {/* Icon custom */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Image
                    src={CaretUpDownIcon}
                    alt="caret"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              {/* Chữ đậm */}
              <button
                onClick={(e) => handleEditorAction(e, "bold")}
                className={`p-2 ${
                  editor?.isActive("bold") ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={BoldIcon}
                  alt="bold"
                  width={24}
                  height={24}
                />
              </button>

              {/* Chữ nghiêng */}
              <button
                onClick={(e) => handleEditorAction(e, "italic")}
                className={`p-2 ${
                  editor?.isActive("italic") ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={ItalicIcon}
                  alt="italic"
                  width={24}
                  height={24}
                />
              </button>

              {/* Chữ gạch chân */}
              <button
                onClick={(e) => handleEditorAction(e, "underline")}
                className={`p-2 ${
                  editor?.isActive("underline") ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={UnderlineIcon}
                  alt="underline"
                  width={24}
                  height={24}
                />
              </button>

              {/* Highlight */}
              <button
                onClick={(e) => handleEditorAction(e, "highlight")}
                className={`p-2 ${
                  editor?.isActive("highlight") ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={HighLightIcon}
                  alt="highlight"
                  width={24}
                  height={24}
                />
              </button>

              {/* Căn trái */}
              <button
                onClick={(e) => handleEditorAction(e, "align-left")}
                className={`p-2 ${
                  editor?.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={TextAlignLeftIcon}
                  alt="align-left"
                  width={24}
                  height={24}
                />
              </button>

              {/* Căn giữa */}
              <button
                onClick={(e) => handleEditorAction(e, "align-center")}
                className={`p-2 ${
                  editor?.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={TextAlignCenterIcon}
                  alt="align-center"
                  width={24}
                  height={24}
                />
              </button>

              {/* Căn phải */}
              <button
                onClick={(e) => handleEditorAction(e, "align-right")}
                className={`p-2 border-r ${
                  editor?.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={TextAlignRightIcon}
                  alt="align-right"
                  width={24}
                  height={24}
                />
              </button>

              {/* Danh sách dấu chấm */}
              <button
                onClick={(e) => handleEditorAction(e, "bullet-list")}
                className={`p-2 ${
                  editor?.isActive("bulletList") ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={ListBulletIcon}
                  alt="bullet-list"
                  width={24}
                  height={24}
                />
              </button>

              {/* Danh sách số */}
              <button
                onClick={(e) => handleEditorAction(e, "ordered-list")}
                className={`p-2 ${
                  editor?.isActive("orderedList") ? "bg-gray-200" : ""
                }`}
              >
                <Image
                  className="w-6 h-6"
                  src={ListNumberIcon}
                  alt="number-list"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            {/* Nội dung soạn thảo */}
            <EditorContent
              editor={editor}
              className="min-h-[150px] p-2 rounded outline-none border-none focus:ring-0"
              onClick={(e) => handleEditorAction(e, "focus")}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">
            {_get(contentLanguage, "[0].bloc_2_2.btn_4[0]", "")}:
          </p>
        </div>
        <div className="flex-1 flex gap-2 items-center flex-wrap cursor-pointer ">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
            ref={fileInputRef}
          />
          <div
            className="flex gap-2 items-center"
            onClick={() => fileInputRef.current.click()}
          >
            <Image
              src={Paperclip}
              alt="paperclip"
              width={23}
              height={26}
              className="w-5 h-5"
            />
            <p className="text-xl font-medium text-[#1E88F9] ">
              {formInfo.file
                ? formInfo.file.name
                : _get(contentLanguage, "[0].bloc_2_2.btn_4[1]", "")}
            </p>
          </div>
          <p className="text-lg text-[#999999] ">
            *{_get(contentLanguage, "[0].bloc_2_2.btn_4[2]", "")}
          </p>
        </div>
      </div>

      <div className="flex sm:justify-end justify-between gap-4">
        <Button
          type="activity"
          className="rounded-full max-w-[200px] w-full"
          onClick={handleClear}
        >
          {_get(contentLanguage, "[0].bloc_2_2.btn_5", "")}
        </Button>
        <Button
          type="explore"
          className="rounded-full max-w-[200px] w-full"
          iconAfter={<Image src={SendIcon} alt="send" width={24} height={24} />}
          onClick={handleSubmit}
        >
          {_get(contentLanguage, "[0].bloc_2_2.btn_6", "")}
        </Button>
      </div>
    </form>
  );
}
