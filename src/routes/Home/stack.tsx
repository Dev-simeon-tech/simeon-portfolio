import { useSectionNav } from "../../context/sectionNav";
import { motion } from "motion/react";
import StackGroup from "../../components/ui/stackGroup";
import { display } from "../../lib/motionOneVariants";

import { stackIcons } from "../../utils/stackIcons";

const {
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
  HtmlIcon,
  CSSIcon,
  FigmaIcon,
  FirebaseIcon,
  TailwindIcon,
  JavaScriptIcon,
  GitIcon,
  GithubIcon,
  SassIcon,
} = stackIcons;

const frontendStack = [
  { icon: HtmlIcon, label: "HTML" },
  { icon: CSSIcon, label: "CSS" },
  { icon: JavaScriptIcon, label: "JavaScript" },
  { icon: TailwindIcon, label: "TailwindCss" },
  { icon: SassIcon, label: "SASS" },
  { icon: ReactIcon, label: "React" },
  { icon: TypeScriptIcon, label: "TypeScript" },
  { icon: ReduxIcon, label: "Redux" },
];

const toolStack = [
  { icon: FigmaIcon, label: "Figma" },
  { icon: GithubIcon, label: "Github" },
  { icon: GitIcon, label: "Git" },
];

const Stack = () => {
  const { sectionRefs } = useSectionNav();
  return (
    <motion.section
      variants={display}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3 }}
      id='stack'
      ref={(el) => {
        sectionRefs.current.stack = el;
      }}
      className='text-center pt-15 lg:pt-25'
    >
      <h2 className='section-header text-left'>Stacks</h2>

      <div className='max-w-[80%] lg:max-w-[60rem] mx-auto'>
        <div className='mt-13'>
          <h3 className='text-2xl'>Frontend</h3>
          <div className='mt-8 grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 '>
            {frontendStack.map(({ icon, label }) => (
              <StackGroup icon={icon} label={label} />
            ))}
          </div>
        </div>

        <div className='mt-13'>
          <h3 className='text-2xl mb-8'>Backend</h3>
          <StackGroup label='Firebase' icon={FirebaseIcon} />
        </div>

        <div className='mt-13'>
          <h3 className='text-2xl'>Tools and Technologies</h3>
          <div className='flex mt-8 justify-center lg:justify-start flex-wrap gap-7 lg:gap-20'>
            {toolStack.map(({ icon, label }) => (
              <StackGroup icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Stack;
