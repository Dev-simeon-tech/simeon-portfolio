import { useSectionNav } from "../../context/sectionNav";
import { motion } from "motion/react";
import { slideUp } from "../../lib/motionOneVariants";
import ProfileIcon from "@/assets/Images/icon-profile.svg?react";
import ExperienceIcon from "@/assets/Images/icon-briefcase.svg?react";
import ProjectsIcon from "@/assets/Images/icon-rocket.svg?react";
import StackIcon from "@/assets/Images/icon-stack.svg?react";
import ContactIcon from "@/assets/Images/icon-contact.svg?react";

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export const sections: Section[] = [
  { id: "home", label: "Home", icon: <ProfileIcon /> },
  { id: "experience", label: "Experience", icon: <ExperienceIcon /> },
  { id: "projects", label: "Projects", icon: <ProjectsIcon /> },
  { id: "stack", label: "Stack", icon: <StackIcon /> },
  { id: "contact", label: "Contact", icon: <ContactIcon /> },
];

const Navbar = () => {
  const { activeId, navRefs, indicatorStyle } = useSectionNav();
  return (
    <motion.nav
      variants={slideUp as any}
      initial='hidden'
      animate='visible'
      className='bg-nav-bg backdrop-blur-[40px] fixed left-1/2 -translate-x-1/2 top-[80%] z-20 w-[80%] lg:max-w-[50rem] p-2.5 rounded-4xl'
    >
      <ul className='flex justify-between items-center relative'>
        {/* Sliding background */}
        <div
          className='absolute bottom-0 -z-10 h-11  md:h-12 bg-white rounded-[50%] md:rounded-4xl transition-all duration-300 ease-in-out'
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        ></div>
        {sections.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              aria-label={`Navigate to ${label} section`}
              ref={(el) => {
                navRefs.current[id] = el;
              }}
              className={`flex gap-[10px] px-3 py-3 items-center  lg:px-4 lg:py-3 transition-colors duration-500 rounded-[50%] ${
                activeId === id ? "text-black" : ""
              } `}
              href={`#${id}`}
            >
              {icon}
              <p className='hidden md:block'>{label}</p>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
