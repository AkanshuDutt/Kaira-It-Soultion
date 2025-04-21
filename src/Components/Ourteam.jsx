import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Akanshu from "../assets/OurTeamImages/Akanshu.jpg";
import Manhor from '../assets/OurTeamImages/Manhor.jpeg'
import shivam from '../assets/OurTeamImages/Shivam .jpg'
import Umeesh from '../assets/OurTeamImages/Umeesh.jpg'
import founder from '../assets/OurTeamImages/Founder.jpeg'
import Ravi from '../assets/OurTeamImages/Ravi-Partap.jpeg'
import Ravir from '../assets/OurTeamImages/Ravi rai.jpeg'
import Prince from '../assets/OurTeamImages/Prince.jpg'
import Abhi from '../assets/OurTeamImages/Abhinandan.jpg'
import Arya from '../assets/OurTeamImages/Arya.jpg'
import ShivanK from '../assets/OurTeamImages/Shivamkumar.jpg'
import Saurabh from '../assets/OurTeamImages/SaurabhPal.jpg'


const cards = [
  { name: "Ram Pratap", role: "(Founder & CEO)", image: founder,},
  { name: "Umeesh Kumar", role: "( Team Leader )", image:Umeesh,},
  { name: "Manohar Kr Jha", role: "(Full Stack Developer)", image: Manhor,},
  { name: "Shivam Sharma ", role: "(Software Developer)", image: shivam,},
  { name: "Akanshu Dutt", role: "( Full Stack Developer)", image: Akanshu,},
  { name: "Ravi Pratap ", role: "( Full Stack Developer)", image:Ravi,},
  { name: " Saurabh  kumar  " , role: "( Front-End Developer) ", image:""},
  { name: "Prince Yadav", role: " (Digital Marketing Expert)", image: Prince,},
  { name: "Ravi Rai", role: "( Software Developer )", image:Ravir,},
  { name: "Abhinandan Mishra" , role: "( Digital Marketing  Expert )", image: Abhi,},
  { name: "Arya Tyagi " , role: "(Fron-End Developer ) ", image: Arya},
  { name: "Shivam Kumar  " , role: "(Digital Marketing Expert ) ", image:ShivanK},
  { name: " Saurabh Pal " , role: "(Android app developer) ", image:Saurabh},
  
];

const OurTeam = () => {
  return (
    <div  className="  py-9 mb-20 rounded-full">
      <h2 className="text-3xl font-bold text-center mb-5 text-blue-600 mt-10  hover:scale-105">Our Team</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay:900, disableOnInteraction: false  } }
        modules={[Pagination, Autoplay]}
        className="max-w-4xl mx-auto"
         
      >
        {cards.map((member, index) => (
          <SwiperSlide key={index}>
            <div className=" p-6 rounded-2xl shadow-lg flex flex-col items-center text-center  ">
              <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover object-left-top mb-4 hover:scale-120" />
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <p className="text-gray-500 pb-10">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
