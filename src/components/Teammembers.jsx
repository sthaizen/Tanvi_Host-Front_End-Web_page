import React from "react";
import Slider from "react-slick";
import hari from '../assets/hari.jpg';
import ram from '../assets/ram.jpg';
import baha from '../assets/baha.jpg';
import shyam from '../assets/shyam.jpg';

export default function Index() {
  const teamMembers = [
    {
      name: "Northern Lights Lodge",
      role: "Tromsø, Norway",
      image: hari,
    },
    {
      name: "Ethan Reynolds",
      role: "UX/UI Designer",
     image: shyam,
    },
    {
      name: "Liam Carter",
      role: "Lead Software Engineer",
      image: baha,
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      image: ram,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5 py-10 flex flex-col items-center gap-10 mb-6">
        <div className="flex flex-col items-center gap-[9px] text-center max-w-[763px]">
          <h1 className="text-black/80 font-medium text-3xl md:text-[40px] leading-[120%]  dm-sans3 md:mb-4 text">
            Our team of experts are here to help
          </h1>
          <p className="text-black  max-w-[560px] dm-sans text-[18px] sm:text-[20px]">
            Get support 24/7, with our award-winning network of growth experts
          </p>
        </div>
      </div>

      <div className="pb-10">
        <div className="w-full max-w-[1200px] mx-0 md:mx-18 px-5 ">
          {/* Mobile Slider */}
          <div className="block lg:hidden ">
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full h-[365px] rounded-2xl overflow-hidden relative flex flex-col justify-end "
                  style={{
                    boxShadow: "11px 11px 30.4px 0 rgba(0, 0, 0, 0.25)",
                  }}
                >
                   <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url("${member.image}")`,
                    filter: "grayscale(100%)", 
                    transition: "filter 0.3s ease", 
                  }}
                />
                <div className="relative z-[2] p-3 rounded-2xl m-2 bg-white/[0.62]">
                  <div className="flex flex-col gap-1">
                    <div className="dm-sans2 text-[18px] font-normal leading-normal text-black m-0">
                      {member.name}
                    </div>
                    <div className="dm-sans3 text-[14px] font-medium leading-normal text-[#4f4f53] m-0">
                      {member.role}
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex gap-7 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-[355px] h-[365px] rounded-2xl overflow-hidden relative flex flex-col justify-end flex-shrink-0 transition-transform duration-300 ease-in-out transform transition-transform duration-500 ease-in-out hover:scale-102 hover:shadow-xl cursor-pointer"
                
              >
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url("${member.image}")`,
                    filter: "grayscale(100%)", 
                    transition: "filter 0.3s ease", 
                  }}
                />
                <div className="relative z-[2] p-3 rounded-2xl m-2 bg-white/[0.62]">
                  <div className="flex flex-col gap-1">
                    <div className="dm-sans2 text-[18px] font-normal leading-normal text-black m-0">
                      {member.name}
                    </div>
                    <div className="dm-sans3 text-[14px] font-medium leading-normal text-[#4f4f53] m-0">
                      {member.role}
                    </div>
                  </div> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
