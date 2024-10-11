import React from 'react';
import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoFigma,
    IoLogoFirebase,
    IoLogoPython,
    IoLogoReact,
    IoLogoSass,
    IoLogoWordpress,
    IoLogoTux,
    IoPrism,
} from 'react-icons/io5';

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
];

function SkillLogoAnimation() {
    return (
        <div className="relative overflow-hidden w-[96%]">
            <div className="flex animate-slide gap-2 py-5">
                {SkillIcon.map((skillIcon, index) => (
                    <div
                        key={index}
                        className="w-[150px] h-[100px] bg-gray-200/50  dark:bg-BgDarksecandary  flex items-center justify-center text-3xl rounded border dark:border-gray-700"
                    >
                        {skillIcon.Skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillLogoAnimation;
