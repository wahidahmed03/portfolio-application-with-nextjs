import Link from 'next/link'
import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { useSelector } from 'react-redux'


const MyServiceDetails = [
  {
    title: "Mern Application",
    discription: "I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React.js, and Node.js. From creating robust back-end APIs to designing seamless user interfaces, I focus on delivering full-stack solutions that enhance user experience and functionality.",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "Next.js Application",
    discription: "I specialize in building high-performance, scalable web applications with seamless user experiences. My focus is on creating dynamic and responsive interfaces, leveraging the power of React and Next.js to deliver modern, fast-loading websites and apps.",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "React.js Application",
    discription: "I create dynamic, responsive web applications with a focus on performance and user experience. By leveraging React's component-based architecture, I build scalable solutions that deliver seamless, interactive, and efficient front-end interfaces.",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "Node.js REST API Solutions",
    discription: "I am a skilled Node.js and Express API developer with a strong focus on building efficient, scalable, and secure backend solutions. I specialize in developing RESTful APIs, integrating databases, and optimizing server performance for seamless user experiences.",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "Laravel API  Solutions",
    discription: "As a skilled Laravel API developer, I specialize in building robust, scalable, and secure APIs tailored to meet business needs. My experience with Laravel allows me to create seamless backend solutions that ensure efficient communication between applications, delivering high-performance and reliable services",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "Laravel Web Application",
    discription: "As a Laravel web application developer, I create dynamic, feature-rich, and secure web applications with clean, maintainable code. Leveraging the power of Laravel, I build scalable solutions tailored to deliver an optimal user experience and meet your business objectives.",
    Link: "/",
    icon: <GiWorld size={180} />
  }
  ,
  {
    title: "Webflow Development Solutions",
    discription: "As a Laravel web application developer, I create dynamic, feature-rich, and secure web applications with clean, maintainable code. Leveraging the power of Laravel, I build scalable solutions tailored to deliver an optimal user experience and meet your business objectives.",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "Wordpress Development Solutions",
    discription: "WordPress developer specializing in creating dynamic, SEO-friendly websites that are easy to manage and scale. From custom themes to advanced functionality, I design and develop tailored solutions that meet your unique needs. My focus is on building responsive, fast, and secure WordPress websites that provide a seamless user experience across all devices.",
    Link: "/",
    icon: <GiWorld size={180} />
  },
  {
    title: "Shopify  Development Solutions",
    discription: "Shopify developer focused on creating custom, high-converting eCommerce stores. I specialize in building user-friendly, visually appealing online shops that are optimized for performance and sales. From custom themes to advanced Shopify apps, I deliver scalable and secure solutions that help businesses grow their online presence and boost revenue.",
    Link: "/",
    icon: <GiWorld size={180} />
  }
];

function ServiceSection() {
  const { bgColor, textColor, borderColor, bgHoverColor }  = useSelector((state)=> state.themeColor)

  return (
    <div className='w-[97%] py-5 px-1 bg-gray-100 dark:bg-BgDarkPrimary text-black dark:text-white'>
      <div className="pb-10 pt-3">
        <p className='text-xl text-center sm:text-start'>My service</p>
      </div>

      <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
        {
          MyServiceDetails.map((Card, index) => {
            return (
              <div key={index} className="w-[320px] h-[230px] bg-gray-100 shadow-xl border-[0.7px] border-gray-300 dark:bg-BgDarksecandary py-5 px-3 flex flex-col gap-5 dark:border-gray-800 overflow-hidden relative">
                <p className='text-lg font-medium'>{Card.title}</p>
                <p className='text-sm h-[110px] overflow-scroll hide-scrollbar  font-light opacity-60'>{Card.discription}</p>
                <Link href={Card.Link} className={`flex items-center hover:gap-1 transition-all duration-300 ${textColor}`}>
                  <p>Order now</p>
                  <AiOutlineRight />
                </Link>
                <div className={`absolute -bottom-10 -right-10 ${textColor} opacity-20`}>
                  {Card.icon}
                </div>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default ServiceSection;
