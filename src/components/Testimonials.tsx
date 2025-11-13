import React from 'react';
import assets from '../assets/assets'; 

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As a developer managing multiple client sites, 100% network uptime and stability are non-negotiable. Any downtime not only affects my clients'  ",
      name: "Rajendra",
      title: "CEO, Addpoint",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/98cdaebb03d0b58d790bfc6758d555fff2366333?width=112",
    },
    {
      quote:
        "TanviTech delivered an Impressive Dental Management System that perfectly fit our clinic's unique workflow.",
      name: "Rakesh Ghimire",
      title: "Founder, MarsDentalCareHome Pvt.Ltd",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/98cdaebb03d0b58d790bfc6758d555fff2366333?width=112",
    },
    {
      quote:
        "Switching to TanviTech's Linux hosting was a game-changer for us. Our site speed scores jumped immediately, and we noticed a significant improvement in overall performance. Pages that once took several seconds to load now appear in an instant, ",
      name: "Nepal Organic Ghar",
      title: "NOG",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/98cdaebb03d0b58d790bfc6758d555fff2366333?width=112",
    },
  ];

  return (
    <section className="w-full py-12 md:py-10 px-5 ">
      <div className="max-w-[1921px] mx-auto flex flex-col gap-6">
        <h2 className="text-black font-medium text-3xl md:text-[40px] leading-[120%] text-center max-w-[720px] mx-auto dm-sans3">
          Read What Developers Say About Our <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent dm-sans3'> Rock-Solid Stability </span> and Support.
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-2 mt-18 relative cursor-pointer">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className={`flex flex-col gap-12 p-5 rounded-2xl border border-[#E5E5E5] bg-white 
      ${index === 0 ? 'md:-ml-10 lg:ml-[-5vw]' : ''} 
      ${index === 2 ? 'md:-mr-20 lg:mr-[-20vw]' : ''}
      transition-all duration-300 ease-in-out transform hover:scale-101 hover:shadow-lg`}
    >
      <p className="text-black text-xl md:text-[28px] leading-normal font-medium dm-sans ">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-start gap-4 ">
        {testimonial.avatar && (
          <div className="flex flex-col items-start">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="text-black font-semibold text-lg dm-sans">{testimonial.name}</div>
            <div className="text-gray-500 text-sm">{testimonial.title}</div>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Testimonials;
