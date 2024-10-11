import Link from 'next/link';
import React, { useState, } from 'react';
import { TbLogin2, } from "react-icons/tb";
import Uptextanimation from './Uptextanimation';
import Image from 'next/image';


function UserAccoutInfoCom() {
    const [isUserLogin, setIsUserLogin] = useState(false);
    const border = "border-[0.5px] border-gray-300 dark:border-gray-600 rounded";

 return (
<>

 {isUserLogin ?
  <Link href={"/auth/login"} className={`${border} py-[2px] px-3 rounded hidden sm:flex items-center justify-center gap-2`}>
   <TbLogin2 size={18} /> <Uptextanimation title='Dashbord' />
  </Link>:
  <Link href={""} className={`${border}  py-[2px] px-3 rounded flex items-center justify-center gap-2`}>
   <TbLogin2 size={18} /> <Uptextanimation title='Login' />
  </Link>}
 { isUserLogin ?
  <Link href={'/'} className="w-[35px] h-[35px] border rounded border-gray-300 dark:border-gray-700">
   <Image src={isUserLogin} width={35} height={35} className='w-[35px] h-[35px] rounded' alt="" />
   </Link>:""
}

</>
)
}

export default UserAccoutInfoCom