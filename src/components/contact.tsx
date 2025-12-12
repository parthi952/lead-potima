
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* hero section */}
      <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background theme overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-700/50 backdrop-blur-sm" />

        {/* Lottie animation */}
        <div className="relative z-10 w-full max-w-md flex justify-center">
          <DotLottieReact
            src="https://lottie.host/12f4dabd-560f-499a-9e33-239500395f9a/XEraRuwzqy.lottie"
            loop
            autoplay
          />
        </div>

        {/* text */}
        <div className="relative z-10 text-white mt-4">
          <p className="text-sm md:text-base font-semibold tracking-wide opacity-90">
            Get in touch with us!
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2 drop-shadow-lg">
            Contact Us
          </h1>

          <h3 className="text-base md:text-lg mt-3 opacity-85">
            We Love to Hear from You!
          </h3>
        </div>
      </div>

      {/* form  */}
      <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Part 1: Map (full) */}
          <div className="w-full lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
           {/* FULL WIDTH MAP */}
<div className="w-full lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="w-full h-[160px] md:h-[180px] lg:h-[200px]">
      <iframe
        title="office-location-preview"
        className="w-full h-full border-0 rounded-t-2xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3659.4671783284743!2d80.21490665362921!3d12.93251667194777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c4f5d70689d%3A0xda3889718bf7bbce!2sTropical%20Enclave%2C%20Pallikaranai%2C%20Chennai%2C%20Tamil%20Nadu%20600100%2C%20India!5e0!3m2!1sen!2sus!4v1765511046627!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

</div>

          </div>

          {/* Part 2: Content / Info */}
        <div className="w-full lg:col-span-1 bg-white rounded-2xl shadow-xl p-8 border border-blue-50 hover:shadow-2xl transition-shadow duration-300">
  {/* Stylish title section */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-md">
      <i className="fas fa-handshake"></i>
    </div>
    <h1 className="text-2xl font-bold text-slate-900">Let’s Connect</h1>
  </div>

  {/* Highlighted subtext */}
  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
    We’re here to collaborate, support, and build meaningful partnerships.
    Explore how we combine innovation, strategy, and technology to drive
    outstanding results.
  </p>

  {/* Feature icons list */}
  <ul className="mt-5 space-y-3 text-sm text-slate-700">
    <li className="flex items-center gap-2">
      <span className="text-blue-600 text-lg">✔</span>
      Free Consultation with Experts
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600 text-lg">✔</span>
      Transparent Budget Quotations
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600 text-lg">✔</span>
      Latest Technology Solutions
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600 text-lg">✔</span>
      Eco-Friendly & Sustainable Approach
    </li>
  </ul>

  {/* Small bottom highlight card */}
  <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl">
    <h3 className="text-sm font-semibold text-blue-700">Why Choose Leadoptima?</h3>
    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
      With a forward-thinking team and a commitment to excellence, we ensure your
      goals become achievable milestones backed by innovation and precision.
    </p>
  </div>
</div>


          {/* Part 3: Form + Social */}
          <div className="w-full lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // add submit logic here (API / Formspree / Netlify)
                alert("Form submitted (placeholder) — add handler to send the data.");
              }}
              className="flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
            >
              <label className="flex flex-col">
                <span className="text-sm text-slate-700">Name</span>
                <input type="text" placeholder="Your Name" className="mt-2 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" required />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-700">Email</span>
                <input type="email" placeholder="Your Email" className="mt-2 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" required />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-700">Phone Number</span>
                <input type="tel" placeholder="Your Phone Number" className="mt-2 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-700">Message</span>
                <textarea placeholder="Your Message" rows={6} className="mt-2 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" required />
              </label>

              <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
                Submit
              </button>
            </form>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Social Media</h2>
              <div className="flex gap-4 mt-3">
                <a href="https://x.com/Leadoptima?t=SouI3v97M7GmZO64r7ZQrA&s=08" target="_blank" rel="noopener noreferrer">
                  <img alt="twitter" src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition" />
                </a>

                <a href="https://www.linkedin.com/company/leadoptima/" target="_blank" rel="noopener noreferrer">
                  <img alt="linkedin" src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=61556249665363" target="_blank" rel="noopener noreferrer">
                  <img alt="facebook" src="https://img.icons8.com/?size=100&id=BsoWS6BDZrHp&format=png&color=000000" className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition" />
                </a>

                <a href="https://www.instagram.com/virgoninfotech" target="_blank" rel="noopener noreferrer">
                  <img alt="instagram" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;