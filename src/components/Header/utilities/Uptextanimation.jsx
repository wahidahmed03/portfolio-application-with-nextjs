import React from 'react'

function Uptextanimation({title}) {
  return (
    <>
        <div className=" flex flex-col gap-1 overflow-hidden h-7  group ">
            <p className=' group-hover:-mt-[30px] transition-all duration-300 '>{title}</p>
            <p>{title}</p>
        </div>
    </>
  )
}

export default Uptextanimation