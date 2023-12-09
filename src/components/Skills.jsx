import { DiHtml5, DiCss3, DiReact, DiMongodb, DiBootstrap } from 'react-icons/di';
import { FaJs,FaGithub ,FaNodeJs } from 'react-icons/fa';
import {SiTailwindcss,SiExpress} from 'react-icons/si';
import { TbBrandVite,TbBrandNextjs,TbBrandTypescript } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";


const Skills = () => {
  return (
    <div id='skills' className='relative w-full min-h-screen bg-black'>
      <img
        src="https://wallup.net/wp-content/uploads/2016/02/238526-moss-ladders-blurred-depth_of_field-nature.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt=""
      />
      <div className="inset-0 flex flex-col justify-center overflow-auto items-center text-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4 text-center">Skills</h1>
          <p className="text-lg mb-6 text-center">
            I have a wide range of skills and experience in the following areas:
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Frontend Developement</h2>
              <ul className="flex flex-wrap gap-3 ml-4">
                <li><DiHtml5 size={40} />HTML5</li>
                <li><DiCss3 size={40} />CSS3</li>
                <li><FaJs size={40} />JavaScript</li>
                <li><TbBrandTypescript size={40} />TypeScript</li>
                <li><BsFiletypeSql size={40} />SQL</li>
                <li><DiBootstrap size={40} />BootStrap</li>
                <li><SiTailwindcss size={40} />TailwindCSS</li>
                <li><DiReact size={40} />React js</li>
                <li><TbBrandVite size={40} />Vite + React</li>
                <li><TbBrandNextjs size={40} />Nextjs</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-4">Backend Developement</p>
              <ul className="flex flex-wrap gap-4 ml-4">
                <li><FaNodeJs size={40} />Node Js</li>
                <li><SiExpress size={40} />Express js</li>
                <li><DiMongodb size={40} />MangoDB</li>
                <li><FaGithub size={40} />Version Control(Git)</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>APIs</li>
                <li>Problem-Solving</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Enthusiast</h2>
              <ul className="ml-4 flex flex-col gap-2">
                <li>Web 3</li>
                <li>Blockchain Development</li>
                <li>Ethereum Smart Contracts</li>
                <li>Solidity Programming Language</li>         
              </ul>
            </div>

            <div className="text-center mt-8">
          <a
            href="src/Resume/ManasasResume.pdf"  // Replace with the actual path to your CV file
            download="ManasasResume.pdf"      // Optional: Specify the filename when downloaded
            className="bg-white text-black px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
