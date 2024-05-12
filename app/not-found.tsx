import React from "react";
import Link from "next/link";

import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center align-center flex-col space-y-3 text-primary">
      <h1 className="font-bold font-16 flex justify-center items-center gap-2">
        <TbError404 className="font-bold text-2xl " />| Not Found
      </h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
