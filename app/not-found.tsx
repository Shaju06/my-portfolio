import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center align-center flex-col space-y-3 text-indigo-500">
      <h1 className="font-bold font-16">404 | Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
