export default function Footer() {
  return (
    <footer className="w-full bg-black rounded-2xl p-7 md:p-8 lg:px-7 lg:py-12 text-white scale-98">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Left: Brand and Navigation */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-[564px]">
            {/* Brand Section */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[26px] font-semibold dm-sans3">Tanvi Tech</h2>
              <p className="text-sm leading-relaxed opacity-90 dm-sans">
                Everything your personal site needs to get online, stay secure, and
                perform seamlessly from reliable hosting to powerful protection, all
                in one place.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
              <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
                Home
              </a>
              <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
                Product
              </a>
              <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
                Services
              </a>
              <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
                Certification
              </a>
              <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
                Domain
              </a>
            </nav>
          </div>

          {/* Right: Newsletter */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[440px]">
            <h3 className="text-xl font-semibold dm-sans3">Stay up to date</h3>
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className=" dm-sans3 flex-1 px-5 py-2.5 bg-transparent border border-white rounded-full text-base placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className=" dm-sans2 px-5 py-3 bg-white text-black rounded-full font-semibold text-base hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#575454] mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-base dm-sans3">© 2025 Tanvitech pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
              Terms
            </a>
            <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
              Privacy
            </a>
            <a href="#" className="text-base hover:opacity-70 transition-opacity dm-sans3">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
