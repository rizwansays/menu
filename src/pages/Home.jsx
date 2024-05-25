import React, { useEffect, useRef, useState } from 'react'
import { MdMenu } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronDown , FaChevronUp } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoSearch } from 'react-icons/go';
import Logo from '../assets/logo.webp'
export default function Home() {
  const [scrollTop, setScrollTop] = useState(false);
  const toTop = useRef();
  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };
  useEffect(() => {
    const handleScroll = event => {
      // setScrollTop(window.scrollY);
      // console.log('window.scrollY', window.scrollY);
      if(window.scrollY > 400){
        setScrollTop(true);
      } else{
        setScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='bg-red-500'>
      Home

      <MdMenu />
      <FiMenu />
      <AiOutlineClose />
      <VscChromeClose />
      <FaAngleDown />
      <FaChevronUp />
      <IoIosArrowDown /> 
      <IoIosArrowUp /> 
      <GoSearch />
      <div className='h-[100vh]'>
 
      </div>

      {scrollTop && <div className='fixed right-3 bottom-0 bg-red-500 cursor-pointer p-2 text-white text-lg rounded-full animate-bounce' onClick={()=> scrollToTop(toTop)}><FaArrowUp /></div>}

<div className="fixed z-50 bottom-9 right-0 p-3 flex justify-center items-center" >
  <span className='hidden md:block cursor-pointer bg-white p-[6px] text-[12px] rounded-md'>Need Help? <span className='font-semibold'>Chat with us</span></span>
   <a href="https://wa.me/923078683925?text=Hello My Name is ?" target="_blank" className='inline'>
   <img src={Logo} width="45" alt="aaaa" className='inline'/>
</a>
</div>
    </div>
  )
}
