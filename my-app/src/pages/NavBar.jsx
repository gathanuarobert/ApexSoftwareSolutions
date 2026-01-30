import React from 'react';
import { ExternalLink } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 bg-[#0a0a0a]">
      {/* Brand Identity */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#40E0D0] flex items-center justify-center font-bold text-black text-xl">
          A
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          APEX <span className="text-[#40E0D0]">SOFTWARE</span>
        </span>
      </div>

      {/* Simplified Links */}
      <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest text-gray-400">
        <a href="#home" className="hover:text-[#40E0D0] transition-colors">Home</a>
        <a href="#why-us" className="hover:text-[#40E0D0] transition-colors">Why Us</a>
        <a href="#contact" className="hover:text-[#40E0D0] transition-colors">Contact Us</a>
      </div>

      {/* Action Area */}
      <div className="flex items-center gap-6">
        {/* <div className="hidden sm:flex items-center gap-1 text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
          Login <ExternalLink size={14} />
        </div> */}
        <button className="bg-[#40E0D0] text-black px-6 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#36c2b5] transition-all shadow-[0_0_20px_rgba(64,224,208,0.2)]">
          Consult Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;