import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Play seatbelt sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBgoODg4SEhYWFhoeHh4eIiImJiYqKiouLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Ignore if autoplay is blocked

    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 overflow-hidden">
      {/* Simulated Takeoff Video - Sky Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ y: 0 }}
        animate={{ y: '-50%' }}
        transition={{ duration: 3.5, ease: "easeIn" }}
      >
        {/* Sky gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-sky-300 to-sky-400" />
        
        {/* Clouds passing by - simulating takeoff */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-96"
          animate={{ y: ['0%', '150%'] }}
          transition={{ duration: 2, ease: "easeIn" }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-64 bg-white/40 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-80 h-56 bg-white/30 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-0 w-full h-96"
          animate={{ y: ['0%', '150%'] }}
          transition={{ duration: 2.2, ease: "easeIn", delay: 0.2 }}
        >
          <div className="absolute top-0 left-1/3 w-72 h-48 bg-white/35 rounded-full blur-3xl" />
          <div className="absolute top-10 right-1/3 w-88 h-60 bg-white/25 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-96"
          animate={{ y: ['0%', '150%'] }}
          transition={{ duration: 2.5, ease: "easeIn", delay: 0.4 }}
        >
          <div className="absolute top-0 left-1/2 w-64 h-52 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/2 w-76 h-58 bg-white/20 rounded-full blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Ground fading away effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-800/30 to-transparent"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Lens flare effect */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-200/40 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Plane Icon - Ascending */}
            <motion.div
              className="mb-8 flex justify-center"
              animate={{
                y: [-10, -40, -10],
                rotate: [-5, 0, -5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Plane className="text-white" size={80} />
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Lütfen Kemerlerinizi Takınız
            </motion.h1>

            {/* Loading dots */}
            <motion.div
              className="flex gap-3 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Horizon line effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
        initial={{ y: 0 }}
        animate={{ y: -100 }}
        transition={{ duration: 3, ease: "easeIn" }}
      />
    </div>
  );
}