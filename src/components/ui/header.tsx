import { useState } from "react";
import DownloadIcon from "@/assets/Images/icon_download.svg?react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='flex justify-between items-center pt-8 relative '>
      <h2 className='text-xl lg:text-2xl'>Simeon Elebesunu</h2>
      <button
        className='hamburger-cont lg:hidden flex align-center justify-center'
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className='hamburger w-[2.5rem] h-[2.5rem] fill-white'
          viewBox='0 0 100 100'
        >
          <rect x='10' y='25' className='line top' width='80' height='7' />
          <rect x='10' y='50' className='line middle' width='80' height='7' />
          <rect x='10' y='75' className='line bottom' width='80' height='7' />
        </svg>
      </button>

      <button
        className={`items-center lg:flex justify-center gap-2 absolute lg:w-fit w-full lg:top-0 top-20 lg:relative text-neutral-100 bg-primary-green text-[1rem] px-4 py-3 rounded-[8px] ${
          isOpen ? "flex" : "hidden"
        } `}
      >
        <DownloadIcon />
        <p>Download CV</p>
      </button>
    </header>
  );
};

export default Header;
