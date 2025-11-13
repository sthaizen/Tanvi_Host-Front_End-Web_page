import React from 'react';
import assets from '../assets/assets';

const PlatformHowItWorks = () => {
  return (
    <div className="p-8 rounded-lg mt-20 ml-10 md:ml-20 ">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left Section (Text Content) */}
        <div className="flex-1">
          <h2 className="text-[40px] sm:text-[45px] font-bold text-black mb-1 dm-sans ">
            How Our Platform Works
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-700 mb-10 dm-sans">
            The Corporate Office of TanviTech Pvt.Ltd. Situated at Narepahat–32, Jadibuti, Kathmandu Municipality.
            TanviTech Pvt.Ltd. is a leading IT company that provides various services and some real-life problem-solving solutions,
            maintaining uniqueness in its brand and services as a professional computer institute in Nepal since its establishment in 2020.
          </p>

          {/* Features as a List */}
          <ul className="space-y-10">
            {/* Feature 1 */}
            <li className="flex items-start gap-4">
              <div className="w-15 h-15 bg-[#f5f5f5] text-white flex items-center justify-center rounded-full">
                
                <img src={assets.loaction} alt="Choose Your Destination" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-[22px] font-extrabold text-black/65 dm-sans2">Choose Hosting Plan</h3>
                <p className="text-[16px] text-gray-700 dm-sans">
                  Select from various hosting plan avilable from out platfrom.
                </p>
              </div>
            </li>

            {/* Feature 2 */}
            <li className="flex items-start gap-4">
              <div className="w-15 h-15 bg-[#f5f5f5] text-white flex items-center justify-center rounded-full">
                {/* Image for Icon */}
                <img src={assets.bag} alt="Personalize Your Hosting Experience" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-black/65 dm-sans2">Personalize Your Hosting Experience</h3>
                <p className="text-[16px] text-gray-700 dm-sans">
                  Get custom itineraries tailored to your preferences.
                </p>
              </div>
            </li>

            {/* Feature 3 */}
            <li className="flex items-start gap-4">
              <div className="w-15 h-15 bg-[#f5f5f5] text-white flex items-center justify-center rounded-full">
                
                <img src={assets.path} alt="Host Effortlessly" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-black/65 dm-sans2">Host Effortlessly</h3>
                <p className="text-[16px] text-gray-700 dm-sans">
                  Book and explore hosting plans without hassle.
                </p>
              </div>
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="mt-12 flex justify-start pointer ">
        <button className="px-5 py-2 bg-[#f2f3f6] text-black rounded-full dm-sans cursor-pointer">
            Contact Us
        </button>
        </div>

        </div>

        {/* Right Section (Image Placeholder) */}
        <div className="flex-1">
          <div className="w-full sm:w-[650px] h-[300px] sm:h-[580px]">
            <video 
              src={assets.plan} 
              className="w-full h-full object-cover rounded-[16px]"
              loop
              muted
              autoPlay
              playsInline
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default PlatformHowItWorks;
