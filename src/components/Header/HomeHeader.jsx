"use client";
import React, { useState, useEffect } from 'react';
import { TbSun, TbMoon, TbMenuDeep } from "react-icons/tb";
import ThemeColorBar from './utilities/ThemeColorBar';
import UserAccoutInfoCom from './utilities/UserAccoutInfoCom';
import { IoArrowForwardSharp } from "react-icons/io5";
import { setCookie,getCookie } from 'cookies-next';




import { useSelector, useDispatch } from 'react-redux';
import { ChangeHomeSidebar } from '@/components/Redux/HomeSidebarSlice';


function HomeHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isHomeSideBar = useSelector((state) => state.homeSidebar.isHomeSideBar);
  const dispatch = useDispatch();
  const [noDependices,setnoDependices]=useState("")



  const ModeFunc = () => {
    if (document.documentElement.classList.value === "dark") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      setCookie('isDarkMode', 'false', );
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      setCookie('isDarkMode', 'true', );
    }
  };

  useEffect(()=>{
   let cookie= getCookie("isDarkMode")
   if(cookie == "false"){
    document.documentElement.classList.remove("dark");
   }else{
    document.documentElement.classList.add("dark");
   }
  },[noDependices])

  const border = "border-[0.5px] border-gray-300 dark:border-gray-600 rounded";

  return (
    <>
      <div className={`relative w-full h-[60px] border-b-[0.5px] ${border} flex items-center rounded-none justify-between px-5 bg-gray-50 dark:bg-BgDarkPrimary text-gray-900 dark:text-gray-50`}>
        <div className="flex items-center justify-center gap-3">
          <div className=" cursor-pointer" onClick={()=> dispatch(ChangeHomeSidebar())}> <IoArrowForwardSharp size={22} className={` hidden lg:block ${isHomeSideBar ? "rotate-180":"rotate-0"} transition-all duration-300`} /> </div>
          <p className='text-xl font-semibold'>WAHID AHMED</p>
        </div>
        <div className="flex gap-5 items-center">
           <ThemeColorBar />
        <div className={`w-[30px] h-[30px] ${border} cursor-pointer flex items-center justify-center`} onClick={ModeFunc}>
            {isDarkMode ? <TbSun /> : <TbMoon />}
          </div>
            <UserAccoutInfoCom />
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
