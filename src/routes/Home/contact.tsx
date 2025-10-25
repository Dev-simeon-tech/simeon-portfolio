import { useSectionNav } from "../../context/sectionNav";
import { motion } from "motion/react";
import { display } from "../../lib/motionOneVariants";

import LinkedinIcon from "@/assets/Images/icon-linkedin.svg?react";
import GithubIcon from "@/assets/Images/icon-github.svg?react";
import XIcon from "@/assets/Images/icon-x.svg?react";
import InstagramIcon from "@/assets/Images/icon-instagram.svg?react";
import EmailIcon from "@/assets/Images/icon-email.svg?react";
import PhoneIcon from "@/assets/Images/icon-phone.svg?react";

const Contact = () => {
  const { sectionRefs } = useSectionNav();
  return (
    <motion.section
      variants={display}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3 }}
      ref={(el) => {
        sectionRefs.current.contact = el;
      }}
      id='contact'
      className='mt-16 lg:mt-30 min-h-[60vh]'
    >
      <h2 className='section-header'>Contact</h2>
      <h3 className='text-2xl pt-6'>Let’s get in touch!</h3>

      <div className='flex gap-6 justify-center my-10 lg:justify-start '>
        <a
          href='https://www.linkedin.com/in/osesimeon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinIcon className='h-12 w-12' />
        </a>
        <a
          href='https://github.com/Dev-simeon-tech'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubIcon className='h-12 w-12' />
        </a>
        <a
          href='https://x.com/ose_simeon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <XIcon className='h-12 w-12' />
        </a>
        <a
          href='https://www.instagram.com/ose_simeon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon className='h-12 w-12' />
        </a>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <div className='flex flex-col gap-2 lg:flex-row'>
          <EmailIcon />
          <p>elebesunuosereme@gmail.com</p>
        </div>
        <div className='flex flex-col gap-2 lg:flex-row'>
          <PhoneIcon />
          <a href='tel:+2348149478944'>+234 814 947 8944</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
