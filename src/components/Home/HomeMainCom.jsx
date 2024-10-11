"use client"
import React from 'react'
import { TiSocialFacebook, TiSocialYoutube, TiSocialLinkedin   } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import CircularProgressSkillBar from './utilities/CircularProgressSkillBar';
import LineProgressSkillbar from './utilities/LineProgressSkillbar';

import SkillPar from './DataExample.json'

import { useSelector } from 'react-redux';
import HomePagMainContiner from './utilities/HomePagMainContiner';


function HomeMainCom() {
    const { bgColor, textColor, borderColor, bgHoverColor } = useSelector((state) => state.themeColor);

return (
 <div className=' bg-gray-100 text-gray-900 dark:bg-BgDarkPrimary dark:text-gray-100 flex flex-col flex-wrap '>
  {/**** PROFILE SIDEBAR  */}
  <div className="h-[88vh] z-50  bg-gray-100 dark:bg-BgDarksecandary  w-[90vw] sm:w-[260px] shadow-2xl  sm:fixed  mt-3 ml-3 rounded border-[0.5px] dark:border-gray-600 border-gray-300  ">
   {/**** FRIST SECTION */}
    <div className=" w-[90vw]  sm:w-[256px]  h-[217px] dark:bg-[#24242E] flex flex-col items-center justify-center   ">
     <div className=" relative">
       <Image src={'/wahidahmed.png'} width={100} height={100} alt='wahid  ' className=' rounded-full ring-2  ring-offset-2' />
       <div className={`w-5 h-5 rounded-full  ${bgColor} absolute  right-1 bottom-1 animate-ping `}></div>
       <div className={`w-5 h-5 rounded-full  ${bgColor} absolute  right-1 bottom-1`}></div>
     </div>
     <div className="">
      <div className=" flex flex-col items-center justify-center">
        <h1 className=' pt-3 opacity-80'>WAHID AHMED</h1>
        <p className={`opacity-80 text-center ${textColor}`}>Full stack developer</p>
      </div>
     </div>
   
    </div>
   {/* /*****  FRIST SECTION END*/}
   
   { /****** SECAND SECTIPN */  }
    <div className="   w-[90vw]  sm:w-[260px] scroll-py-0 overflow-scroll h-[380px]  hide-scrollbar">
     <div className=" flex flex-col  gap-1 text-sm py-2">
      <div className=" flex justify-between px-2">
        <p>Residence:</p>
        <p className={`opacity-70 ${textColor} `}>Bangladeshi</p>
      </div>
      <div className="flex justify-between px-2">
        <p>City:</p>
        <p className={`opacity-70 ${textColor} `}>Noakhali</p>
      </div>
     <div className="flex justify-between px-2">
        <p>Age:</p>
        <p className={`opacity-70 ${textColor} `}>20</p>
     </div>
     </div>
    <div className="w-[80%] h-[2px] bg-BgDarkPrimary mt-2 mx-6"></div>
    <div className=" flex items-center justify-around py-4 px-2">
     <div className=" flex items-center justify-center flex-col">
       <CircularProgressSkillBar percentage={90} />
       <p className=' opacity-60'>PHP</p>
     </div>
     <div className=" flex items-center justify-center flex-col">
       <CircularProgressSkillBar percentage={95} />
       <p className=' opacity-50'>Javascript</p>
     </div>
     <div className=" flex items-center justify-center flex-col">
        <CircularProgressSkillBar percentage={92} />
        <p className=' opacity-50'>Python </p>
     </div>
    </div>
   
     <div className="px-3 flex flex-col gap-4 pb-2">
    {SkillPar.map((Skill,index)=>{
    return(
      <div key={index} className=" flex flex-col gap-1">
        <div className=" flex items-center justify-between text-sm"><p className='opacity-50 '>{Skill.skillName}</p> <p className={`${textColor} opacity-80`}>{Skill.percentage}%</p></div>
         <LineProgressSkillbar percentage={Skill.percentage} />
      </div>
    )})}

     </div>
    </div>
{/****  SECAND SECTION END */}
     
{/**** SOCIAL MIDEA SECTION */}
  <div className=" flex items-center justify-around gap-2 py-2">
    <div className={`p-1 bg-gray-200/60 dark:bg-slate-800 rounded cursor-pointer ${textColor}`}>
     <TiSocialFacebook size={22} />
    </div>
    <div className={`p-1 bg-gray-200/60 dark:bg-slate-800 rounded cursor-pointer ${textColor}`}>
     <TiSocialYoutube size={22} />
    </div>
    <div className={`p-1 bg-gray-200/60 dark:bg-slate-800 rounded cursor-pointer ${textColor}`}>
     <TiSocialLinkedin size={22} />
    </div>
    <div className={`p-1 bg-gray-200/60 dark:bg-slate-800 rounded cursor-pointer ${textColor}`}>
     <AiFillGithub size={22} />
    </div>
  </div>
     {/****** SOCIAL MEDIA SECTION END */}
 </div>
{/**** SIDE PRODILE END */}
<HomePagMainContiner />
</div>
  )
}

export default HomeMainCom