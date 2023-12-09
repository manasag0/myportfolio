
import {TypeAnimation} from 'react-type-animation';
import {FaTwitter,FaLinkedin,FaGithub, FaUser} from 'react-icons/fa'
// import { GrNavigate } from 'react-icons/gr';

function Main() {
  return (
    <div id='main'>
     
        <img className='w-full h-screen object-cover  object-left scale-x-[-1] top-0 left-0'  src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="black leafs" />
        <div className='w-full h-screen absolute  top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
          
            <h1 className='sm:text-7xl text-4xl font-bold m-5 text-center'>Hi, I am Manasa</h1>
            <h2 className='flex sm:text-2xl text-1xl pt-3'> <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Coder',
        2000,
        'a Tech Enthusiast ',
        2000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1.5em', paddingLeft:'5px', display: 'inline-block' }}
      repeat={Infinity}
    /></h2>
            <div className='flex w-full pt-10 max-w-[200px] justify-between'>
        
            <a href="https://github.com/manasag0" rel='noreferrer' target='_blank'><FaGithub  className='cursor-pointer' size={20} /> </a>
        <a href="https://www.linkedin.com/in/manasa-g-60434124a/"> <FaLinkedin className='cursor-pointer'size={20} /></a>
       <a href="https://twitter.com/mooonCode" target="_blank" rel="noopener noreferrer"> <FaTwitter  className='cursor-pointer' size={20}/></a>
       <a href="#contact">
        <FaUser className='cursor-pointer'size={20} />
        </a>
        </div>
        </div>
        </div>
    
    </div>
  )
}

export default Main
