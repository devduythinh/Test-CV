"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "../../Context/LanguageContext";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, textData } = useLanguage(); // Use context for language state and text data
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-10 right-4 z-50">
      <div className="relative ">
        {isOpen ? (
          <div
            className={`
          absolute bottom-full right-0 mb-2 w-48 
          rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5
          transition-all duration-200 ease-in-out
        `}
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                >
                  {lang.name}
                  {language === lang.code && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Main Button */}
        <button
          onClick={toggleDropdown}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-full
            text-white shadow-lg transition-all duration-200
            ${isOpen ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
          `}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe className="h-5 w-5" />
          <span className="text-sm font-medium">
            {languages.find((lang) => lang.code === language)?.name}
          </span>
        </button>
      </div>

      {/* Display fetched text data */}
      {textData && <div className="mt-4">{textData.content}</div>}
    </div>
  );
}
