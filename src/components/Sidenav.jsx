
import { useState } from 'react'
import {AiOutlineMenu,AiOutlineHome,AiOutlineUser,AiOutlineMail,AiOutlineTool} from 'react-icons/ai'
import {GrProjects} from "react-icons/gr";

function Sidenav() {
    const [nav , setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className=''>
       < AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden cursor-pointer text-white' />
      {
        nav?(
          <div className='fixed bg-[rgba(0,0,0,0.5)] lg-hidden w-full h-screen flex flex-col  items-center justify-center z-20'>
            <a  onClick={handleNav} href="#main"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-white-400 m-3 p-1 text-black cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#about"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-white-400 m-3 p-1 text-black cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineUser size={20} />
              <span className='pl-4'>About me</span>
            </a>
            <a  onClick={handleNav} href="#skills"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-white-400 m-4 p-1 text-black cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineTool size={20} />
              <span className='pl-4'>Skills</span>
            </a>
            <a onClick={handleNav} href="#projects"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-white-400 m-3 p-1 text-black cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            
            <a  onClick={handleNav} href="#contact"className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white shadow-white-400 m-3 p-1 text-black cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={18} />
              <span className='pl-4'>Contact me</span>
            </a>

          </div>
        ):(
          <div>
          </div>
        )
      }
    <div className='md:block hidden fixed top-[25%] z-10'>
      <div className='flex flex-col'>
        <a  href="#main" className='rounded-full shadow-lg bg-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in shadow-black duration-300 ' title='At home'><AiOutlineHome/></a >
        <a  href="#about" className='rounded-full shadow-lg bg-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in shadow-black duration-300 active:shadow-lg active:rounded' title='About Me'><AiOutlineUser/></a >
        <a  href="#skills" className='rounded-full shadow-lg bg-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in shadow-black duration-300' title='Skills and Technologies'><AiOutlineTool/></a >
        <a  href="#projects" className='rounded-full shadow-lg bg-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in shadow-black duration-300'title='Projects'><GrProjects/></a >
        <a  href="#contact" className='rounded-full shadow-lg bg-white  m-2 p-4 cursor-pointer hover:scale-110 ease-in shadow-black duration-300' title='Contact Me'><AiOutlineMail/></a >

      </div>
    </div>
    </div>
  )
}

export default Sidenav
