import Project from './Project';
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-gray-100'>Projects</h1>

      <div className='grid sm:grid-cols-2 gap-12'>
          <Project img={Project1} title='my portfolio' />
          <Project img={Project2} title='my portfolio' />
          <Project img={Project3} title='my portfolio' />
          <Project img={Project4} title='my portfolio' />
      </div>
    </div>
  )
}

export default Projects
