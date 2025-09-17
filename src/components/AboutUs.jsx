import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../style";

const AboutUs = () => {
  const [activeProvider, setActiveProvider] = useState(0);
  const [showUpworkModal, setShowUpworkModal] = useState(false);

  const providerTestimonials = [
    {
      id: 0,
      name: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      quote: "I have excellent experience cooperating with this Dev team and I'm very happy with them. The communication is seamless and the project management is top-notch.",
      location: "Singapore"
    },
    {
      id: 1,
      name: "Marcus Rodriguez",
      role: "UI/UX Designer",
      quote: "Working with DevCraft Agency has been incredibly rewarding. Their collaborative approach and technical expertise make every project a success.",
      location: "Mexico City"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "DevOps Engineer",
      quote: "The team's professionalism and innovative solutions have exceeded my expectations. I'm proud to be part of their remote provider network.",
      location: "Bangalore"
    }
  ];

  return (
    <section id="about-us" className="mb-16">
      <motion.div
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-8">
          Who <span className="text-gradient">We Are</span>
        </h1>
        
        <div className="max-w-7xl mx-auto">
          {/* Main About Content */}
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black-gradient p-8 rounded-xl border border-gray-800 mb-8"
          >
            <div className="text-left space-y-6">
              <div className="flex md:flex-row flex-col items-center gap-4">
                <img src="/src/assets/whoWeAre.png" alt="About Us" className="w-1/2 h-auto rounded-lg" />
                <div>
                  <p className={`${styles.paragraph} text-[18px] leading-[32px]`}>
                    As a thriving IT agency with over a decade of proven expertise in software development, we have built lasting partnerships with talented remote collaborators across multiple countries, fostering relationships based on mutual respect and shared success.
                  </p>
                  
                  <p className={`${styles.paragraph} text-[18px] leading-[32px]`}>
                    We primarily operate on{" "}
                    <span 
                      className="text-gradient font-semibold cursor-pointer hover:underline decoration-teal-400 underline-offset-2 transition-all duration-300 text-[22px]"
                      onClick={() => setShowUpworkModal(true)}
                    >
                      Upwork
                    </span>
                    , where our track record of delivering high-quality projects has earned us consistent praise and repeat clients. Our skilled team has the capacity to handle multiple projects simultaneously, and we are looking to expand our impact while generating more income for everyone involved.
                  </p>
                </div>
              </div>
              
              
              <p className={`${styles.paragraph} text-[18px] leading-[32px]`}>
                Our commitment to excellence goes beyond just delivering projects – we create long-term value through innovative solutions, transparent communication, and a collaborative approach that empowers both our clients and our global network of remote professionals.
              </p>
            </div>
          </motion.div>

          {/* Key Strengths Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.div
              whileInView={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black-gradient p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-gradient font-poppins font-semibold text-[22px] mb-4">
                Decade of Excellence
              </h3>
              <p className="text-dimWhite text-[18px]">
                Over 10 years of proven expertise in software development, with a track record of successful project deliveries and satisfied clients across various industries.
              </p>
            </motion.div>
            
            <motion.div
              whileInView={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black-gradient p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-gradient font-poppins font-semibold text-[22px] mb-4">
                Global Network
              </h3>
              <p className="text-dimWhite text-[18px]">
                Strategic partnerships with talented remote collaborators across multiple countries, bringing diverse perspectives and specialized skills to every project.
              </p>
            </motion.div>
            
            <motion.div
              whileInView={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black-gradient p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-gradient font-poppins font-semibold text-[22px] mb-4">
                <span 
                  className="cursor-pointer hover:underline decoration-teal-400 underline-offset-2 transition-all duration-300"
                  onClick={() => setShowUpworkModal(true)}
                >
                  Upwork
                </span>{" "}
                Excellence
              </h3>
              <p className="text-dimWhite text-[18px]">
                Consistently high ratings and repeat clients on Upwork, demonstrating our reliability, quality delivery, and commitment to client satisfaction.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg border border-teal-500/20"
          >
            <p className="text-white font-poppins font-medium text-[16px]">
              <span className="text-gradient font-semibold">Our vision is to create a global ecosystem of success,</span> where talented professionals from around the world can collaborate, grow, and achieve remarkable results together while building sustainable, long-term partnerships.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Upwork Modal */}
      {showUpworkModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowUpworkModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gradient font-poppins font-semibold text-[28px]">
                What is Upwork?
              </h2>
              <button
                onClick={() => setShowUpworkModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6 text-white">
              <p className="text-[16px] leading-[28px]">
                <span className="text-gradient font-semibold">Upwork</span> is the world's largest freelancing platform, connecting businesses with skilled professionals from around the globe. It's like a marketplace where companies post projects and freelancers bid to work on them.
              </p>
              
              <div className="grid gap-4">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start">
                  <span className="text-2xl mr-3">🌍</span>
                  <div>
                    <h3 className="text-teal-400 font-semibold text-[16px] mb-1">Global Marketplace</h3>
                    <p className="text-[16px] text-gray-300">Millions of freelancers and businesses worldwide</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start">
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <h3 className="text-teal-400 font-semibold text-[16px] mb-1">Diverse Projects</h3>
                    <p className="text-[16px] text-gray-300">From web development to graphic design, writing, and more</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start">
                  <span className="text-2xl mr-3">🔒</span>
                  <div>
                    <h3 className="text-teal-400 font-semibold text-[16px] mb-1">Secure Payments</h3>
                    <p className="text-[16px] text-gray-300">Protected escrow system ensures safe transactions</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start">
                  <span className="text-2xl mr-3">⭐</span>
                  <div>
                    <h3 className="text-teal-400 font-semibold text-[16px] mb-1">Rating System</h3>
                    <p className="text-[16px] text-gray-300">Reviews and ratings help build trust and reputation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-lg border border-teal-500/20">
                <h3 className="text-gradient font-semibold text-[18px] mb-3">💡 Why Upwork Matters for Our Partnership</h3>
                <p className="text-[16px] leading-[28px]">
                  Upwork provides a trusted platform where we can showcase our skills, build long-term client relationships, and access a steady stream of high-quality projects. By partnering with us, you'll benefit from our established presence and proven track record on this platform.
                </p>
              </div>
              
              <div className="flex justify-center mt-6 gap-4">
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Visit Upwork
                </a>

                <a
                  href="https://www.upwork.com/i/how-it-works/freelancer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  For Freelancers
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutUs; 