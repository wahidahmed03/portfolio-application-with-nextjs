"use client"
import Link from 'next/link';
import React from 'react'
import { TbSourceCode,TbHome  } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io5";

import { usePathname } from "next/navigation";

import { useSelector } from 'react-redux';





function HomeAppSidebar() {


return (
 <>
 <div className={`w-40 transition-all`}>
  <div className=" flex flex-col gap-4">
    <SidebarLink  href='/' icon={TbHome}  label='Home' />
    <SidebarLink  href='/Project' icon={TbHome}  label='Project' onclick={()=>setIsproject(!Isproject)} />
    <SidebarLink  href='/Video' icon={IoLogoYoutube}  label='Video' />
  </div>
 </div>
 </>
)
}
export default HomeAppSidebar






const SidebarLink = ({ href, icon: Icon, label }) => {
    const { bgColor, textColor, borderColor, bgHoverColor } = useSelector((state) => state.themeColor);
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
    return (
      <Link href={href} className="w-full">
        <div  className={`flex gap-2 items-center py-3 pl-3 transition-all duration-300 hover:bg-bg-yellow-200 dark:text-white ${bgHoverColor} ${  isActive ? `${bgColor} text-white `: ""} `} >
          <Icon className="h-5 w-5 " />
          <span className="">{label}</span>
        </div>
      </Link>
    );
  };  
  