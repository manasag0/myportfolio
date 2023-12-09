// import Project from './Project';
// import Project1 from '../assets/Project1.png'
// import Project2 from '../assets/Project2.png';
// import Project3 from '../assets/Project3.png';
// import Project4 from '../assets/Project4.png';
// function Projects() {
//   return ( 
//     <div id='projects'  className='bg-black/50 h-full m-auto md:pl-20 p-4 py-16'>
//       <div className=' pb-8'>
//       <h1 className='text-4xl font-bold text-center text-Black-100 '>Projects</h1>
//       </div>
//       <div className='grid sm:grid-cols-2 gap-12'>
//           <Project img={Project1} title='Hold the Breathe' />
//           <Project img={Project2} title='my portfolio' />
//           <Project img={Project3} title='IndeVlez' />
//           <Project img={Project4} title='Password Generator' />
//       </div>
//     </div>
//   )
// }

// export default Projects

import Project from './Project';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';

function Projects() {
  return ( 
    <div id='projects'className='min-h-screen bg-black/30 text-white p-4 py-16 md:px-20'>
      <div className='pb-5'>
        <h1 className='text-5xl font-bold text-center'>Projects</h1>
      </div>
      <p className='text-center text-white py-4'>Here are some projects which made me to aquire knowledge by creating them</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 overflow-x-auto'>
        <Project img={Project1} title='Hold the Breathe' />
        <Project img={Project2} title='my portfolio' />
        <Project img={Project3} title='IndeVlez' />
        <Project img={Project4} title='Password Generator' />
      </div>
    </div>
  )
}

export default Projects;
