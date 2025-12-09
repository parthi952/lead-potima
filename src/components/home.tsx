import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

import f1 from "/f1.jpg";
import f2 from "/f2.jpg";
import v1 from "/v1food.mp4";

import s1 from "/staff/s1.jpg";
import s2 from "/staff/s2.jpg";
import s3 from "/staff/s3.jpg";
import s4 from "/staff/s4.jpg";

import i1 from "/icon/i1.png";
import i2 from "/icon/i2.png";
import i3 from "/icon/i3.png";

export default function Home() {
  const ourServices = {
    service1: {
      title: "IT Solutions",
      description:
        "Leadoptima excels in crafting dynamic websites and robust applications, delivering innovative solutions tailored to your business needs.",
      image: s1,
    },
    service2: {
      title: "Engineering Services",
      description:
        "Drives engineering innovation, delivering tailored solutions across Automotive, Civil, and Electrical domains for quality and reliability in every project.",
      image: s2,
    },
    service3: {
      title: "Staffing",
      description:
        "Provide expert staffing solutions, connecting businesses with top talent for seamless growth and success.",
      image: s3,
    },
    service4: {
      title: "Skill Development",
      description:
        "Empowering individuals and organizations through targeted training initiatives for enhanced capabilities and sustainable growth",
      image: s4,
    },
  };

  const process = {
    first: {
      icon: i1,
      head: "Orchestrating",
      description:
        "Forge a strategic market entry, harnessing bespoke marketing strategies crafted exclusively for IT, Engineering, and Staffing services.",
    },
    second: {
      icon: i2,
      head: "Enactment",
      description:
        "Execute meticulously crafted strategies, deploying bespoke solutions to precisely meet client expectations with high precision.",
    },
    third: {
      icon: i3,
      head: "Launch & Growth",
      description:
        "Employ strategic marketing, iterate offerings, and achieve sustainable expansion through agile scaling.",
    },
  };

  const info = {
    location:
      "https://img.icons8.com/?size=100&id=13800&format=png&color=000000",
    address: "Tropical enclave, Pallikaranai, Chennai - 600100",
    phone_img:
      "https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000",
    email_img:
      "https://img.icons8.com/?size=100&id=13826&format=png&color=000000",
    phone: "+91 78240 02660",
    email: "hrd@leadoptima.com",
  };

  return (
    <div className="overflow-x-hidden">
      {/* ✅ HERO SECTION WITH VIDEO */}
      <div className="relative w-full min-h-screen overflow-hidden overflow-x-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={v1}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center mt-8 justify-center min-h-screen px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-10 bg-white/10 mt-15 mb-10 backdrop-blur-xl p-10 rounded-3xl shadow-xl"
          >
            {/* ✅ Prevent motion hover from leaking out */}
            <div className="overflow-hidden rounded-3xl w-full md:w-1/2">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={f1}
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div className="text-white max-w-xl">
              <p className="text-sm font-semibold">
                Empowering Success Through Innovation
              </p>

              <h1 className="text-4xl font-bold mt-3 leading-snug">
                Welcome to Leadoptima <br /> Your Partner in Excellence
              </h1>

              <p className="mt-3 opacity-90">
                At Leadoptima, we believe in the power of technology and expertise to transform businesses. Our comprehensive suite of services spans IT and Engineering Solutions, Skill Development Programs, and Staffing Solutions, all designed to propel your business into a future of endless possibilities. With a focus on tailored, innovative solutions, we’re not just meeting your needs—we’re anticipating them.
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-5 bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Know More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ WHO WE ARE SECTION */}
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-pink-100 p-16 gap-10 items-center">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h3 className="text-gray-600 font-bold">What we do</h3>
          <h1 className="text-3xl font-bold mt-3">Who We Are</h1>
          <p className="mt-3">
            Leadoptima, a visionary startup, passionately offers an extensive suite of services to our esteemed clientele. From cutting-edge information technology solutions and premium engineering services to expert staffing solutions and transformative skill development programs, we are steadfast in our commitment to exceeding expectations with unparalleled excellence and innovative prowess
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-5 bg-blue-600 text-white py-3 px-5 rounded-lg shadow-lg"
          >
            Explore More
          </motion.button>
        </motion.div>

        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={f2}
          className="w-full md:w-1/2 rounded-3xl shadow-2xl"
        />
      </div>

      {/* ✅ OUR SERVICES */}
      <div className="p-20 bg-gray-200">
        <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {Object.entries(ourServices).map(([key, service]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-xl shadow-lg"
            >
              <img
                src={service.image}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-3 ">{service.title}</h2>
              <p className="text-gray-600 mt-1 ">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ PROCESS SECTION */}
      <div className="py-20 px-10 bg-gradient-to-b from-white to-blue-50 text-center">
        <h1 className="text-3xl font-bold">The Process</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-3">
          The process epitomizes our meticulous methodology, orchestrating flawless transitions from conception to implementation. Infused with precision and creativity, it embodies our unwavering commitment to excellence, ensuring unparalleled results every step of the way
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {Object.entries(process).map(([key, step]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg"
            >
              <img src={step.icon} className="w-12 h-12 mb-4" />
              <h3 className="font-bold">{step.head}</h3>
              <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ CONTACT + MAP + INFO SECTION */}
      <div className="bg-blue-100 py-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-7xl">
          {/* ✅ INFO BOX */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h1 className="text-3xl font-bold">Info</h1>

            <div className="mt-6 space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <img src={info.location} className="h-6" /> {info.address}
              </p>
              <p className="flex items-center gap-3">
                <img src={info.phone_img} className="h-6" /> {info.phone}
              </p>
              <p className="flex items-center gap-3">
                <img src={info.email_img} className="h-6" /> {info.email}
              </p>
            </div>
          </motion.div>

          {/* ✅ MAP */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h1 className="text-3xl font-bold">Find Us</h1>

            <div className="rounded-xl overflow-hidden mt-5 shadow-lg hover:scale-105 transition-transform">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497742.28591972834!2d80.216751!3d12.932666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c4f5d70689d%3A0xda3889718bf7bbce!2sTropical%20Enclave%2C%20Pallikaranai%2C%20Chennai%2C%20Tamil%20Nadu%20600100%2C%20India!5e0!3m2!1sen!2sus!4v1762585926654!5m2!1sen!2sus"
                width="100%"
                height="200"
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-5">
              <h1 className="text-3xl font-bold">Follow Us</h1>

              <div className="flex gap-4 mt-3">
                <a
                  href="https://x.com/Leadoptima?t=SouI3v97M7GmZO64r7ZQrA&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="twitter"
                    src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
                    className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/leadoptima/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="linkedin"
                    src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                    className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition"
                  />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61556249665363"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="facebook"
                    src="https://img.icons8.com/?size=100&id=BsoWS6BDZrHp&format=png&color=000000"
                    className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition"
                  />
                </a>

                <a
                  href="https://www.instagram.com/virgoninfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="instagram"
                    src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                    className="bg-gray-100 rounded-full h-12 w-12 p-2 hover:scale-110 transition"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ✅ CONTACT FORM */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

            <form className="flex flex-col gap-5">
              <input className="border p-3 rounded-md" placeholder="Your Name" />
              <input className="border p-3 rounded-md" placeholder="Your Email" />
              <textarea
                className="border p-3 rounded-md h-32"
                placeholder="Your Message"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white py-3 rounded-md shadow-lg hover:bg-blue-700"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
