
import {TypeAnimation} from 'react-type-animation';
import {FaTwitter,FaLinkedin,FaGithub, FaUser} from 'react-icons/fa'

function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1] absolute top-0 left-0'  src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="black leafs" />
        <div className='w-full h-screen absolute  top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
          
            <h1 className='sm:text-7xl text-4xl font-bold m-5'>Hi, I am Manasa</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4'> <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Coder',
        2000,
        'a Tech enthuisest ',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h2>
            <div className='flex w-full pt-10 max-w-[200px] justify-between'>
        
        <FaGithub  className='cursor-pointer' size={20}><a href="https://github.com/manasag0" target=''></a></FaGithub> 
        <FaLinkedin className='cursor-pointer'size={20} />
        <FaTwitter  className='cursor-pointer' size={20}/>
        <FaUser className='cursor-pointer'size={20} />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Main
