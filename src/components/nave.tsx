import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/home/parthiban/Desktop/lead potima/public/Leadoptima logo 300x91.png";

export default function Nave() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-12 md:h-16" />
      </Link>

      {/* Hamburger Button (Mobile) */}
      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menu */}
      <ul
        className={`
          flex flex-col md:flex-row gap-6 md:gap-8 text-white font-medium
          absolute md:static left-0 top-full w-full md:w-auto bg-black/70 md:bg-transparent
          px-6 py-6 md:p-0
          transition-all duration-500 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 md:opacity-100 md:translate-y-0"}
        `}
      >
        <li><Link className="hover:text-blue-300 transition" to="/">Home</Link></li>
        <li><Link className="hover:text-blue-300 transition" to="/about">About</Link></li>
        <li><Link className="hover:text-blue-300 transition" to="/services">Services</Link></li>
        <li><Link className="hover:text-blue-300 transition" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
