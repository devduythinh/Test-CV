"use client";

// import { createContext, useContext, useState, useEffect } from "react";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [currentLang, setCurrentLang] = useState("en");
//   const [textData, setTextData] = useState(null);

//   const fetchTextData = async (langCode) => {
//     try {
//       const response = await fetch(
//         `https://api.test.soa-dev.net/api/v1/pages?lang=${langCode}`
//       );
//       const data = await response.json();
//       setTextData(data);
//     } catch (error) {
//       console.error("Error fetching text data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTextData(currentLang);
//   }, [currentLang]);

//   return (
//     <LanguageContext.Provider value={{ currentLang, setCurrentLang, textData }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Mặc định tiếng Anh
  const [content, setContent] = useState(null);

  // Lấy ngôn ngữ từ localStorage khi load trang
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  // Gọi API khi ngôn ngữ thay đổi
  useEffect(() => {
    localStorage.setItem("language", language); // Lưu vào localStorage
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          `https://api.test.soa-dev.net/api/v1/pages?lang=${language}`
        );
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };
    fetchContent();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
