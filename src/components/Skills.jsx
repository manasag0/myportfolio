import { DiHtml5, DiCss3, DiReact, DiMongodb, DiBootstrap } from 'react-icons/di';
import { FaJs,FaGit,FaGithub ,FaNodeJs } from 'react-icons/fa';
import {SiTailwindcss,SiExpress} from 'react-icons/si';
import { TbBrandVite,TbBrandNextjs,TbBrandTypescript } from "react-icons/tb";
const Skills = () => {
  return (
    <div id='skills' className='relative w-full min-h-screen overflow-hidden'>
      <img
        src="https://wallup.net/wp-content/uploads/2016/02/238526-moss-ladders-blurred-depth_of_field-nature.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-60">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Skills</h1>
          <p className="text-lg mb-6">
            I have a wide range of skills and experience in the following areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <ul className="flex flex-wrap gap-3 ml-4">
                <li><DiHtml5 size={40} /></li>
                <li><DiCss3 size={40} /></li>
                <li><FaJs size={40} /></li>
                <li><TbBrandTypescript size={40} /></li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 whitespace-normal">Frameworks/Libraries/DBs/RuntimeEnvs</h2>
              <ul className="flex flex-wrap gap-4 ml-4">
              <li><DiBootstrap size={40} /></li>
                <li><SiTailwindcss size={40} /></li>
                <li><DiReact size={40} /></li>
                <li><TbBrandNextjs size={40} /></li>
                <li><FaNodeJs size={40} /></li>
                <li><SiExpress size={40} /></li>
                <li><DiMongodb size={40} /></li>

              </ul>
            </div>
            <div className="sm:col-span-1">
              <h2 className="text-2xl font-semibold sm:mb-0 md:mb-0">Tools</h2>
              <ul className="ml-4 flex gap-2">
                <li><TbBrandVite size={40} /></li>

                <li><FaGit size={40}/></li>
                <li><FaGithub size={40} /></li>
              </ul>
            </div>
            <div className="sm:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Problem Solving and Others</h2>
              <ul className="ml-3">
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>APIs</li>
                <li>Prompt Engineering</li>
              </ul>
            </div>
            <div className="sm:col-span-1">
              <h2 className="text-2xl font-semibold ">Future Enthusiastic</h2>
              <ul className="sm: ml-3 p-0">
                <li>Web 3</li>
                <li>Blockchain Development</li>
                <li>Ethereum Smart Contracts</li>
                <li>Solidity Programming Language</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
