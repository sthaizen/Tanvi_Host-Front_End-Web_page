import React from 'react';
import assets from '../assets/assets'; // Make sure the images are in your assets folder

const PackageCard = ({ image, title, description }) => (
  <div className='relative w-full sm:w-[490px] h-[460px] sm:h-[500px] overflow-hidden rounded-[16px] shadow-lg'>
    <div 
      className='w-full h-full bg-cover bg-center' 
      style={{ backgroundImage: `url(${image})` }} 
    />
    <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4'>
      <h3 className='text-[24px] sm:text-[28px] font-semibold text-white dm-sans ml-2'>{title}</h3>
      <p className='text-[16px] sm:text-[18px] text-white dm-sans mb-4 ml-2'>{description}</p>
    </div>
  </div>
);

const PackageCarousel = () => {
  return (
    <div className='px-4 sm:px-0 scale-97'>
      <h2 className='text-[32px] sm:text-[50px] font-bold text-center mb-5 dm-sans text-black/75'>
        The Technology Powering Your <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'> Success</span>
      </h2>
      <p className='text-[18px] sm:text-[22px] text-center mb-12 dm-sans'>
        See why developers, businesses, and agencies trust TanviTech, then <br /> revisit our packages with confidence.
      </p>
      
      <div className='flex flex-wrap justify-center gap-[24px]'>
        <PackageCard 
          image={assets.tunda} 
          title="Taudha"
          description="(तौध) Package"
        />
        <PackageCard
          image={assets.bharav}
          title="BhairavKunda"
          description="(भैरवकुण्ड) Package"
        />
        <PackageCard
          image={assets.gosai}
          title="GosaiKunda"
          description="(गोसाइकुण्ड) Package"
        />
      </div>
      <div className='text-center mt-12'>
        <button className='px-6 py-3 bg-black text-white rounded-full dm-sans'>
          Explore more
        </button>
      </div>
    </div>
  );
};

export default PackageCarousel;
