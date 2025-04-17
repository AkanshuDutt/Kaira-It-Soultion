import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import img from "../assets/Akanshu.jpg";

const cards = [
  { name: "Ram Pratap", role: "(Founder)", image: "",},
  { name: "Akanshu Dutt", role: "(Frontend Developer)", image: img,},
  { name: "Abc", role: " Role:- NA", image: "",},
  { name: "DEF", role: " Role:- NA", image: "",},
  { name: "GHI", role: " Role:- NA", image: "",},
  { name: "GHI", role: " Role:- NA", image: "",},
  { name: "GHI", role: " Role:- NA", image: "",},
  { name: "GHI", role: " Role:- NA", image: "",},
  { name: "GHI", role: " Role:- NA", image: "",},
  { name: "GHI", role: " Role:- NA", image: "",},
];

const OurTeam = () => {
  return (
    <div  className=" py-9 mb-20 rounded-full">
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
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 hover:scale-120" />
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
