import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-5 md:px-12 py-4 md:py-6 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#40E0D0] flex items-center justify-center font-black text-black text-xl italic shadow-[0_0_15px_rgba(64,224,208,0.2)]">
          A
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <span className="text-base md:text-xl font-bold tracking-tighter text-white leading-none">
            APEX
          </span>
          <span className="text-[10px] md:text-xl font-bold tracking-tighter text-[#40E0D0] leading-none uppercase md:normal-case">
            SOFTWARE
          </span>
        </div>
      </div>

      {/* Desktop Links - Stays hidden on mobile */}
      <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
        <a href="#home" className="hover:text-[#40E0D0] transition-colors">Home</a>
        <a href="#why-us" className="hover:text-[#40E0D0] transition-colors">Why Us</a>
        <a href="#services" className="hover:text-[#40E0D0] transition-colors">Stack</a>
        <a href="#contact" className="hover:text-[#40E0D0] transition-colors">Contact</a>
      </div>

      {/* Action Area */}
      <div className="flex items-center">
        <a
          href="https://wa.me/254703560705?text=Hello%20Apex%20Software%20Solutions..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#40E0D0] text-black px-4 py-2.5 md:px-8 md:py-4 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(64,224,208,0.1)] active:scale-95">
            Consult Now
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;