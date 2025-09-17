import React, { useState, useEffect } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Project = (props) => {
  return (
    <div className="px-8 py-8 transition-all duration-300 transform rounded-2xl bg-gradient-to-br from-[#0b0f17] to-[#0e1522] border border-gray-800 hover:border-teal-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left half - Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-xl ring-1 ring-gray-800"
            src={props.image}
            alt={props.title}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Right half - Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold font-poppins text-white">
            {props.title}
          </h1>
          <p className="font-poppins font-semibold text-teal-300 mt-4 tracking-wide">Used Stack</p>
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {props.stack.map((tech, index) => (
                <div
                  key={`${props.id}-stack-${index}`}
                  className="px-3 py-1 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-200 text-[12px] font-poppins hover:border-teal-300/60 transition-colors"
                >
                  <span className="inline-block align-middle mr-2 text-teal-300 text-[16px]">
                    {React.createElement(tech.icon)}
                  </span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-gray-300 font-poppins leading-relaxed">
            {props.content}
          </p>

          <div className="flex items-center gap-3 mt-6">
            {props.github ? (
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/70 hover:bg-gray-700 text-white font-poppins text-sm transition-colors"
              >
                <AiFillGithub className="text-[18px]" />
                GitHub
              </a>
            ) : (
              ""
            )}
            {props.link ? (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-poppins text-sm transition-colors"
              >
                <BsLink45Deg className="text-[18px]" />
                Go to Live Site
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Spacer to keep consistent overall card height */}
      <div className="hidden md:block mt-2"></div>
      <div className="hidden md:block mt-2"></div>
      <div className="hidden md:block mt-2"></div>
    </div>
  );
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
  }),
};

const swipeConfidenceThreshold = 8000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const prev = () => {
    setDirection(-1);
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  const current = projects[activeIndex];

  return (
    <section id="projects">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] text-center">
        Our <span className="text-gradient">Top Projects</span>
      </h1>

      <div className="container px-2 py-5 mx-auto">
        <div
          className="relative max-w-5xl mx-auto mt-4 md:mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    next();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prev();
                  }
                }}
              >
                <Project key={current.id} {...current} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Next project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`w-2 h-2 rounded-full ${i === activeIndex ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
