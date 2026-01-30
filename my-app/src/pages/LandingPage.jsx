import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";

const LandingPage = () => {
  const blockVariants = {
    animate: {
      rotateY: [0, 90, 180, 270, 360],
      scale: [0.9, 1, 0.9],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#40E0D0] selection:text-black overflow-x-hidden">
      <NavBar />

      <main className="relative grid grid-cols-12 min-h-[calc(100vh-88px)]">
        {/* Background Grid Lines - Hidden on very small screens for cleanliness */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-20">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full" />
          ))}
        </div>

        {/* Hero Content */}
        <div className="col-span-12 lg:col-span-7 pt-12 md:pt-24 px-6 md:px-12 z-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 tracking-tighter">
              <span className="text-[#40E0D0]">Secure the core.</span> <br />
              Scale your digital <br className="hidden sm:block" />
              infrastructure.
            </h1>

            <div className="w-12 h-px bg-[#40E0D0] mb-8 md:mb-12" />

            {/* Added ml-8 to ensure the indent is present on mobile as well */}
            <div className="max-w-md ml-8 lg:ml-auto lg:mr-24">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                Apex provides end-to-end architecture for mobile, web, and
                server-side ecosystems. We bridge the gap between complex
                cybersecurity protocols and seamless user experiences.
              </p>

              <button className="flex items-center justify-between w-full border border-white/20 px-6 py-5 group hover:border-[#40E0D0] hover:text-[#40E0D0] transition-all">
                <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
                  View our stack
                </span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated Block Section - Now hidden on small screens and lifted on desktop */}
        <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center lg:min-h-full">
          <div className="relative w-48 h-72 md:w-64 md:h-96 lg:-mt-32">
            {/* The "Joining" Block */}
            <motion.div
              className="absolute inset-0 bg-[#40E0D0]"
              variants={blockVariants}
              animate="animate"
              style={{
                boxShadow: "0 0 50px rgba(64, 224, 208, 0.15)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-black/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10" />
            </motion.div>

            {/* Loop Animation */}
            <motion.div
              animate={{
                y: [80, -20, 80],
                opacity: [0, 0.6, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 left-0 w-full h-16 border-2 border-[#40E0D0] opacity-30"
            />
          </div>
        </div>
      </main>
      {/* Why Us Section */}
      <section id="why-us" className="bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              Evolution, not <br />
              revolution
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-sm">
              What value do we create for your digital infrastructure? We develop innovative 
              architecture that increases system resilience and productivity while 
              maintaining existing operational processes.
            </p>
            <button className="flex items-center justify-between w-full max-w-[200px] bg-black text-white px-6 py-4 group hover:bg-[#40E0D0] hover:text-black transition-all duration-300">
              <span className="font-bold uppercase tracking-widest text-xs">Learn More</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="lg:col-span-7 border-l border-gray-100 pl-0 lg:pl-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#40E0D0] uppercase block mb-12">
              Challenges we address
            </span>

            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="flex gap-8 group">
                <div className="w-16 h-16 border border-gray-200 flex-shrink-0 flex items-center justify-center relative">
                  <div className="w-8 h-8 border-2 border-dotted border-gray-300 group-hover:border-[#40E0D0] transition-colors" />
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-[#40E0D0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[#40E0D0] transition-colors">
                    Limited system scalability
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Expand your capabilities to support any user load with cloud-native 
                    architecture designed for infinite horizontal scaling.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-8 group">
                <div className="w-16 h-16 border border-gray-200 flex-shrink-0 flex items-center justify-center relative">
                  <div className="w-8 h-8 border-2 border-gray-800 rotate-45 group-hover:border-[#40E0D0] transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[#40E0D0] transition-colors">
                    Security vulnerabilities & leaks
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Automate manual security audits and implement zero-trust protocols 
                    to remove human-factor risks from your server environments.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-8 group">
                <div className="w-16 h-16 border border-gray-200 flex-shrink-0 flex items-center justify-center relative">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 border-dashed group-hover:border-[#40E0D0] transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[#40E0D0] transition-colors">
                    Disjointed data pipelines
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Create seamless data flow from mobile edge devices to central 
                    processing clusters without latency bottlenecks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      {/* Secondary Why Us / Call to Action Section */}
      <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Header Area following the design language */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8">
                Custom software <br />
                engineered with precision
              </h2>
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Apex Software Solutions provides the architecture and code that bridges the gap 
                between your vision and production-ready systems.
              </p>
            </div>
            
            {/* CTA Button leading to Contact Us */}
            <div className="lg:col-span-4 flex items-end lg:justify-end pb-2">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-between w-full lg:w-64 border border-white/20 px-6 py-5 group hover:border-[#40E0D0] hover:text-[#40E0D0] transition-all"
              >
                <span className="font-bold uppercase tracking-widest text-xs">Start Consultation</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* 6-Card Expertise Grid with Outlined Design */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Mobile Creation */}
            <div className="border border-white/10 p-10 hover:border-[#40E0D0]/50 transition-colors group">
              <div className="w-10 h-10 mb-8 border border-[#40E0D0]/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#40E0D0]" />
              </div>
              <h4 className="text-[#40E0D0] font-bold uppercase tracking-widest text-xs mb-4">Mobile Creation</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                High-performance Android and iOS development tailored for seamless user experiences.
              </p>
            </div>

            {/* 2. Web Ecosystems */}
            <div className="border border-white/10 p-10 hover:border-[#40E0D0]/50 transition-colors">
              <div className="w-10 h-10 mb-8 border border-[#40E0D0]/30 flex items-center justify-center">
                <div className="w-4 h-[1px] bg-[#40E0D0]" />
              </div>
              <h4 className="text-[#40E0D0] font-bold uppercase tracking-widest text-xs mb-4">Web Ecosystems</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Scalable web applications built with modern frameworks for enterprise-grade stability.
              </p>
            </div>

            {/* 3. Solidity Backend */}
            <div className="border border-white/10 p-10 hover:border-[#40E0D0]/50 transition-colors">
              <div className="w-10 h-10 mb-8 border border-[#40E0D0]/30 flex items-center justify-center">
                <div className="w-3 h-3 border border-[#40E0D0] rotate-45" />
              </div>
              <h4 className="text-[#40E0D0] font-bold uppercase tracking-widest text-xs mb-4">Solidity Backend</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Secure smart contract development and robust blockchain infrastructure.
              </p>
            </div>

            {/* 4. Cybersecurity (Upcoming) */}
            <div className="border border-white/10 p-10 hover:border-[#40E0D0]/50 transition-colors">
              <div className="w-10 h-10 mb-8 border border-[#40E0D0]/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-[#40E0D0] border-dotted" />
              </div>
              <h4 className="text-[#40E0D0] font-bold uppercase tracking-widest text-xs mb-4">Cybersecurity</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integrating real-time threat detection and security hardening into every build.
              </p>
            </div>

            {/* 5. Server Systems */}
            <div className="border border-white/10 p-10 hover:border-[#40E0D0]/50 transition-colors">
              <div className="w-10 h-10 mb-8 border border-[#40E0D0]/30 flex items-center justify-center">
                <div className="w-4 h-4 border-l border-b border-[#40E0D0]" />
              </div>
              <h4 className="text-[#40E0D0] font-bold uppercase tracking-widest text-xs mb-4">Server Creation</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bespoke server setups designed for high availability and low-latency performance.
              </p>
            </div>

            {/* 6. System Architecture */}
            <div className="border border-white/10 p-10 hover:border-[#40E0D0]/50 transition-colors">
              <div className="w-10 h-10 mb-8 border border-[#40E0D0]/30 flex items-center justify-center">
                <ArrowRight size={16} className="text-[#40E0D0]" />
              </div>
              <h4 className="text-[#40E0D0] font-bold uppercase tracking-widest text-xs mb-4">System Architecture</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategic structural planning for complex server environments and scalable networks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
