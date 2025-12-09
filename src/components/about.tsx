import { motion } from "framer-motion";
import pro from "/prof/pro.jpg";
import v3 from "/f3.mp4"
export default function About() {
  const team = [
    { profile: pro, name: "A.AJITH", position: "Originator" },
    { profile: pro, name: "Arputha Ramya", position: "Brand Whisperer" },
    { profile: pro, name: "B.S. Velan", position: "Operations Master" },
    { profile: pro, name: "M S Nishaanth", position: "Coders Captain" },
    { profile: pro, name: "Swetha G", position: "Rapport Maestro" }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">

      {/* ========================= HEADER SECTION WITH VIDEO ========================= */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={v3} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white px-4">

          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg font-semibold uppercase tracking-wide"
          >
            A Few Words About
          </motion.h4>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mt-3"
          >
            Our Company
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base md:text-lg mt-4 opacity-90"
          >
            Transforming Today, Tomorrow, Forever
          </motion.h3>

        </div>
      </div>

      {/* ========================= ABOUT US SECTION ========================= */}
      <section className="px-5 md:px-20 py-16 md:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
          Leading the Way Where Excellence Meets Innovation
        </motion.h1>

        <hr className="w-20 md:w-32 mx-auto border-blue-600 mb-6" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed px-3"
        >
          <span className="text-blue-600 font-bold text-2xl">L</span>eadoptima, a visionary startup, passionately offers an extensive suite of services to our esteemed clientele. From cutting-edge information technology solutions and premium engineering services to expert staffing solutions and transformative skill development programs, we are steadfast in our commitment to exceeding expectations with unparalleled excellence and innovative prowess
        </motion.p>
      </section>

      {/* ========================= WHY US SECTION ========================= */}
      <section className="px-5 md:px-20 py-16 md:py-20 text-center bg-gradient-to-r from-blue-100 to-pink-100">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          Unlock Customized Solutions for Your Business
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition"
        >
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
            Tailored Solutions
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
           Discover how Leadoptima can tailor its cutting-edge IT services, dynamic engineering solutions, skill development programs, and reliable staffing solutions to perfectly align with your business's unique challenges and objectives.
          </p>
        </motion.div>

        {/* ========================= VISION & MISSION RESPONSIVE ========================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12">

          {/* Vision */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
              Our Vision
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To revolutionize industries through innovation in Information Technology, Engineering Services, and Human Resources, empowering businesses and individuals alike. As pioneers, we aim to shape a world where technology serves humanity, engineering propels advancement, and HR fosters individual excellence. 
                     </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
              Our Mission
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To pioneer bespoke IT, Engineering, and HR solutions, catalyzing innovation and fostering exponential growth. With unwavering dedication to excellence, we empower clients to unleash their fullest potential. Leadoptima: Your catalyst for transformative progress.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ========================= TEAM SECTION ========================= */}
      <section className="px-5 md:px-20 py-16 md:py-20 text-center bg-white">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
          Meet Our Team!
        </motion.h1>

        <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base mb-10">
         
Meet the powerhouse team at Leadoptima, driving innovation and success. With seasoned professionals committed to excellence, we blend expertise and creativity for exceptional results.
        </p>

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-6 md:gap-10 px-4
        ">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <img
                src={member.profile}
                alt={member.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-blue-300 object-cover mb-4"
              />
              <h3 className="font-semibold text-base md:text-lg text-gray-800">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-blue-600">
                {member.position}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
