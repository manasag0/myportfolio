import AboutItem from "./AboutItem"


export default function About() {

const data={

  headline:"I am a Web Designer and Developer",
  subpera:`"Driven by a passion for creating innovative and user-centered digital experiences."`,
  content: `Passionate Web Developer with a Non-Traditional Path
  
  I am a full stack web developer with a passion for creating innovative and user-friendly web solutions. I have consistently demonstrated my ability to learn quickly, adapt to new technologies, and apply my knowledge to solve real-world problems.
  
The hands-on experience allowed me to hone my skills, collaborate with experienced developers, and gain valuable industry insights.  
 I am particularly proud of my work on "IndiVlez", a web application that making 'connection between people to remote India'. This project challenged me to think creatively, solve complex problems, and work effectively within a team environment.
  
  I am confident that my dedication to continuous learning, my strong work ethic, and my passion for web development will enable me to make significant contributions to the industry.`
}

  return (
    <div id='about' className=" text-white" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4962374.jpg')", backgroundRepeat: 'no-repeat' ,backgroundOpacity: '10%',backgroundSize: 'cover' }}>

      <div className=" bg-white/60 flex flex-col justify-center text-black text-center w-full h-screen">
   
      <h1 className=" text-[50px] text-center ">About Me</h1>  
    <div className="text-[26px]  p-auto"> {data.headline}  </div>
    <div className="  text-[20px] p-auto"> {data.subpera} </div>
   <div className=" m-10 shadow-md p-8 text-[20px]  leading-relaxed ">{data.content} </div>
    </div>
    </div>
  )
}
