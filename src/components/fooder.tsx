
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-50 to-white text-slate-800 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About / Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900">Leadoptima</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm">
              Delivering tailored IT, engineering and HR solutions. We blend innovation
              with practical execution to help businesses grow sustainably.
            </p>

            <div className="mt-4 flex gap-3">
              <a href="https://x.com/Leadoptima" target="_blank" rel="noreferrer" aria-label="X">
                <img alt="x" src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" className="h-10 w-10 p-2 bg-gray-100 rounded-full hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/company/leadoptima/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img alt="linkedin" src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="h-10 w-10 p-2 bg-gray-100 rounded-full hover:scale-110 transition" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556249665363" target="_blank" rel="noreferrer" aria-label="Facebook">
                <img alt="facebook" src="https://img.icons8.com/?size=100&id=BsoWS6BDZrHp&format=png&color=000000" className="h-10 w-10 p-2 bg-gray-100 rounded-full hover:scale-110 transition" />
              </a>
              <a href="https://www.instagram.com/virgoninfotech" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img alt="instagram" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" className="h-10 w-10 p-2 bg-gray-100 rounded-full hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-1">
            <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="/about" className="hover:text-slate-900">About Us</a></li>
              <li><a href="/services" className="hover:text-slate-900">Services</a></li>
              <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="/careers" className="hover:text-slate-900">Careers</a></li>
              <li><a href="/privacy" className="hover:text-slate-900">Privacy Policy</a></li>
            </ul>
          </nav>

          {/* Newsletter / Contact quick */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Stay in touch</h4>

            <div className="mt-4 text-sm text-slate-600">
              <p><span className="font-medium text-slate-800">Email:</span> hrd@leadoptima.com</p>
            <p><span className="font-medium text-slate-800">Address:</span> Tropical enclave, Pallikaranai, Chennai - 600100</p>
            
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Leadoptima — All rights reserved.</p>

          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="/terms" className="hover:text-slate-900">Terms</a>
            <span aria-hidden="true" className="mx-1">•</span>
            <a href="/sitemap.xml" className="hover:text-slate-900">Sitemap</a>

            {/* back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-4 text-sm bg-slate-100 px-3 py-1 rounded-lg hover:bg-slate-200 transition"
              aria-label="Back to top"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
