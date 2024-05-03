"use client";

import React from "react";
import { motion } from "framer-motion";
import SubmitBtn from "./SubmitButton";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <motion.section
      id="contact-us"
      className="text-center mt-6 text-light-Accent dark:text-dark-Accent min-h-[500px]"
    >
      <SectionHeading>Contact us</SectionHeading>

      <p className="mt-1 text-black/80 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          varipaul@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col justify-center mt-10">
        <input
          type="text"
          className="h-14 px-4 rounded-lg   text-light-Accent dark:text-light-Accent outline-light-Primary bg-indigo-100   dark:outline-dark-Primary transition-all"
          placeholder="Type subject"
        />
        <textarea
          className="h-52 my-3 rounded-lg text-indigo-200 dark:text-light-Accent  p-4 bg-indigo-100  outline-light-Primary dark:outline-dark-Primary transition-all "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
