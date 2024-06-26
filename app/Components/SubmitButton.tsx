"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = { pending: false };

  //   useFormStatus();`

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 float-right h-[3rem] w-[8rem] bg-primary hover:bg-hover-primary  text-white/80  rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs  transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
