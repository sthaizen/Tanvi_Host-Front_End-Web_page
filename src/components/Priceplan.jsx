import React from 'react';
import { Check } from 'lucide-react';

// Discount Badge Component for 20% OFF
const DiscountBadge = () => {
  return (
    <div className="discount-badge">
      <span className="discount-text">20% OFF</span>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Micro-Site Hosting",
      description: "Everything a personal site needs to get online .",
      price: "3.4",
      originalPrice: "10.19",
      features: {
        "Storage & Plans": [
          "500 MB – 1 GB Fast SSD Storage",
          "Includes: Taudaha, BhairavKunda Plans",
          "Free SSL Certificates",
          "Unlimited: FTP & Emails Accounts",
          "Unlimited: Databases & Bandwidth",
          "Per Email Quota Storage: 10 GB",
          "24/7 Priority Support (Phone/Chat)",
          "100% Network Uptime",
        ],
      },
      popular: false,
       titleColor: "text-green-600",
    },
    {
      name: "Professional Hosting",
      description: "Perfect for Growing Businesses & E-commerce",
      price: "5.4",
      originalPrice: "15.19",
      features: {
        "Storage & Plans": [
          "5 GB – 18 GB Fast SSD Storage",
          "Includes: GosaiKunda, Phoskundo, Gokyo Plans",
          "Free SSL Certificates",
          "Unlimited: FTP & Emails Accounts",
          "Unlimited: Databases & Bandwidth",
          "Per Email Quota Storage: 10 GB",
          "24/7 Priority Support (Phone/Chat)",
          "100% Network Uptime",
        ],
        "Exclusive Features": [
          "Unlimited: Add-On Domains",
          "Full Featured Free Website Builder",
          "Full Featured Easy cPanel",
          "Unlimited: Sub & Parked Domains",
        ],
      },
      popular: true,
    },
    {
      name: "Enterprise Hosting",
      description: "Max Power for Agencies & High-Traffic Portals",
      price: "9.4",
      originalPrice: "20.19",
      features: {
        "Storage & Plans": [
          "32 GB – 150 GB Fast SSD Storage",
          "Includes: Tilicho, Rupa, Begnas, Phewa, RARA Plans",
          "Free SSL Certificates",
          "Unlimited: FTP & Emails Accounts",
          "Unlimited: Databases & Bandwidth",
          "Per Email Quota Storage: 10 GB",
          "24/7 Priority Support (Phone/Chat)",
          "100% Network Uptime",
        ],
        "Exclusive Features": [
          "Free: Data Migration",
          "100% Network Uptime",
          "Self/Manual Backup (Dedicated resources)",
          "Unlimited: Sub & Parked Domains",
        ],
      },
      popular: false,
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 px-5 bg-light-bg">
      <div className="max-w-[1326px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-black/80 font-medium text-3xl md:text-[40px] leading-[120%]  dm-sans3 md:mb-4 text">
            Choose the right power level for your project.<br /><span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent dm-sans3'> Upgrade anytime, hassle-free. </span>
          </h2>
          <p className="text-black  max-w-[560px] dm-sans text-[18px] sm:text-[22px] ">
            Launch Your Digital Presence Effortlessly – Your shortcut to one-click deployment!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {plans.map((plan, index) => (
            <div
      key={index}
      className={`relative rounded-3xl border border-[#D5DFFF] bg-white p-8  ${
        plan.popular ? "border-black bg-[#F6F6F6] border-2" : ""
      } transform transition-transform duration-500 ease-in-out hover:scale-102 hover:shadow-xl`}
    >
             

              {/* 20% OFF Badge with Space */}
              <div className="absolute top-8 right-7 z-10">
                <DiscountBadge />
              </div>

              {/* Plan Title and Description */}
              <div className="text-center mb-8 mt-12">
                <h3 className="text-black font-semibold text-xl md:text-[22px] mb- dm-sans2 ">{plan.name}</h3>
                <p className="text-black text-sm dm-sans">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <span className="text-black/50 text-lg line-through dm-sans">US$ {plan.originalPrice}</span>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <span className="text-black text-3xl dm-sans2">US$</span>
                  <span className="text-black font-semibold text-5xl dm-sans2">{plan.price}</span>
                  <span className="text-black/50 text-xl dm-sans3">/mo</span>
                </div>
                <span className="text-black font-bold text-sm mt-2 dm-sans2">+2 months free</span>
              </div>

              {/* Limited Time Deal Badge */}
              <div className="w-auto h-[30px] px-4 flex-shrink-0 rounded-full bg-[#D3FFE9] flex items-center justify-center mb-5">
                <span className="text-[#30C97C] font-extrabold text-sm dm-sans2">Limited time deal</span>
              </div>

              {/* CTA Button */}
              <button className="cursor-pointer w-full h-[57px] rounded-xl border border-black flex items-center justify-center mb-5 hover:bg-black hover:text-white transition group">
                <span className="text-black font-semibold text-lg group-hover:text-white dm-sans2">
                  Choose plan
                </span>
              </button>

              {/* Features */}
              {Object.entries(plan.features).map(([category, features]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-black font-bold text-lg mb-4 dm-sans2 ">{category}:</h4>
                  <div className="flex flex-col gap-3 dm-sans3">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span
                          className="text-black/70 text-sm dm-sans"
                          dangerouslySetInnerHTML={{
                            __html: feature.replace(
                              /(Taudaha|BhairavKunda|GosaiKunda|Phoskundo|Gokyo|Tilicho|Rupa|Begnas|Phewa|RARA)/g,
                              '<strong class="text-black font-semibold dm-sans2">$1</strong>'
                            ),
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="text-black font-medium text-sm hover:underline inline-flex items-center gap-1 cursor-pointer">
            View all features
            <svg
              className="w- h-4"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.49725 11.848C5.38518 11.7496 5.31681 11.6106 5.3072 11.4617C5.29758 11.3129 5.3475 11.1663 5.44597 11.0542L9.79594 6.10351L6.51173 6.49951C6.36409 6.51646 6.21573 6.4743 6.09907 6.38222C5.98241 6.29015 5.90693 6.15565 5.88911 6.0081C5.8713 5.86056 5.9126 5.71196 6.00399 5.59476C6.09539 5.47757 6.22945 5.40131 6.37689 5.38264L11.1228 4.81038C11.2015 4.80081 11.2813 4.80796 11.357 4.83136C11.4327 4.85477 11.5026 4.8939 11.5621 4.9462C11.6216 4.9985 11.6694 5.06279 11.7024 5.13484C11.7353 5.2069 11.7527 5.28511 11.7533 5.36434L11.7963 10.1445C11.7974 10.2186 11.7838 10.2922 11.7564 10.3611C11.7289 10.43 11.6881 10.4927 11.6363 10.5458C11.5845 10.5988 11.5227 10.6411 11.4545 10.6702C11.3863 10.6992 11.313 10.7145 11.2389 10.7152C11.1647 10.7159 11.0912 10.7018 11.0225 10.674C10.9538 10.6461 10.8912 10.6049 10.8385 10.5528C10.7858 10.5007 10.7439 10.4387 10.7152 10.3703C10.6865 10.3019 10.6716 10.2286 10.6714 10.1544L10.641 6.84607L6.29109 11.7968C6.19262 11.9088 6.05366 11.9772 5.90479 11.9868C5.75591 11.9964 5.60931 11.9465 5.49725 11.848Z"
                fill="black"
              />
            </svg>
          </button>
        


        {/* Footer Note */}
        <p className="text-black/48 text-sm text-center max-w-[909px] mx-auto mt-2 dm-sans1">
          The price displayed is the monthly rate excluding applicable taxes. The total price for
          the plan to be paid upfront at checkout includes<br/> the monthly rate multiplied by the
          number of months in your plan, along with any applicable taxes.
        </p>
      </div>
      </div>
    </section>
  );
};

// Discount Badge Component for 20% OFF

export default Pricing;
