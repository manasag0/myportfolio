
// const Project = ({img,title}) => {
//   return (

//     <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-green-200 to-green-600'>
//       <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 ' />
//       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%]'>
//         <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
//           {title}
//         </h3>
//       </div>
//      </div>

//   )
// }

// export default Project

const Project = ({ img, title }) => {
  return (
    <div className='relativeflex flex-col items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-green-200 to-green-600'>
      <img src={img} alt="/" className='w-full h-auto rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute inset-0'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
      </div>
    </div>
  )
}

export default Project;
