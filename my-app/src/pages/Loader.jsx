import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center font-sans"
    >
      <div className="flex flex-col items-center">
        {/* Apex Logo: Turquoise box with black A */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-[#40E0D0] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(64,224,208,0.3)]"
        >
          <span className="text-black text-4xl font-black italic">A</span>
        </motion.div>

        <div className="w-72 relative">
          {/* Terminal Style Text - Font size increased */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.2, 0.4, 1] }}
            className="text-[#40E0D0] font-mono tracking-[0.3em] text-sm md:text-base uppercase mb-6 text-center"
          >
            Apex_Systems_Initializing...
          </motion.div>
          
          {/* Progress Bar Container */}
          <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 2.5, 
                ease: [0.45, 0, 0.55, 1] 
              }}
              onAnimationComplete={finishLoading}
              className="h-full w-full bg-[#40E0D0] shadow-[0_0_15px_rgba(64,224,208,0.5)]"
            />
          </div>

          {/* Binary/Data stream effect below bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="mt-3 text-[10px] text-white/20 font-mono text-center overflow-hidden h-4"
          >
            01001010 01101111 01101001 01101110
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;