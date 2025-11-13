import React, { useState } from 'react';
import assets from '../assets/assets';

const ContactForm = ({ formData, setFormData, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="w-full lg:w-[579px] flex-shrink-0">
    <div className="flex gap-[13px] mb-[13px]">
      <div className="flex-1">
        <label className="block text-lg font-medium text-black mb-[6px] dm-sans2">
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full h-[55px] px-4 rounded-[10px] border border-[#D5DFFF] bg-[#FAFBFF] text-lg font-medium placeholder:text-black/17 focus:outline-none focus:ring-2 focus:ring-black/20"
        />
      </div>
      <div className="flex-1">
        <label className="block text-lg font-medium text-black mb-[6px] dm-sans2">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full h-[55px] px-4 rounded-[10px] border border-[#D5DFFF] bg-[#FAFBFF] text-lg font-medium placeholder:text-black/17 focus:outline-none focus:ring-2 focus:ring-black/20"
        />
      </div>
    </div>

    <div className="mb-[13px]">
      <label className="block text-lg font-medium text-black mb-[6px] dm-sans2">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full h-[55px] px-4 rounded-[10px] border border-[#D5DFFF] bg-[#FAFBFF] text-lg font-medium placeholder:text-black/17 focus:outline-none focus:ring-2 focus:ring-black/20"
      />
    </div>

    <div className="mb-[13px]">
      <label className="block text-lg font-medium text-black mb-[6px] dm-sans2">
        Phone number
      </label>
      <div className="relative">
        <input
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full h-[55px] pl-20 pr-4 rounded-[10px] border border-[#D5DFFF] bg-[#FAFBFF] text-lg font-medium placeholder:text-black/17 focus:outline-none focus:ring-2 focus:ring-black/20"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <span className="text-lg font-medium text-black">977+</span>
        </div>
      </div>
    </div>

    <div className="mb-11">
      <label className="block text-lg font-medium text-black mb-[6px] dm-sans2">
        Message
      </label>
      <textarea
        placeholder="Leave us a message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={6}
        className="w-full h-[196px] px-4 py-4 rounded-[10px] border border-[#D5DFFF] bg-[#FAFBFF] text-lg font-medium placeholder:text-black/17 focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
      />
    </div>

    <button
      type="submit"
      className="dm-sans2 w-[460px]  md:w-full h-[49px] rounded-[10px] bg-black border border-black text-white text-lg font-medium hover:bg-black/90 transition-colors cursor-pointer"
    >
      Send Message
    </button>
  </form>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-[1167px] mx-auto px-5 md:px-0 py-12 md:py-16 lg:py-20 font-dm-sans">
      <div className="flex flex-col items-center text-center mb-11">
        <h1 className="text-black/80 font-medium text-3xl md:text-[40px] leading-[120%]  dm-sans3 md:mb-4 text">
          Get in Touch
        </h1>
        <p className="text-black  dm-sans text-[18px] sm:text-[20px]">
          Want to speak someone about your hosting problems? we'd love to chat!!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-46 items-start md:mt-20">
        <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

        <div className="flex-1 space-y-[30px] lg:space-y-[56px] w-full lg:w-auto md:mt-15">
          <ContactInfoSection
            title="Call us"
            description="Call our team Mon-fri from 9am to 5pm"
            contact="+977 9851312180"
            icon={assets.call}
          />

          <ContactInfoSection
            title="Chat with us"
            description="Speak to our team via live chat"
            contact="TanviTech Pvt.Ltd."
            icon={assets.facebook}
            
          />

          <ContactInfoSection
            title="Visit Us"
            description="Chat with us in person in our office"
            contact="https://maps.app.goo.gl/uxCjYrorwvCSyWsg9"
             icon={assets.map}
          />
        </div>
      </div>
    </div>
  );
};

const ContactInfoSection = ({ title, description, contact, icon }) => (
  <div className="relative">
    <h3 className="text-[20px] font-medium text-black mb-[0px] dm-sans2">{title}</h3>
   
  <p className="text-[18px] font-medium text-black/38 mb-[9px] dm-sans cursor-pointer">{description}</p>

    <div className="flex items-center gap-2">
      {/* Use the icon from assets */}
      <img src={icon} alt="icon" className="w-[23px] h-[23px]" />
       <a href={contact} target="_blank" rel="noopener noreferrer">
      <span className="text-lg font-medium text-black dm-sans2">{contact}</span>
      </a>
    </div>
  </div>
);

export default ContactSection;
