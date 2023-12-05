

const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen '>
      <h1>skills</h1>
      <p>I have a wide range of skills and experience in the following areas:</p>
      <ul className="flex flex-wrap justify-center">
        <li className="mr-6 px-4 py-2 text-sm font-semibold tracking-wide uppercase bg
        rounded shadow-lg outline-none focus:outline-none hover:shadow-xl transform transition duration-200 ease-in-
        hover:bg-blue-700 hover:text-white">
            Frontend Development
        </li>
        <li className="mr-6 px-4 py-2 text-sm font-semibold tracking-wide uppercase bg
        hover:bg-blue-700 hover:text-white">
            Backend Development
        </li>
        <li className="mr-6 px-4 py-2 text-sm font-semibold tracking-wide uppercase bg
        hover:bg-blue-700 hover:text-white">
            Mobile Applications
        </li>
        <li className="mr-6 px-4 py-2 text-sm font-semibold tracking-wide uppercase bg
        hover:bg-blue-700 hover:text-white">
            Web Design &amp; UI/UX
        </li>
      </ul>
    </div>
  )
}

export default Skills