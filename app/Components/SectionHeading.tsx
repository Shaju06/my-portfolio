import React, { FC } from "react";

type SectionHeadingProps = {
  children: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h1 className="text-[24px] border-b-4 border-text-color text-text-color inline-block pb-1 mb-20">
      {children}
    </h1>
  );
};
export default SectionHeading;
