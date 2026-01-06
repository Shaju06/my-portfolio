'use client';
import { useActiveLinkContext } from '@/Context/ActiveLinkContext';
import {
  useSectionInView,
  useTypingText,
} from '@/lib/customHooks';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaReact } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Hero = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useActiveLinkContext();
  const textArray = [
    'Frontend developer',
    'Backend developer',
    'Full-stack developer',
  ];
  const typingText = useTypingText(textArray);

  return (
    <>
      <section
        ref={ref}
        id="home-section"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <div className="absolute top-[-10rem] -z-10 right-[0rem] h-[20rem] w-[20rem] rounded-full blur-[5rem] sm:w-[40rem] dark:bg-primary/20 bg-blue-200/30 animate-blob mix-blend-multiply filter opacity-70"></div>
          <div className="absolute top-[10rem] -z-10 left-[-10rem] h-[20rem] w-[20rem] rounded-full blur-[5rem] sm:w-[40rem] dark:bg-purple-500/20 bg-purple-200/30 animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70"></div>

          <div className="relative w-full max-w-lg mb-12 overflow-hidden mask-linear-fade">
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-light-background to-transparent dark:from-dark-background z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-light-background to-transparent dark:from-dark-background z-10"></div>

            <motion.div
              className="flex gap-12 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-12 items-center text-4xl text-gray-400 dark:text-gray-500"
                >
                  <FaReact className="hover:text-[#61DAFB] transition duration-300" />
                  <span className="text-xl font-bold font-mono">
                    Next.js
                  </span>
                  <span className="text-xl font-bold font-mono">
                    Node.js
                  </span>
                  <FaGithubSquare className="hover:text-black dark:hover:text-white transition duration-300" />
                  <span className="text-xl font-bold font-mono">
                    MongoDB
                  </span>
                  <span className="text-xl font-bold font-mono">
                    Express
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">
            Hello, I&apos;m Varinder.
          </span>{' '}
          I&apos;m a{' '}
          <span className="font-bold">
            Full Stack Developer
          </span>{' '}
          with <span className="font-bold">6+ years</span>{' '}
          of experience. I enjoy building{' '}
          <span className="italic">sites & apps</span>. My
          focus is{' '}
          <span className="underline decoration-primary">
            Next.js & Node.js
          </span>
          .
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact-us"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{' '}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/cv.pdf"
            download
          >
            Download Resume{' '}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/varinder-pal-singh-4896b743/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Shaju06"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
