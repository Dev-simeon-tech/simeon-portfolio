import { useState } from "react";
import DownloadIcon from "@/assets/Images/icon_download.svg?react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='flex justify-between items-center pt-8 relative '>
      <Link to={"/"}>
        <h2 className='text-xl lg:text-2xl'>Simeon Elebesunu</h2>
      </Link>
      <button
        aria-label='Toggle menu'
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

      <a
        className={`${
          isOpen ? "block " : "hidden"
        } absolute w-full left-0 lg:w-fit top-20 lg:top-0 lg:block lg:relative `}
        href="/Simeon's CV.pdf"
        download
      >
        <button
          aria-label='Download CV'
          className='items-center transition-colors duration-300 hover:bg-white flex justify-center gap-2  lg:w-fit w-full    text-neutral-100 bg-primary-green text-[1rem] px-4 py-3 rounded-[8px]'
        >
          <DownloadIcon />
          <p>Download CV</p>
        </button>
      </a>
    </header>
  );
};

export default Header;
