import LogoLoop from "../../lib/ReactBits/logoLoop";
import { stackIcons } from "../../utils/stackIcons";

const {
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
  NextIcon,
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

const techLogos = [
  { node: <ReactIcon />, title: "React", href: "https://react.dev" },

  {
    node: <TypeScriptIcon />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <NextIcon />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <TailwindIcon />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <HtmlIcon />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <CSSIcon />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <JavaScriptIcon />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SassIcon />,
    title: "SASS",
    href: "https://sass-lang.com/",
  },
  {
    node: <FigmaIcon />,
    title: "Figma",
    href: "https://figma.com/",
  },
  {
    node: <GitIcon />,
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    node: <GithubIcon />,
    title: "Github",
    href: "https://github.com/",
  },
  {
    node: <FirebaseIcon />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  {
    node: <ReduxIcon />,
    title: "Redux",
    href: "https://redux.js.org/",
  },
];

const LogoLoopContainer = () => {
  return (
    <div className='absolute top-150 w-full left-0 h-[12.5rem] overflow-hidden'>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction='left'
        logoHeight={18}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor='#0a0a0a'
        ariaLabel='my stack'
        className='[&_ul]:overflow-y-hidden '
      />
    </div>
  );
};

export default LogoLoopContainer;
