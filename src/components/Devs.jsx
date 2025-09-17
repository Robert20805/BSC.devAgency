import React from "react";
import { motion } from "framer-motion";
import styles from "../style";

const DevsAndProject = () => {
  const developers = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Lead Frontend Developer",
      photo: "./images/dev_1.png",
      quote: "Working with DevCraft Agency has been an incredible journey. The collaborative environment and cutting-edge projects have pushed my skills to new heights. Every day brings exciting challenges and innovative solutions.",
      location: "San Francisco, USA"
    },
    {
      id: 2,
      name: "Elena Petrov",
      role: "Backend Systems Architect",
      photo: "./images/dev_2.png",
      quote: "The technical excellence and attention to detail at DevCraft Agency is unmatched. I've had the opportunity to work on complex enterprise solutions that have made a real impact in the industry.",
      location: "Toronto, Canada"
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      role: "Full-Stack Developer",
      photo: "./images/dev_3.png",
      quote: "Being part of this global team has been transformative. The diversity of perspectives and the quality of mentorship here has accelerated my growth as a developer beyond what I thought possible.",
      location: "Cairo, Egypt"
    },
    {
      id: 4,
      name: "Lirantal Rodriguez-Mendez",
      role: "DevOps Engineer",
      photo: "./images/dev_4.jpeg",
      quote: "The infrastructure challenges at DevCraft Agency have been incredibly rewarding. Building scalable systems and ensuring seamless deployments has allowed me to grow both technically and as a team leader.",
      location: "Vancouver, Canada"
    }
  ];

  const DeveloperCard = ({ developer, isReversed = false }) => {
    return (
      <motion.div
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
          isReversed ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Photo Section */}
        <div className="flex-1">
          <div className="relative">
            <img
              src={developer.photo}
              alt={developer.name}
              className="w-full h-80 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-poppins font-semibold text-[20px]">{developer.name}</h3>
              <p className="font-poppins text-[14px] text-gray-300">{developer.role}</p>
              <p className="font-poppins text-[12px] text-teal-400">{developer.location}</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex-1">
          <div className="bg-black-gradient p-8 rounded-lg border border-gray-800 h-full flex flex-col justify-center">
            <div className="mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mb-4"></div>
              <h4 className="text-gradient font-poppins font-semibold text-[24px] mb-2">
                {developer.name}
              </h4>
              <p className="text-dimWhite font-poppins text-[16px] mb-1">
                {developer.role}
              </p>
              <p className="text-teal-400 font-poppins text-[14px]">
                {developer.location}
              </p>
            </div>
            
            <blockquote className="text-white font-poppins text-[18px] leading-relaxed italic">
              "{developer.quote}"
            </blockquote>
            
            <div className="mt-6 flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-dimWhite font-poppins text-[14px] ml-2">5.0 Rating</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="devs-and-project" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-6">
            Our <span className="text-gradient">Lead Developers</span>
          </h1>
          <p className={`${styles.paragraph} max-w-3xl mx-auto`}>
            Meet the talented developers who bring our projects to life. Each team member brings unique expertise and passion to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {developers.map((developer, index) => (
            <DeveloperCard
              key={developer.id}
              developer={developer}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevsAndProject; 