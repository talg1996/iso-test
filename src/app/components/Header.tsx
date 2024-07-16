// Header.tsx
"use client";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

export const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex flex-wrap justify-between items-center mx-2 my-2 px-4 py-6 rounded gap-5 bg-blue-100 dark:bg-blue-900 shadow-xl">
      <div className="flex items-center gap-5">
        <div className=" p-2 flex flex-wrap content-center  dark:bg-white/30 rounded">
          <Image
            src="/enercon.png"
            alt="Isolation Test"
            width={150}
            height={50}
          />
        </div>
        <h1 className="text-xl font-bold">Auto Tester Isolation Test</h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};
