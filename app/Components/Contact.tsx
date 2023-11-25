"use client";

import React from "react";
import { motion } from "framer-motion";
import SubmitBtn from "./SubmitButton";

const Contact = () => {
  return (
    <motion.section
      id="contact-us"
      className="text-center mt-6 text-light-Accent dark:text-dark-Accent min-h-[500px]"
    >
      <h1 className="text-[24px] border-b-4 border-light-Primary dark:border-dark-Primary inline-block pb-1 mb-10">
        Contact us
      </h1>
      <p className="mt-1 text-light-Primary dark:text-dark-Primary">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col justify-center mt-10">
        <input
          type="text"
          className="h-14 px-4 rounded-lg   text-light-Accent dark:text-light-Accent outline-light-Primary dark:bg-dark-Accent dark:bg-opacity-80 dark:outline-dark-Primary transition-all"
          placeholder="Type subject"
        />
        <textarea
          className="h-52 my-3 rounded-lg text-light-Accent dark:text-light-Accent  p-4 dark:bg-dark-Accent dark:bg-opacity-80 outline-light-Primary dark:outline-dark-Primary transition-all "
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
