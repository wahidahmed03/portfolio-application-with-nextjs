import Uptextanimation from "@/components/Header/utilities/Uptextanimation";
import TextTypingAnimation from "./TextTypingAnimation";
import { useSelector } from 'react-redux';
import Link from "next/link";


function HeroSectionPhoCom() {
  const { bgColor, textColor, borderColor, bgHoverColor } = useSelector((state) => state.themeColor);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center w-full h-[450px] sm:h-[350px] bg-white/50 dark:bg-black/80 relative">
      
        <div className="w-full sm:w-[50%] sm:pl-4 flex flex-col  gap-3 order-2 sm:order-1">
          <div className="font-black text-4xl sm:py-5 text-center sm:text-left">
            Discover my Amazing <br /> Art Space!
          </div>
          <div className={`flex gap-1 text-xl ${textColor} font-medium`}>
            {"<code>"} <TextTypingAnimation /> {"</code>"}
          </div>
          <Link href='/Project' className={`w-[180px] py-2 px-1 ${bgColor} flex items-center justify-center mt-5 group cursor-pointer text-lg font-medium group-hover:bg-blue-700`}>
            <Uptextanimation title={"Explore now"} />
          </Link>
        </div>
      
        <div className="sm:w-[50%] order-1 sm:order-2">
          <img src={'/wahid.png'} alt="Art space visual representation" className="sm:absolute sm:bottom-0 sm:right-0 w-[200px] h-[270px] sm:h-[490px] sm:w-[320px] -mt-20 md:mt-0" />
        </div>
      
      </div>
    </>
  );
}

export default HeroSectionPhoCom;
