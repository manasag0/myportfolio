export default function About() {

const data={

  headline:"I am a Web Designer and Developer",
  subpera:`"Driven by a passion for creating innovative and user-centered digital experiences."`,
  content: `Passionate Web Developer with a Non-Traditional Path.
  
  I am a full stack web developer with a passion for creating innovative and user-friendly web solutions. I have consistently demonstrated my ability to learn quickly, adapt to new technologies, and apply my knowledge to solve real-world problems.
  
The hands-on experience allowed me to hone my skills, collaborate with experienced developers, and gain valuable industry insights.  
 I am particularly proud of my work on "IndiVlez", a web application that making 'connection between people to remote India'. This project challenged me to think creatively, solve complex problems, and work effectively within a team environment.
  
  I am confident that my dedication to continuous learning, my strong work ethic, and my passion for web development will enable me to make significant contributions to the industry.`
}

  return (
    <div id='about' className=" text-white" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4962374.jpg')", backgroundRepeat: 'no-repeat' ,backgroundOpacity: '10%',backgroundSize: 'cover' }}>

      <div className="  bg-white/50 grid grid-cols-1 gap-8 p-6 sm:p-10 md:grid-cols-2 text-black h-screen m-0">
      <div className="text-center flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl sd:text-6xl m-10 sm-3">About Me</h1>
          <div className="text-lg sm:text-xl md:text-2xl">{data.headline}</div>
          <div className=" sm:text-base sm-10 m-10 ::first-letter-large">{data.subpera}</div>
        </div>
        <div className="text-base sm:text-lg overflow-auto flex items-center justify-center">
          <div className="shadow-md p-4 sm:p-6">{data.content}</div>
        </div>
    </div>
    
    </div>
  )
}
