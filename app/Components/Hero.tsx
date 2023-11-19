import React from "react";
import Projects from "./Projects";
import ContactUs from "./Contactus";

const Hero = () => {
  return (
	<>
    <section id='home-section' className="hero pt-14 bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] min-h-[700px]">
		<div className="container min-h-800 ">
		<div className="text-black">
        <p>Hello, my name is</p>
		<div className='flex flex-row gap-4'>
		<h1 className="text-xxl md:text-5xl font-black leading-none pb-4 md:pb-8">Varinder Pal Singh</h1>
		<span className="hidden md:block text-5xl leading-none">👋</span>
		</div>
		<p className="mt-[100px]">
		I am  &nbsp;
		<span className="font-bold text-blue-600">Full-stack Developer  &nbsp;</span>
		based in India, skilled at crafting websites and applications using React, Next, JavaScript, TypeScript, Express and MongoDB, though I am very capable of learning new skills fast and happy to work in any environment.
		<br />
		<br />
		My greatest strengths are in Front End. I have excellent commercial experience in this area, with a keen interest to expand my skillset in a diverse range of technologies.
		</p>
      </div>
		</div>
      
    </section>
<Projects />
<ContactUs />
	</>
  );
};

export default Hero;
