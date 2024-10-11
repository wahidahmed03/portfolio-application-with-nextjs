"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {  IoLogoHtml5, IoGitBranchOutline,IoLogoGithub , IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoFigma, IoLogoFirebase, IoLogoReact, IoLogoWordpress, IoPrism, IoBrowsersOutline } from 'react-icons/io5';
import { BiLogoPhp } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill  } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaElementor } from "react-icons/fa";





import { useSelector } from 'react-redux';

import Projects from './Data.json'

const ProjectCataGories = [
  {
    "CatagoryName": "All",
    "Icon": <IoBrowsersOutline />
  },
  {
    "CatagoryName": "HTML",
    "Icon": <IoLogoHtml5 />
  },
  {
    "CatagoryName": "CSS",
    "Icon": <IoLogoCss3 />
  },
  {
    "CatagoryName": "TailwindCss",
    "Icon": <RiTailwindCssFill />
  },
  {
    "CatagoryName": "JavaScript",
    "Icon": <IoLogoJavascript />
  },
  {
    "CatagoryName": "Node.js",
    "Icon": <IoLogoNodejs />
  },
  {
    "CatagoryName": "Figma",
    "Icon": <IoLogoFigma />
  },
  {
    "CatagoryName": "Firebase",
    "Icon": <IoLogoFirebase />
  },
  {
    "CatagoryName": "React.js",
    "Icon": <IoLogoReact />
  },
  {
    "CatagoryName": "Next.js",
    "Icon": <RiNextjsFill />
  },
  {
    "CatagoryName": "Wordpress",
    "Icon": <IoLogoWordpress />
  },
  {
    "CatagoryName": "Elementor",
    "Icon": <FaElementor />
  },
  {
    "CatagoryName": "Webflow",
    "Icon": <FaWebflow />
  },
  {
    "CatagoryName": "Prisma",
    "Icon": <IoPrism />
  },
  {
    "CatagoryName": "PHP",
    "Icon": <BiLogoPhp />
  },
  {
    "CatagoryName": "MySql",
    "Icon": <GrMysql />
  }
];



function Project() {
  const { bgColor, textColor, borderColor, bgHoverColor ,themeSecandaryColor } = useSelector((state) => state.themeColor);
  const [ShowProjectCatagory, setShowProjectCatagory] = useState("All");
  const [FilterProjectData ,setFilterProjectData ] = useState(Projects)
  const [NoProjectFound,setNoProjectFound] = useState(false)
  console.log(NoProjectFound)

  useEffect(()=>{
    let filterPtojectByTechnology = Projects
    if(ShowProjectCatagory !== "All"){
      filterPtojectByTechnology =filterPtojectByTechnology.filter((project) =>project.Technology.includes(ShowProjectCatagory))
    }
    setFilterProjectData(filterPtojectByTechnology);
    console.log(filterPtojectByTechnology)
    if(filterPtojectByTechnology.length==0){
      setNoProjectFound(true)
    }else{
      setNoProjectFound(false)
    }
  },[ShowProjectCatagory])


  return (
<div className=' bg-white dark:bg-BgDarkPrimary text-gray-950 dark:text-slate-50 py-1  px-10'>
  <div className="w-full py-5 flex gap-1 flex-wrap">
    {ProjectCataGories.map((Catagory, index) => {
    const ActiveCatagory = Catagory.CatagoryName === ShowProjectCatagory;
    return (
     <div key={index}  onClick={() => setShowProjectCatagory(Catagory.CatagoryName)}
        className={`py-2 px-3 ${themeSecandaryColor} border ${borderColor}  rounded flex items-center justify-center cursor-pointer text-sm gap-2 ${ActiveCatagory ? "bg-white dark:bg-gray-200 dark:text-black" : ""}`}>
        <div className={`${textColor}`}>{Catagory.Icon} </div> <p className={``}>{Catagory.CatagoryName}</p>
     </div>
    );
  })}
  </div>





  <div className=" flex gap-4 p-1 flex-wrap  py-5">
    {FilterProjectData.map((project , index )=>{
      return(
  <div key={index} className={`w-[300px] h-[360px] bg-gray-50 dark:bg-gray-800 shadow-2xl  overflow-hidden rounded border-[1px] ${borderColor}  cursor-pointer hover:scale-105 transition-all duration-300`}>
        <div className="w-full h-[180px] overflow-hidden object-none object-center p-2">
            <Image width='280' height='180'  className=" object-contain object-center rounded" src={project.ProjectImgUrl} alt={"image"} />
        </div>
        <div className="h-[58px] overflow-scroll hide-scrollbar px-2 py-1 text-lg">{project.projectName}</div>

        <div className=" flex   gap-1  flex-wrap p-2 overflow-hidden h-[75px] items-center">
          {project.Technology.map((Technology,index)=>{
            return(
              <div key={index} className={`${themeSecandaryColor} border  h-[25px] px-2 py-1 ${borderColor} rounded flex items-center justify-center text-xs`}>{Technology}</div>
        )}) }


        </div>
        <div className=" flex gap-1 items-center justify-center">
        <Link href={project.LiveProjectUrl} className={`${project.GithubUrl?"w-[45%]":"w-[90%]"} ${project.LiveProjectUrl? "":"hidden"} flex items-center justify-center gap-1 py-1 px-3 border ${borderColor} rounded ${themeSecandaryColor}  hover:gap-4 transition-all duration-300`}><IoGitBranchOutline  />Live</Link>
        <Link href={project.GithubUrl} className={`${project.LiveProjectUrl?"w-[45%]" :"w-[90%]"} ${project.GithubUrl ?"":"hidden"}  w-[45%] flex items-center justify-center gap-1 py-1 px-3 border ${borderColor} rounded ${themeSecandaryColor}  hover:gap-4 transition-all duration-300`}><IoLogoGithub  />Github</Link>
        </div>
  </div>

    )})}

    { NoProjectFound ?
      <div className="w-[100%] min-h-screen flex items-center justify-center">
        <Image src={"/nodataable.png" } width={500} height={500} alt='no data image' /> 
      </div>:""
    }
  </div>
</div>
)
}

export default Project