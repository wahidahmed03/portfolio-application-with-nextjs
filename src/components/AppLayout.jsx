"use client"
import React from 'react'
import { useState } from 'react'

import HomeAppSidebar from '@/components/Home/HomeAppSidebar'
import HomeHeader from './Header/HomeHeader'

import { useSelector, useDispatch } from 'react-redux';



function AppLayout ({ children }) {
 const isHomeSideBar = useSelector((state) => state.homeSidebar.isHomeSideBar);



  return (
    < >
<div className=" max-h-screen">
 <div className=" flex flex-col">
    <div className={`z-10`}>
      <HomeHeader />
    </div>
    
 {/*** SIDE BARE COMPONENTS */}
 <div className={` ${isHomeSideBar ? "ml-0" :"-ml-40"} transition-all duration-300 w-40 bg-slate-100 dark:bg-BgDarkPrimary h-screen fixed border-r-[0.5px] ${"border-[0.5px] border-gray-300 dark:border-gray-600"} pt-20 hidden lg:block`}>
    <HomeAppSidebar />
 </div>

 {/*** CONTAIN  SECTION */}
 <div className={` ml-0 ${isHomeSideBar ? "lg:pl-40": "ml-0"} bg-slate-100 dark:bg-gray-900  w-full `}>
    { children }
 </div>

 </div>
</div>
    </>
  )
}







export default AppLayout