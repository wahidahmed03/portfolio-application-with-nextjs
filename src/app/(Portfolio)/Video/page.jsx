"use client"
import React from 'react'
import { useSelector } from 'react-redux';
const VideoLink = [
    "https://www.youtube.com/embed/zdu5kWIANew?si=CGF-rp2SI6_I6rL_",
    "https://www.youtube.com/embed/1TSJqcMXuYc?si=9nYtoV0UnJ8ToLDm",
    "https://www.youtube.com/embed/mR1qntCwNUs?si=XhZCeZ-CbB27B2qv",
    "https://www.youtube.com/embed/YivIazJo5yU?si=_4QquGgoFyLfQMQe",
    ]


function Video() {
    const { bgColor, textColor, borderColor, bgHoverColor } = useSelector((state) => state.themeColor);

  return (
 <>
 <div className="w-full min-h-screen">

 <div className=" px-10 py-5 flex gap-2 flex-wrap">
  { VideoLink.map((VideoLink,index)=>{
    return(
  <div key={index} className={`w-[400px] h-[227px] overflow-hidden bg-gray-200/20 dark:bg-gray-800 rounded shadow hover:shadow-2xl border ${borderColor} transition-all duration-300`}>
   <iframe width="400" height="230" src={VideoLink} allowFullScreen  ></iframe>
  </div>
  )})}
 </div>
 </div>
 </>
  )
}

export default Video



