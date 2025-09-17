import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import remoteProvider from "../assets/remoteProvider.png";
import provider1 from "../assets/provider_1.jpeg";
import provider2 from "../assets/provider_2.jpg";
import provider3 from "../assets/provider_3.jpg";
import provider4 from "../assets/provider_4.jpg";

const RemoteProviders = () => {
  const [activeProvider, setActiveProvider] = useState(0);

  const providerTestimonials = [
    {
      id: 0,
      name: "Lucas Tan",
      quote: "Working with this agency has always been straightforward and transparent. They keep every promise and handle payments promptly. Communication is quick and they always address my concerns. I feel respected and valued as a partner in every interaction.",
      location: "Singapore"
    },
    {
      id: 1,
      name: "Maria Santos",
      quote: "This team is honest and easy to work with. They make sure I am comfortable with every agreement we make. I’ve never had any issues with trust or reliability. Their professionalism sets them apart from others I’ve worked with.",
      location: "Philippines"
    },
    {
      id: 2,
      name: "Juan Rodriguez",
      quote: "Lending my account was a smooth and hassle-free experience. They clearly explained the entire process and answered all my questions. I appreciate their attention to detail and respect for our agreement. I always feel informed and included in every step.",
      location: "Colombia"
    },
    {
      id: 3,
      name: "Valentina Gomez",
      quote: "I’m happy to recommend this agency to others. They value long-term relationships and mutual success. Every interaction has been positive and productive. Their support and friendliness have made our partnership truly enjoyable.",
      location: "Argentina"
    }
  ];

  return (
    <section id="remote-providers" className="mb-16">
      <motion.div
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-8">
          Who Are <span className="text-gradient">Remote Provider?</span>
        </h1>
        
        <div className="max-w-7xl mx-auto">
          {/* What is a Remote Provider? */}
          <motion.div
            whileInView={{ y: [-16, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black-gradient p-6 rounded-lg border border-gray-800 text-left"
          >
            <div className="space-y-4">
              <div className="flex md:flex-row flex-col gap-4 items-center">
                <div>
                  <p className="text-dimWhite text-[18px] leading-[28px]">
                    A remote provider is an individual who creates an <span className="text-gradient font-semibold">Upwork</span> account using their own personal information and grants us secure access to this account. By partnering with us as a provider, you empower our agency to expand our presence on Upwork and pursue more high‑value project opportunities.
                  </p>
                  <p className="text-dimWhite text-[18px] leading-[28px]">
                    Providers play a crucial role in our growth while maintaining the integrity and authenticity of each account. Together, we build a larger footprint, win more work, and create shared success for everyone involved.
                  </p>
                  <p className="text-dimWhite text-[18px] leading-[28px]">
                    We also provide reliable monthly compensation to our remote providers — with transparent terms, clear deliverables, and on‑time payouts. Your contribution is valued, and your efforts are rewarded consistently.
                  </p>
                </div>
                <img src={remoteProvider} alt="About Us" className="w-1/3 h-auto rounded-lg" />
              </div>
              

              <div className="grid md:grid-cols-4 gap-4 mt-4">
                <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
                  <h3 className="text-teal-300 text-[20px] font-semibold mb-1">Grow With Us</h3>
                  <p className="text-gray-300 text-[16px]">Unlock more bids, more visibility, and more opportunities—backed by our proven delivery.</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
                  <h3 className="text-teal-300 text-[20px] font-semibold mb-1">Stay Authentic</h3>
                  <p className="text-gray-300 text-[16px]">Your account remains yours. We operate transparently and respect platform guidelines.</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
                  <h3 className="text-teal-300 text-[20px] font-semibold mb-1">Shared Wins</h3>
                  <p className="text-gray-300 text-[16px]">We pursue long‑term, win‑win partnerships with fair compensation and clear terms.</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
                  <h3 className="text-teal-300 text-[20px] font-semibold mb-1">Monthly Compensation</h3>
                  <p className="text-gray-300 text-[16px]">Guaranteed monthly payouts with transparent rates, clear milestones, and on‑time payments.</p>
                </div>

              </div>

            </div>
          </motion.div>
          
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg border border-teal-500/20"
          >
            <p className="text-white font-poppins font-medium text-[18px]">
              <span className="text-gradient font-semibold">Our success comes from cooperating with our remote providers,</span> and we want to cooperate with more and more remote providers to expand our capabilities and deliver even better results.
            </p>
          </motion.div>

          {/* Team Photos Section */}
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-white font-poppins font-semibold ss:text-[40px] text-[32px] text-center mb-8">
              Our Top <span className="text-gradient">Remote Providers</span>
            </h2>
            
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-10">
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activeProvider === 0 ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveProvider(0)}
              >
                <img 
                  src={provider1} 
                  alt="Remote Provider 1" 
                  className={`w-full object-cover rounded-lg shadow-lg transition-all duration-300 ${
                    activeProvider === 0 
                      ? 'shadow-xl ring-2 ring-teal-400' 
                      : 'hover:shadow-xl'
                  }`}
                />
                <p className="text-white font-poppins font-medium text-[14px] mt-3">
                  {providerTestimonials[0].name}
                </p>
              </div>
              
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activeProvider === 1 ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveProvider(1)}
              >
                <img 
                  src={provider2} 
                  alt="Remote Provider 2" 
                  className={`w-full object-cover rounded-lg shadow-lg transition-all duration-300 ${
                    activeProvider === 1 
                      ? 'shadow-xl ring-2 ring-teal-400' 
                      : 'hover:shadow-xl'
                  }`}
                />
                <p className="text-white font-poppins font-medium text-[14px] mt-3">
                  {providerTestimonials[1].name}
                </p>
              </div>
              
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activeProvider === 2 ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveProvider(2)}
              >
                <img 
                  src={provider3} 
                  alt="Remote Provider 3" 
                  className={`w-full object-cover rounded-lg shadow-lg transition-all duration-300 ${
                    activeProvider === 2 
                      ? 'shadow-xl ring-2 ring-teal-400' 
                      : 'hover:shadow-xl'
                  }`}
                />
                <p className="text-white font-poppins font-medium text-[14px] mt-3">
                  {providerTestimonials[2].name}
                </p>
              </div>
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activeProvider === 3 ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveProvider(3)}
              >
                <img 
                  src={provider4} 
                  alt="Remote Provider 3" 
                  className={`w-full object-cover rounded-lg shadow-lg transition-all duration-300 ${
                    activeProvider === 3
                      ? 'shadow-xl ring-2 ring-teal-400' 
                      : 'hover:shadow-xl'
                  }`}
                />
                <p className="text-white font-poppins font-medium text-[14px] mt-3">
                  {providerTestimonials[3].name}
                </p>
              </div>

            </div>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <div className="bg-black-gradient p-8 rounded-lg border border-gray-800">
              <motion.div
                key={activeProvider}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-4">
                  <h3 className="text-gradient font-poppins font-semibold text-[24px] mb-2">
                    {providerTestimonials[activeProvider].name}
                  </h3>
                  <p className="text-dimWhite font-poppins text-[16px] mb-1">
                    {providerTestimonials[activeProvider].role}
                  </p>
                  <p className="text-teal-400 font-poppins text-[14px]">
                    {providerTestimonials[activeProvider].location}
                  </p>
                </div>
                
                <blockquote className="text-white font-poppins text-[18px] italic leading-relaxed">
                  "{providerTestimonials[activeProvider].quote}"
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RemoteProviders; 