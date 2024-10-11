import Image from 'next/image';
import React, { useEffect, useState,   } from 'react';

import { TiChevronRightOutline,TiChevronLeftOutline,TiStarOutline ,TiStarFullOutline ,TiStarHalfOutline  } from "react-icons/ti";


import { useSelector } from 'react-redux'


const testimonials = [
  {
    id: 1,
    name: 'santideoleo',
    position: 'Developer',
    From:"United States",
    description: "I recently had the pleasure of working with Wahid for the second time, and I can confidently say he is the most professional and talented person I've encountered on this platform. Wahid expertise in designing Shopify pages is unparalleled. He took my vision and turned it into a stunning, user-friendly site that perfectly aligns with my brand’s aesthetic. What sets wahid apart is his keen attention to detail and commitment to excellence. He goes above and beyond to ensure every element is crafted to perfection, leaving no stone unturned. His communication is prompt, clear, and always professional, making the collaboration process seamless and enjoyable. Beyond his technical skills, Wahid brings a level of creativity and innovation that is truly remarkable. He is always open to feedback and continuously strives to exceed expectations. I’m incredibly impressed with the outcome of both projects we've worked on, and there’s no doubt in my mind that I’ll be reaching out to him again for future work. If you’re looking for a designer who is not only skilled but also dedicated and reliable, Wahid is your guy. Highly recommend!",
    img:"https://i.ibb.co.com/qBPqRqc/380-A971-D-153-F-45-C2-8644-B44-D6412-D417.webp"
  },
  {
    id: 2,
    name: 'drstemmahlatini',
    position: 'Designer',
    From:"Hong Kong",
    description: "I had the pleasure of working with Talal on a recent web development project, and I couldn’t be more satisfied with the results. From start to finish, he displayed an exceptional level of skill, creativity, and professionalism. Expertise and Skills: Talal has an in-depth understanding of modern web development technologies, including GitHub and Vercel implemented responsive design effortlessly, ensuring that our site looked perfect across all devices. Final Product: The final website was exactly what I envisioned — sleek, fast, and user-friendly. Talal's attention to detail was evident in every aspect, from the clean, well-structured code to the intuitive user experience. Thank you!",
    img:"https://i.ibb.co.com/527DxFW/F661526-F-BDAA-480-E-820-A-3-E3-F058590-B1.webp"

  },
  {
    id: 3,
    name: 'smultack',
    position: 'Designer',
    From:"India",
    description: "I can’t thank him enough for all the support he gave us. This freelancer is in the top 1% of the Fiverr marketplace, and as a Fiverr Pro customer, our team made several requests for edits. He managed to get each one done in under 24 hours. If you’re looking for a developer who is both thoughtful and smart, he’s definitely the one to go with.",
    img:"https://i.ibb.co.com/PcXTjmK/89ab9ab3-174d-4588-938c-767c0781adfe.webp"

  },
  {
    id: 4,
    name: 'pascalkollie',
    position: 'Designer',
    From:"United Kingdom",
    description: "I want to express my deepest gratitude to Zohaib for the outstanding work he did with Next.js on my project. His technical expertise, attention to detail, and commitment were essential in bringing this project to fruition. Thanks to his skills, we developed a high-performance application perfectly tailored to our needs. I highly recommend Zohaib to anyone looking for a skilled and dedicated professional. Thank you, Zohaib, for your excellent work and invaluable contribution.",
    img:"https://i.ibb.co.com/8zmqmFr/c321e53e-068c-493c-a596-22f04ad0ffc1.webp"

  },
  {
    id: 5,
    name: 'dennisr',
    position: 'Designer',
    From:"Germany",
    description: "Working with Basit on my app since January. I like the way he approaches problems and tries to optimize things while also having the future development of the app in mind (making the app dynamic etc). It definitely shows that he cares about the app and the expandability of features and not just about money",
    img:"https://i.ibb.co.com/PhJ8QS1/601-E4202-4-CA7-4-B4-D-B90-D-8104-B6-E872-AE.webp"

  },
  {
    id: 6,
    name: 'estanislao',
    position: 'Designer',
    From:"United States",
    description: "I had a pleasure of working with Wahid, and she exceeded my expectations in everyday. Experienced developer. Her skills and commitment to delivering high quality on timely deadlines is awesome. Reach out to her and ask her directly.!",
    img:"https://i.ibb.co.com/92CcXzy/JPEG-20210916-115224-8069341502476949893.webp"

  },
  {
    id: 7,
    name: 'usamadeakin',
    position: 'Designer',
    From:"Australia",
    description: "Once again I have worked with Coder Expert Team, I guess these guys are my go-to team for Figma to React! Will work again! Highly Recommended",
    img:"https://i.ibb.co.com/fxvFrcR/E519-C03-B-6-FE1-4750-A34-B-51196-F0903-AB.webp"

  },
  {
    id: 8,
    name: 'abubakerashiq',
    position: 'Designer',
    From:"United Kingdom",
    description: "Great Work in a timely manner. I will definitely work with Coder Expert in Future. Highly Recommend ♥️",
    img:"https://i.ibb.co.com/h1fph80/97929f0f-6dd2-457b-915a-e29772ec4c8e.webp"

  },
  {
    id: 9,
    name: 'svenp',
    position: 'Designer',
    From:"Netherlands",
    description: "Awesome experience. Seller was quick in the communication and delivered 2 days early. Would recommend!",
    img:"https://i.ibb.co.com/527DxFW/F661526-F-BDAA-480-E-820-A-3-E3-F058590-B1.webp"

  },
  {
    id: 10,
    name: 'iamsanwar',
    position: 'Designer',
    From:"United Kingdom",
    description: "I had the pleasure of working with Amir on the design of our website page, and I couldn't be more impressed with his work! From the very start, Amir was attentive, creative, and incredibly professional. He truly understood our vision and turned it into a visually stunning and user-friendly design. His attention to detail and commitment to ensuring everything was perfect made the whole process smooth and enjoyable. The end result exceeded all of our expectations, and I would highly recommend Amir to anyone looking for top-notch design work. Thank you, Amir, for your outstanding contribution.",
    img:"https://i.ibb.co.com/jH7GKdy/4a5d40bd-c70d-4b95-bdf8-fdc4296dcba4.webp"

  }
];

const TestimonialSection = () => {
  const { bgColor, textColor, borderColor, bgHoverColor }  = useSelector((state)=> state.themeColor)

  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(next, 3000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Testimonials</div>
        <div className="flex space-x-2 text-white">
          <button className={`${bgColor} dark:bg-BgDarksecandary p-2 rounded`} onClick={prev}>
          <TiChevronLeftOutline />
          </button>
          <button className={`${bgColor} dark:bg-BgDarksecandary p-2 rounded`} onClick={next}>
          <TiChevronRightOutline />
          </button>
        </div>
      </div>
      <div className="overflow-hidden py-5">
        <div  className="flex transition-transform duration-500 gap-3" style={{  transform: `translateX(-${currentIndex * 320}px)`, }} >

          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className=" flex-shrink-0"  >
              <div className="w-[330px] h-[200px] bg-gray-100 border border-gray-300 shadow-xl dark:bg-BgDarksecandary  dark:border-gray-700  relative">
                <div className="px-4 py-2">
                  <p className={` uppercase`} >{testimonial.name}</p>
                  <p>{testimonial.From}</p>
                </div>
                <div className="px-4 overflow-scroll hide-scrollbar h-[100px]">
                  <p>{testimonial.description}</p>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-black absolute -top-5 right-1  flex items-center justify-center">
                  <img src={testimonial.img} className=' rounded-full'  width={60} height={60} alt='user profile img' />
                </div>
                <div className=" flex py-2 text-lg px-2 text-yellow-600 ">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline  />
                   <TiStarOutline  />
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
