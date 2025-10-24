import Header from "../../components/ui/header";
import Hero from "./hero";
import Navbar from "../../components/ui/navbar";
import Experience from "./experience";
import FeaturedProjects from "./featuredProjects";
import Stack from "./stack";
import Contact from "./contact";

import boxPattern from "@/assets/Images/Box Pattern.png";
import LightRays from "../../lib/ReactBits/lightRays";

const Home = () => {
  return (
    <div className='lg:px-20 px-4 md:px-8 relative'>
      <Header />
      <Navbar />
      <img
        src={boxPattern}
        className='-z-20  left-1/2 -translate-x-1/2 lg:top-0 top-25 absolute'
        alt='box pattern'
      />
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: -15,
        }}
      >
        <LightRays
          raysOrigin='top-right'
          raysColor='#ffffff'
          raysSpeed={1.5}
          lightSpread={1.2}
          rayLength={1.7}
          followMouse={false}
          mouseInfluence={0.1}
          className='custom-rays'
        />
      </div>
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
