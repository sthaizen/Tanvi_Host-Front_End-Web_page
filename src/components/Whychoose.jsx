import React from 'react';
import assets from '../assets/assets'; 

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-20 px-5 bg-light-bg">
      <div className="max-w-[1316px] mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-black font-medium text-3xl md:text-[40px] leading-[120%] dm-sans2 ">
            Why choose us?
          </h2>
        </div>

        <div className="text-center ">
          <button className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent font-medium text-sm hover:underline inline-flex items-center gap-2 cursor-pointer">
            View all features
            <svg
              className="w-5 h-4 "
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
             
            </svg>
          </button>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 cursor-pointer">
          <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-gray-200 transition-transform hover:scale-102 duration-300 ease-in-out">
            <div className="w-16 h-16 rounded-full flex items-center justify-center ">
              <img src={assets.cube} alt="Reliable Infrastructure" className="w-13 h-15 object-contain" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-black dm-sans2 ">Reliable Infrastructure</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Host your website on cutting-edge, high-performance servers designed for maximum uptime and reliability.
              Experience seamless performance with advanced caching and SSD storage that keeps your site running fast.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-gray-200 transition-transform hover:scale-102 duration-300 ease-in-out">
            <div className="w-16 h-16rounded-full flex items-center justify-center">
              <img src={assets.shield} alt="Secure & Protected" className="w-15 h-15 object-contain" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-black dm-sans2 ">Secure & Protected</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Your security is our priority. We use advanced firewalls, malware protection, and daily backups to safeguard
              your data. Rest easy knowing your website and customers are protected 24/7 from online threats.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-gray-200 transition-transform hover:scale-102 duration-300 ease-in-out">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <img src={assets.hp} alt="24/7 Expert Support" className="w-15 h-15 object-contain" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-black dm-sans2">24/7 Expert Support</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Our dedicated support team is here to help around the clock, ensuring you never face hosting challenges alone.
              Whether you’re launching your first website or managing a high-traffic platform, our experts are always a message away.
            </p>
          </div>
        </div>

        {/* Scalable Hosting Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 cursor-pointer">
        {/* First Feature Box */}
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 transition-transform hover:scale-103 duration-300 ease-in-out flex-1" style={{ background: 'linear-gradient(180deg, #012E6A 0%, #025AD0 100%)' }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center">
            <img src={assets.growth} alt="Scalable Hosting Plans" className="w-15 h-15 object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white dm-sans2">Scalable Hosting Plans</h3>
          <p className="text-white text-sm sm:text-base">
            From startups to large enterprises, our flexible hosting plans are designed to evolve with your business. 
            As your website grows and traffic demands increase, you can seamlessly scale your resources without experiencing downtime or disruptions.
          </p>
          <button className="w-[150px]  bg-[#08E14F]  text-black py-2 px-6 rounded-full mt-7 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer dm-sans2">
            Book Enquiry
          </button>
        </div>


        {/* Second Feature Box */}
      <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <video className="w-full h-auto rounded-lg" autoPlay loop muted >
          <source src={assets.vid2} type="video/mp4" />
        </video>
      </div>
    </div>
      </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
