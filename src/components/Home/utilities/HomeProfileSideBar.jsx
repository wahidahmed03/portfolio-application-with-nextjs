import React from 'react'
import LineProgressbar from '../examplel.jsx/LineProgressbar'
import CircularProgressBar from '../examplel.jsx/CircularProgressBar'
import { TiSocialFacebook, TiSocialYoutube, TiSocialLinkedin   } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import Skill from '../DataExample.json'


function HomeProfileSideBar() {
return (
<>
{/**** PROFILE SIDEBAR  */}
<div className=" ">
     <div className="h-[88vh] z-50  bg-gray-100 dark:bg-BgDarksecandary  w-[90vw] sm:w-[260px] shadow-2xl  sm:fixed  mt-3 ml-3 rounded border-[0.5px] dark:border-gray-600 border-gray-300  ">
   
      {/**** FRIST SECTION */}
        <div className=" w-[90vw]  sm:w-[256px]  h-[230px] dark:bg-[#24242E] flex flex-col items-center justify-center   ">
   
         <div className=" relative">
           <Image src={'/wahidahmed.png'} width={100} height={100} alt='wahid  ' className=' rounded-full ring-2 ring-offset-2' />
           <div className=" w-5 h-5 rounded-full  bg-blue-600 absolute  right-1 bottom-11 animate-ping "></div>
           <div className=" w-5 h-5 rounded-full  bg-blue-600 absolute  right-1 bottom-11 "></div>
         </div>
   
         <div className="">
           <div className=" flex flex-col items-center justify-center">
            <h1 className=' pt-3 opacity-80'>WAHID AHMED</h1>
            <p className=' font-thin opacity-50 text-center '>Full stack developer</p>
            <p className=' font-thin opacity-50'>Ui/UX Designer            </p>
           </div>
         </div>
   
        </div>
   {/* /*****  FRIST SECTION END*/}
   
   { /****** SECAND SECTIPN */  }
       <div className="   w-[90vw]  sm:w-[260px] scroll-py-0 overflow-scroll h-[380px]  hide-scrollbar">
   
           <div className=" flex flex-col  gap-1 text-sm py-2">
               <div className=" flex justify-between px-2">
                   <p>Residence:</p>
                   <p className=' opacity-50'>Bangladeshi</p>
               </div>
               <div className="flex justify-between px-2">
                   <p>City:</p>
                   <p className=' opacity-50'>Noakhali</p>
               </div>
               <div className="flex justify-between px-2">
                   <p>Age:</p>
                   <p className=' opacity-50'>20</p>
               </div>
           </div>
           <div className="w-[80%] h-[2px] bg-BgDarkPrimary mt-2 mx-6"></div>
   
           <div className=" flex items-center justify-around py-4 px-2">
               <div className=" flex items-center justify-center flex-col">
                <CircularProgressBar percentage={90} />
                <p className=' opacity-60'>PHP</p>
               </div>
               <div className=" flex items-center justify-center flex-col">
                <CircularProgressBar percentage={95} />
                <p className=' opacity-50'>Javascript</p>
               </div>
               <div className=" flex items-center justify-center flex-col">
                <CircularProgressBar percentage={98} />
                <p className=' opacity-50'>React</p>
               </div>
           </div>
   
           <div className="px-3 flex flex-col gap-4">
        {Skill.map((skill,index)=>{
            return(
               <div key={index} className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Html</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
            )})}
   
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Css</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>  
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Tailwind</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Javascript</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Nodejs</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>ExpressJs</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>MongoDB</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>React</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
   
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>NextJS</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
               
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Prisma</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
               
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>Mysql</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
               
               <div className=" flex flex-col gap-1">
                   <div className=" flex items-center justify-between opacity-50 text-sm"><p>PHP</p> <p>95%</p></div>
                   <LineProgressbar />
               </div>
   
   
           </div>
           </div>
           {/****  SECAND SECTION END */}
     
   {/**** SOCIAL MIDEA SECTION */}
     <div className=" flex items-center justify-around gap-2 py-2">
       <div className="">
         <TiSocialFacebook />
       </div>
       <div className="">
         <TiSocialYoutube />
       </div>
       <div className="">
         <TiSocialLinkedin />
       </div>
       <div className="">
        <AiFillGithub />
       </div>
     </div>
     {/****** SOCIAL MEDIA SECTION END */}
   </div>
   </div>iv
</>
  )
}

export default HomeProfileSideBar