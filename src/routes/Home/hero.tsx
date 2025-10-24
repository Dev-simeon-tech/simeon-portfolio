import { useEffect, useRef } from "react";
import { useSectionNav } from "../../context/sectionNav";
import LogoLoopContainer from "../../components/ui/logoLoopContainer";
import { motion } from "motion/react";
import Typed from "typed.js";

import { display } from "../../lib/motionOneVariants";

const Hero = () => {
  const { sectionRefs } = useSectionNav();
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 60,
      onComplete: (self) => {
        if (self.cursor) {
          self.cursor.style.display = "none";
        }
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <motion.main
      variants={display}
      initial='hidden'
      viewport={{ margin: "-300px" }}
      whileInView={display.visible}
      ref={(el) => {
        sectionRefs.current.home = el;
      }}
      id='home'
      className='pt-15 flex min-h-[80vh]  flex-col gap-4 lg:pt-25'
    >
      <h2 className='text-3xl lg:text-5xl'>Hello 👋,</h2>
      <h1 className='text-4xl md:text-6xl font-neue-montreal-medium'>
        I’m Simeon, a <br className='lg:hidden' />
        <span className='text-primary-green' ref={textRef}></span>
      </h1>
      <p className='lg:max-w-[80ch] xl:py-6 text-xl'>
        I’m focused on building fast, responsive, and accessible web
        applications. My main stack is TypeScript/JavaScript with React, where I
        craft reusable components and seamless user interfaces. I enjoy turning
        complex ideas into clean, intuitive digital experiences that feel
        effortless to use.
      </p>
      <a href='#projects'>
        <button className='border-2 hero-btn overflow-hidden  hover:text-neutral-100 transition-colors duration-300 mt-2 border-primary-green relative py-3 px-4 w-fit rounded-3xl'>
          See Projects
        </button>
      </a>
      <LogoLoopContainer />
    </motion.main>
  );
};

export default Hero;
