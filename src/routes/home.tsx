import Header from "../components/ui/header";
import Hero from "../components/ui/hero";
import Navbar from "../components/ui/navbar";
import Experience from "../components/ui/experience";
import FeaturedProjects from "../components/ui/featuredProjects";
import Stack from "../components/ui/stack";
import Contact from "../components/ui/contact";

import boxPattern from "@/assets/Images/Box Pattern.png";
import lightRay from "@/assets/Images/Light Ray.png";

const Home = () => {
  return (
    <div className='lg:px-20 px-4 relative'>
      <Header />
      <Navbar />
      <img
        src={boxPattern}
        className='-z-20  left-1/2 -translate-x-1/2 lg:top-0 top-25 absolute'
        alt='box pattern'
      />
      <img
        className='absolute -z-18 right-0 top-0'
        src={lightRay}
        alt='light ray backround'
      />
      <Hero />

      <Experience />
      <FeaturedProjects />
      <Stack />
      <Contact />
      <footer className='text-center my-10'>
        Copyrights &copy; 2025 Osereme Simeon
      </footer>
    </div>
  );
};

export default Home;
