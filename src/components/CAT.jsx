import React from 'react';

const CAT = () => {
  return (
    <div className=" flex items-center justify-center bg-white p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[1216px] flex flex-wrap justify-between items-start gap-8 p-8 sm:p-12 md:p-16 rounded-2xl border-2 border-black/5">
        <div className="flex flex-col gap-4 w-full min-w-[280px] sm:min-w-[480px] max-w-[768px] flex-1">
          <h1 className="text-[28px] leading-normal font-normal text-black dm-sans2">
            Ready to Explore WebHosting?
          </h1>
          <p className="text-lg leading-normal font-normal text-[#4f4f53] dm-sans">
            Start your digital journey today with expert hosting solutions,
            effortless setup, for an unforgettable online experience.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-[40px] border border-[#4f4f53] text-[#4f4f53] text-base font-semibold dm-sans2 cursor-pointer transition-all duration-300 transform hover:bg-[#4f4f53] ease-in-out hover:text-white hover:scale-105">
        Learn more
        </button>
        <button className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-[40px] bg-black text-white text-base font-semibold dm-sans2 cursor-pointer transition-all duration-300 transform hover:bg-[#333] hover:scale-105 ease-in-out">
        Get Started
        </button>

        </div>
      </div>
    </div>
  );
};

export default CAT;
