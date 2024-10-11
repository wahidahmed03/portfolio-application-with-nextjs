import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'


import { TiTick , TiTimes,TiChevronRight  } from "react-icons/ti";




const PricePlane = [
    {
        PlaneName:"Starter Price",

        price :"500",
        OrderLink :"/",
        AbleableFuture :[
            "UI Design",
            "Web Development"
        ],
        UbAbleableFuture :[
            "Logo design",
            "SEO optimization",
            "Wordpress integration"
        ],
        warning: "*Free only when ordering paid services"
    },
    {
        PlaneName:"Hourly payment",

        price :"20",
        OrderLink :"/",
        AbleableFuture :[
            "UI Design",
            "Web Development",
            "Logo design"
        ],
        UbAbleableFuture :[
            "SEO optimization",
            "Wordpress integration"
        ],
        warning: "*Free only when ordering paid services"
    },
    {
        PlaneName:"Starter Price",

        price :"1000",
        OrderLink :"/",
        AbleableFuture :[
            "UI Design",
            "Web Development",
            "Logo design",
            "SEO optimization",
            "Wordpress integration",
            "Wordpress integration",
            "Wordpress integration",
            "Wordpress integration",
            "Wordpress integration",
            "Wordpress integration", "Wordpress integration",

        ],
        UbAbleableFuture :[
        ],
        warning: "*Free only when ordering paid services"
    },
]


function PriceSection() {
    const { bgColor, textColor, borderColor, bgHoverColor }  = useSelector((state)=> state.themeColor)

return (
<div className=' pt-10'>  
 <div className=" py-4">
   <p className=' text-xl text-center sm:text-start'>Price Plans</p>
 </div>

 <div className=" flex flex-wrap justify-center md:justify-start  gap-5">
 { PricePlane.map((Item,indexOne) => {
   return (
    <div key={indexOne} className=" w-[330px] h-[420px] bg-gray-100 border-[1px] border-gray-300 dark:border-gray-700 dark:bg-BgDarksecandary shadow-2xl relative ">
    <div className=""><p className=' text-lg font-normal py-5 text-center'>{Item.PlaneName}</p></div>
    <div className={`text-5xl text-center font-semibold ${textColor} py-3 pb-8`}><p>${Item.price}</p></div>
     <div className=" flex flex-col gap-2 overflow-scroll h-[200px] hide-scrollbar ">    
      { Item.AbleableFuture.map((Future,indexTwo)=>{
      return ( <div key={indexTwo} className=" flex items-center justify-center gap-2">
               <TiTick className={`${textColor} font-extrabold`} />
                <p className=' dark::opacity-50 opacity-80 font-thin tracking-[3px]'>{Future} </p>
               </div>)})}
      { Item.UbAbleableFuture.map((Future,indexThere )=>{
       return (
         <div key={indexThere} className=" flex items-center justify-center gap-2 opacity-35">
         <TiTimes  className={`${textColor} font-extrabold`} />
         <p className=' dark::opacity-50 opacity-80 font-thin tracking-[3px]'>{Future}</p>
         </div>)})}
    </div>
    <Link href={'/'} className={`flex items-center justify-center gap-1  transition-all duration-300 cursor-pointer hover:gap-4 absolute bottom-3 w-full ${textColor} font-[500]`}>
     <p>Order now  </p>
     <TiChevronRight />
    </Link>
   </div>
)})}
 </div>
</div>
)
}

export default PriceSection