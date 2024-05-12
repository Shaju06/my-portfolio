"use client";

import React from "react";
import { motion } from "framer-motion";
import SubmitBtn from "./SubmitButton";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/customHooks";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact-us"
      className="mb-20 sm:mb-28  text-center"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact us</SectionHeading>

      <p className="mt-1 text-black/80 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          varipaul@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="flex flex-col justify-center mt-10"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="text"
          className="h-14 px-4 rounded-lg border-2 border-primary/70  outline-light-Primary dark:outline-dark-Primary transition-all focus:-outline-offset-1 "
          placeholder="Type subject"
        />
        <textarea
          className="h-52 my-3 rounded-lg border-2 border-primary/70   p-4  outline-light-Primary dark:outline-dark-Primary transition-all focus:-outline-offset-1"
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
