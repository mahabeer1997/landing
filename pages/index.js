import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="mt-8 text-center text-4xl">Sales Scholarship Application</h1>
      </div>
      <div className='mt-10'>
    <div className="h-screen w-screen lg:grid lg:grid-cols-3 lg:gap-4 sm:block">
    <div className="ml-10 bg-gray-200 rounded-lg center"
    style={{backgroundImage: "url('/wbi.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
    </div>
    <div 
    className="min-h-min lg:w-11/12 sm:w-12/12 shadow-lg col-span-2
    bg-slate-200 rounded-lg
    bg-opacity-80
    "
    style={{backdropFilter: "blur(20px)"}}
    >
    <div className="mt-4 m-auto min-h-max max-w-md bg-white rounded-lg flex p-2 overflow-hidden">
      <div className='m-auto overflow-hidden'>
      <h1 className='lg:text-2xl sm:text-lg'>To apply for this scholarship, please follow the steps below.</h1>
      </div>
    </div>
    <div className='ml-10 mr-10 mt-12 text-xl flex text-blue-600'>
    Scholarship recipients must be 18-30 years old and are selected based on a statement of goals and aspirations, financial need, and a personal/professional recommendation.
    </div>
    <div className='w-[95%] p-4 border-solid border-2 border-blue-400 rounded-lg m-auto mt-8'>
    <div>
    <div className='ml-2 lg:text-2xl flex whitespace-pre text-lg'>
   <div className='overflow-ellipsis overflow-hidden'> To apply, email the following to <div className='text-blue-600 underline decoration-2'>DLueFungScholarship@gmail.com<span className='text-black decoration-0'>:</span></div> </div>
    </div>
    <div>
      <ul className='list-disc ml-8 pl-6 pr-12'>
        <li className='ml-4 mt-4 text-lg'>Personal Information or Resume including: Name, Age, Educational Background, Professional Background {"(if any)"}.</li>
        <li className='ml-4 mt-4 text-lg'>1-2 Personal or Professional Recommendations</li>
        <li className='ml-4 mt-4 text-lg'>Personal Statement outlining goals & aspirations as well as explaining financial needs {"(500-1000 words)"}.</li>
      </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
