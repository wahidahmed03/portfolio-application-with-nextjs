import React, { useState, useEffect } from 'react';
import { setCookie,getCookie } from 'cookies-next';


/// REDUX CONFIGURATION
import { useSelector, useDispatch } from 'react-redux';
import { changeBgColor, changeTextColor, changeBorderColor ,changebgHoverColor,changethemeSecandaryColor } from '@/components/Redux/ThemeColorSlice'; 


function ThemeColorBar() {
    const { bgColor, textColor, borderColor,bgHoverColor ,themeSecandaryColor } = useSelector((state) => state.themeColor);

    const [ IsThemeColorBarOpen,setIsThemeColorBarOpen ] = useState(false)
    const [BgThemeColorSelected, setBgThemeColorSelected] =useState(bgColor)
    const [AnimationMargin,setAnimationMargin] = useState("ml-[4.5px]")
    const dispatch = useDispatch();


    useEffect(() => {
        switch (BgThemeColorSelected) {
            case "bg-blue-500":
                setAnimationMargin("ml-[-277px]");
                break;
            case "bg-yellow-500":
                setAnimationMargin("ml-[-240px]");
                break;
            case "bg-green-500":
                setAnimationMargin("ml-[-201px]");
                break;
            case "bg-red-500":
                setAnimationMargin("ml-[-164px]");
                break;
            case "bg-fuchsia-500":
                setAnimationMargin("ml-[-126px]");
                break;
            case "bg-teal-500":
                setAnimationMargin("ml-[-88px]");
                break;
            case "bg-pink-500":
                setAnimationMargin("ml-[-50px]");
                break;
            case "bg-orange-500":
                setAnimationMargin("ml-[-11.5px]");
                break;
            default:
                setAnimationMargin("ml-[119px]");
        }
    }, [BgThemeColorSelected]);
    useEffect(()=>{
        const ThemeColor = getCookie("ThemeColor")
        if(ThemeColor == "blue") ChangeThemeColorToBlue()
        if(ThemeColor == "yellow") ChangeThemeColorToyellow()
        if(ThemeColor == "green") ChangeThemeColorTogreen()
        if(ThemeColor == "red") ChangeThemeColorTored()
        if(ThemeColor == "fuchsia") ChangeThemeColorToFuchsia()
        if(ThemeColor == "teal") ChangeThemeColorToTeal()
        if(ThemeColor == "pink") ChangeThemeColorToPink()
        if(ThemeColor == "orange") ChangeThemeColorToOrange()
    },[])

    const ChangeThemeColorToBlue =()=>{
        setBgThemeColorSelected("bg-blue-500")

        dispatch(changeBgColor('bg-blue-500'));
        dispatch(changebgHoverColor('hover:bg-blue-200/30'));
        dispatch(changeTextColor('text-blue-500'));
        dispatch(changeBorderColor('border-blue-500'));
        dispatch(changethemeSecandaryColor("bg-blue-500/20"))
        setCookie('ThemeColor', 'blue');
    }
    const ChangeThemeColorToyellow =()=>{
        setBgThemeColorSelected("bg-yellow-500")

        dispatch(changeBgColor('bg-yellow-500'));
        dispatch(changebgHoverColor('hover:bg-yellow-200/30'));
        dispatch(changeTextColor('text-yellow-500'));
        dispatch(changeBorderColor('border-yellow-500'));
        dispatch(changethemeSecandaryColor("bg-yellow-500/20"))
        setCookie('ThemeColor', 'yellow');
    }
    const ChangeThemeColorTogreen =()=>{
        setBgThemeColorSelected("bg-green-500")

        dispatch(changeBgColor('bg-green-500'));
        dispatch(changebgHoverColor('hover:bg-green-200/30'));
        dispatch(changeTextColor('text-green-500'));
        dispatch(changeBorderColor('border-green-500'));
        dispatch(changethemeSecandaryColor("bg-green-500/20"))
        setCookie('ThemeColor', 'green');
    }
    const ChangeThemeColorTored =()=>{
        setBgThemeColorSelected("bg-red-500")

        dispatch(changeBgColor('bg-red-500'));
        dispatch(changebgHoverColor('hover:bg-red-200/30'));
        dispatch(changeTextColor('text-red-500'));
        dispatch(changeBorderColor('border-red-500'));
        dispatch(changethemeSecandaryColor("bg-red-500/20"))
        setCookie('ThemeColor', 'red');
    }
    const ChangeThemeColorToFuchsia =()=>{
        setBgThemeColorSelected("bg-fuchsia-500")

        dispatch(changeBgColor('bg-fuchsia-500'));
        dispatch(changebgHoverColor('hover:bg-fuchsia-200/30'));
        dispatch(changeTextColor('text-fuchsia-500'));
        dispatch(changeBorderColor('border-fuchsia-500'));
        dispatch(changethemeSecandaryColor("bg-fuchsia-500/20"))
        setCookie('ThemeColor', 'fuchsia');
    }
    const ChangeThemeColorToTeal = ()=>{
        setBgThemeColorSelected("bg-teal-500")

        dispatch(changeBgColor('bg-teal-500'));
        dispatch(changebgHoverColor('hover:bg-teal-200/30'));
        dispatch(changeTextColor('text-teal-500'));
        dispatch(changeBorderColor('border-teal-500'));
        dispatch(changethemeSecandaryColor("bg-teal-500/20"))
        setCookie('ThemeColor', 'teal');
    }

    const ChangeThemeColorToPink = ()=>{
        setBgThemeColorSelected("bg-pink-500")

        dispatch(changeBgColor('bg-pink-500'));
        dispatch(changebgHoverColor('hover:bg-pink-200/30'));
        dispatch(changeTextColor('text-pink-500'));
        dispatch(changeBorderColor('border-pink-500'));
        dispatch(changethemeSecandaryColor("bg-pink-500/20"))
        setCookie('ThemeColor', 'pink');
    }

    const ChangeThemeColorToOrange = ()=>{
        setBgThemeColorSelected("bg-orange-500")

        dispatch(changeBgColor('bg-orange-500'));
        dispatch(changebgHoverColor('hover:bg-orange-200/30'));
        dispatch(changeTextColor('text-orange-500'));
        dispatch(changeBorderColor('border-orange-500'));
        dispatch(changethemeSecandaryColor("bg-orange-500/20"))
        setCookie('ThemeColor', 'orange');
    }



return (
<>
<div className="relative" >

<div className={`w-[30px] h-[30px] ${bgColor} cursor-pointer rounded `} onClick={()=>setIsThemeColorBarOpen(!IsThemeColorBarOpen)} >
</div>

 <div className= {`absolute flex top-10 right-0 gap-2 ${themeSecandaryColor} py-2 px-2 ${IsThemeColorBarOpen ? 'block' :"hidden"}`}>
    <div className="w-[30px] h-[30px] bg-blue-600   rounded cursor-pointer" onClick={ChangeThemeColorToBlue}></div>
    <div className="w-[30px] h-[30px] bg-yellow-600 rounded cursor-pointer" onClick={ChangeThemeColorToyellow} ></div>
    <div className="w-[30px] h-[30px] bg-green-600  rounded cursor-pointer" onClick={ChangeThemeColorTogreen}></div>
    <div className="w-[30px] h-[30px] bg-red-600    rounded cursor-pointer" onClick={ChangeThemeColorTored}></div>
    <div className="w-[30px] h-[30px] bg-fuchsia-600   rounded cursor-pointer" onClick={ChangeThemeColorToFuchsia}></div>
    <div className="w-[30px] h-[30px] bg-teal-600   rounded cursor-pointer" onClick={ChangeThemeColorToTeal}></div>
    <div className="w-[30px] h-[30px] bg-pink-600   rounded cursor-pointer" onClick={ChangeThemeColorToPink}></div>
    <div className="w-[30px] h-[30px] bg-orange-600   rounded cursor-pointer" onClick={ChangeThemeColorToOrange}></div>
 </div>

 <div  className={`w-[37px] h-[37px] border-2  bg-transparent  ${borderColor} absolute top-[45px] transition-all duration-500 rounded ${AnimationMargin} ${IsThemeColorBarOpen ? 'block' :"hidden"}`}></div>
</div>
</>
)
}

export default ThemeColorBar