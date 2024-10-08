"use client";
import React from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "@/Context/Theme";

const ThemeModeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="theme-switch-button"
      className="fixed flex justify-center items-center bottom-6 w-12 h-12  right-6  rounded-full bg-primary transition-all  hover:scale-110 hover:text-white"
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "light" ? <MdOutlineWbSunny /> : <CiDark />}
    </button>
  );
};

export default ThemeModeSwitch;
