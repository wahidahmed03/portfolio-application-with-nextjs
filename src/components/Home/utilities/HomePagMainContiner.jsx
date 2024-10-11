import React from 'react'
import HeroSectionPhoCom from './HeroSectionPhoCom'
import { useSelector } from 'react-redux'
import ServiceSection from './ServiceSection'
import PriceSection from './PriceSection'
import TestimonialSection from './TestimonialSection'
import SkillLogoAnimation from './SkillLogoAnimation'
import LeftRightSkillAnimation from './LeftRightSkillAnimation'

function HomePagMainContiner() {
    const { bgColor, textColor, borderColor, bgHoverColor }  = useSelector((state)=> state.themeColor)
return (
 <div className=" w-[100vw] lg:w-[88vw]">
    
  <div className=" w-full sm:pl-[13px] pt-3">
   <div className="sm:pl-[265px] w-full  h-full   pt-[50px] sm:pr-2 ">
      <div className="w-[97%] h-[450px]  sm:h-[350px] relative bg-[url('/bg.png')] bg-center">
      <HeroSectionPhoCom />
      </div>
   </div>
  </div>

  <div className=" w-[99vw] lg:w-[88vw]   lg:pl-[20px] overflow-hidden" >
    <div className=" w-[20000px]">
     < LeftRightSkillAnimation />
    </div>
  </div>

  <div className="w-full">
   <div className={`w-full  py-3  flex  items-center justify-around flex-wrap gap-5 ${textColor}`} >
     <p className=' text- flex gap-7 items-center justify-center '> <span className='  text-[29px]'>10 +</span> Years Experience </p>
     <p className=' text- flex gap-7 items-center justify-center '> <span className='   text-[29px]  '>10 +</span> Completed Projects </p>
     <p className=' text-sm flex gap-5'> <span className='   text-[29px]'>10+</span> Happy Customers       </p>
     <p className=' text-sm flex gap-5'> <span className=' text-[29px] '>3+</span>Honors and Awards </p>
   </div>
 </div>
 <div className=" w-[100vw] sm:w-full pl-0 pb-5  sm:pl-[300px] ">
  <ServiceSection />
  <PriceSection />
  <TestimonialSection />
  <SkillLogoAnimation />
</div>




 </div>
)
}

export default HomePagMainContiner