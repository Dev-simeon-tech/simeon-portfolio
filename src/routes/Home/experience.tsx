import { motion } from "motion/react";
import { useSectionNav } from "../../context/sectionNav";

import { display } from "../../lib/motionOneVariants";
import cnLogo from "@/assets/Images/cn-192.jpg";
import SpotlightCard from "../../lib/ReactBits/SpotlightCard";

const Experience = () => {
  const { sectionRefs } = useSectionNav();
  return (
    <motion.section
      variants={display}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3 }}
      className='min-h-[80vh] pt-20 lg:pt-25 '
      id='experience'
      ref={(el) => {
        sectionRefs.current.experience = el;
      }}
    >
      <h2 className='section-header'>Experience</h2>

      {/* experience card starts */}
      <SpotlightCard className='bg-neutral-100 mt-10 rounded-xl divide-y-2 divide-gray-border border-1 lg:w-[50rem] lg:mx-auto py-4 px-6 border-gray-border '>
        <div className='flex lg:justify-between flex-col gap-3 pb-3 lg:flex-row lg:items-center'>
          <div className='flex items-center gap-4'>
            <img className='rounded-sm' src={cnLogo} alt='connote logo' />
            <div>
              <h3 className='text-xl font-neue-montreal-medium'>
                Founder & Software Developer
              </h3>
              <p className='text-neutral-gray text-sm'>ConNote</p>
            </div>
          </div>
          <div className='py-1.5 px-3 w-fit bg-neutral-200 rounded-sm border-1 border-gray-border'>
            2025 - Present
          </div>
        </div>
        <p className='pt-2'>
          I Founded and built Connote, a SaaS platform providing essential
          student utilities such as unit converters and an AI-powered PDF
          summarization tool. Designed and developed the full frontend and
          backend (firebase).
        </p>
      </SpotlightCard>
    </motion.section>
  );
};

export default Experience;
