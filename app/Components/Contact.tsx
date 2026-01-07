'use client';

import { useSectionInView } from '@/lib/customHooks';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

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
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a
          className="underline"
          href="mailto:Varipaul@gmail.com"
        >
          Varipaul@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-2xl px-4">
        <a
          href="mailto:Varipaul@gmail.com"
          className="w-full sm:w-1/2 bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 dark:bg-white/10 dark:hover:bg-white/20 p-6 rounded-2xl border border-black/5 flex flex-col items-center justify-center gap-3 transition-all group hover:scale-[1.02]"
        >
          <div className="bg-white dark:bg-white/10 p-4 rounded-full text-2xl shadow-sm group-hover:scale-110 transition">
            <MdOutlineEmail />
          </div>
          <div className="text-lg font-medium">
            Email Me
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Varipaul@gmail.com
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/varinder-pal-singh-4896b743/"
          target="_blank"
          className="w-full sm:w-1/2 bg-gray-100/50 backdrop-blur-sm hover:bg-gray-200/50 dark:bg-white/10 dark:hover:bg-white/20 p-6 rounded-2xl border border-black/5 flex flex-col items-center justify-center gap-3 transition-all group hover:scale-[1.02]"
        >
          <div className="bg-white dark:bg-white/10 p-4 rounded-full text-2xl shadow-sm text-[#0077b5] group-hover:scale-110 transition">
            <BsLinkedin />
          </div>
          <div className="text-lg font-medium">
            LinkedIn
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Connect professionally
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
