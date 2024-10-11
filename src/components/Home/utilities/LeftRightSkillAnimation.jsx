import React, { useEffect, useState } from 'react';
import {  IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoFigma, IoLogoFirebase, IoLogoPython, IoLogoReact, IoLogoSass, IoLogoWordpress, IoLogoTux, IoPrism,} from 'react-icons/io5';

const SkillIcon = [
    { Skill: <IoLogoHtml5 /> },
    { Skill: <IoLogoCss3 /> },
    { Skill: <IoLogoJavascript /> },
    { Skill: <IoLogoNodejs /> },
    { Skill: <IoLogoFigma /> },
    { Skill: <IoLogoFirebase /> },
    { Skill: <IoLogoPython /> },
    { Skill: <IoLogoReact /> },
    { Skill: <IoLogoSass /> },
    { Skill: <IoLogoWordpress /> },
    { Skill: <IoLogoTux /> },
    { Skill: <IoPrism /> },
    { Skill: <IoLogoHtml5 /> },
    { Skill: <IoLogoCss3 /> },
    { Skill: <IoLogoJavascript /> },
    { Skill: <IoLogoNodejs /> },
    { Skill: <IoLogoFigma /> },
    { Skill: <IoLogoFirebase /> },
    { Skill: <IoLogoPython /> },
    { Skill: <IoLogoReact /> },
    { Skill: <IoLogoSass /> },
    { Skill: <IoLogoWordpress /> },
    { Skill: <IoLogoTux /> },
    { Skill: <IoPrism /> },
    
];

import { useSelector } from 'react-redux'


function LeftRightSkillAnimation() {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const { bgColor, textColor, borderColor, bgHoverColor }  = useSelector((state)=> state.themeColor)


    useEffect(() => {
        let lastScrollTop = 0;
        
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setIsScrollingDown(true);  // Scrolling down
            } else {
                setIsScrollingDown(false); // Scrolling up
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <div className={`py-5 ${textColor}`} >

        <div className={`relative overflow-hidden w-full ${isScrollingDown ? 'animate-slide-right' : 'animate-slide-left'}`}>
            <div className="flex gap-2 ">
                {SkillIcon.map((skillIcon, index) => (
                    <div
                    key={index}
                    className={`w-[120px] h-[80px] bg-gray-200/50 dark:hover:${bgHoverColor} dark:bg-BgDarksecandary flex items-center justify-center text-3xl rounded border dark:border-gray-700`}
                    >
                        {skillIcon.Skill}
                    </div>
                ))}
            </div>
        </div>

        <div className={`relative overflow-hidden w-full ${isScrollingDown ? 'animate-slide-left' : 'animate-slide-right' }`}>
            <div className="flex gap-2 py-1">
                {SkillIcon.map((skillIcon, index) => (
                    <div
                    key={index}
                    className="w-[120px] h-[80px] bg-gray-200/50 dark:bg-BgDarksecandary flex items-center justify-center text-3xl rounded border dark:border-gray-700"
                    >
                        {skillIcon.Skill}
                    </div>
                ))}
            </div>
        </div>


    </div>
    );
}

export default LeftRightSkillAnimation;
