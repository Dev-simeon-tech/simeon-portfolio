import { useSectionNav } from "../../context/sectionNav";
import { motion } from "motion/react";
import FeaturedProjectCard from "../../components/ui/featuredProjectCard";
import ProjectCard from "../../components/ui/projectCard";
import { display } from "../../lib/motionOneVariants";

import connotePreview from "@/assets/Images/connote-preview.jpg";
import pianistPreview from "@/assets/Images/pianist-preview.jpg";
import weatherNowPreview from "@/assets/Images/weather-now-preview.jpg";
import countriesSearchPreview from "@/assets/Images/countries-search-preview.jpg";

const cardsData = [
  {
    title: " ConNote",
    subTitle: "Student's Personal unit calculator and Note-Summarizing App",
    content:
      "ConNote is a SaaS platform providing essential student utilities such as unit converters and an AI-powered PDF summarization tool. Designed and developed the full frontend using TypeScript and React, and backend with Firebase, Integrated OpenAI Assistants API for summarization and AWS S3 for file upload.",
    imgPreview: connotePreview,
    link: "https://con-note.vercel.app/",
  },
  {
    title: "Billionaire pianist",
    subTitle: "Achieve Piano Excellence with Expert Guidance",
    content:
      "Billionaire pianist is a piano learning site offers a structured path from beginner to advanced, with carefully organized courses and step-by-step video lessons. Whether you’re just starting out or looking to refine your skills, you’ll find easy-to-follow tutorials, practical exercises, and expert guidance.",
    imgPreview: pianistPreview,
    link: "https://con-note.vercel.app/",
  },
];

const projectCard = [
  {
    title: "Weather now",
    subtitle: "Hackathon",
    imgPreveiw: weatherNowPreview,
    link: "https://weather-now-ose-app.vercel.app/",
  },
  {
    title: "Countries Search app",
    subtitle: "FM challenge ",
    imgPreveiw: countriesSearchPreview,
    link: "https://countries-search-app-xi.vercel.app/",
  },
];

const FeaturedProjects = () => {
  const { sectionRefs } = useSectionNav();
  return (
    <motion.section
      variants={display}
      initial='hidden'
      whileInView='visible'
      viewport={{ margin: "-400px" }}
      id='projects'
      className='pt-10'
      ref={(el) => {
        sectionRefs.current["projects"] = el;
      }}
    >
      <h2 className='section-header'>Featured Projects</h2>
      <div className='mt-8 flex flex-col gap-10'>
        {cardsData.map(({ title, subTitle, content, imgPreview, link }) => (
          <FeaturedProjectCard
            key={title}
            title={title}
            content={content}
            subTitle={subTitle}
            imgPreview={imgPreview}
            link={link}
          />
        ))}
      </div>
      <div>
        <h3 className='text-2xl lg:text-4xl text-center mt-15'>
          Some nice project I’ve worked on
        </h3>
        <div className='flex flex-col md:flex-row lg:justify-center lg:gap-14 gap-8 mt-10'>
          {projectCard.map(({ title, subtitle, imgPreveiw, link }) => (
            <ProjectCard
              title={title}
              imgPreview={imgPreveiw}
              link={link}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
