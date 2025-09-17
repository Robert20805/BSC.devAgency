import React from "react";
import { motion } from "framer-motion";
import styles from "../style";

const Opportunity = () => {
  return (
    <section id="opportunity" className="mb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
            Partnership <span className="text-gradient">Opportunities</span>
          </h1>
          <p className={`${styles.paragraph} max-w-3xl mx-auto`}>
            You can earn extra income effortlessly by creating an Upwork account and partnering with our experienced team. Let your Upwork account generate passive earnings for you while we handle all the projects and communication.
          </p>
        </motion.div>

        {/* What we offer you? */}
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-black-gradient p-6 rounded-xl border border-gray-800 mb-8"
        >
          <h2 className="text-white font-poppins font-semibold ss:text-[40px] text-[32px] mb-4 text-center">
            What <span className="text-gradient">We Offer You?</span>
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-dimWhite text-[18px] leading-[26px]">
              We offer a trustworthy collaboration where you simply provide account access and enjoy a fair share of every project's success. This is a great way to boost your income without any need for technical skills or active involvement.
            </p>
            <p className="text-dimWhite text-[18px] leading-[26px]">
              By joining forces with us, your account becomes a valuable tool for mutual growth and steady financial rewards. We ensure you have all the necessary tools for the job, including providing a new computer or phone if needed—so you can focus on opportunity, not obstacles.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-dimWhite font-poppins text-[14px]">
            <li className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">Passive Income</span>
              <p className="mt-2 text-[16px]">Earn money effortlessly while we handle all project work and client communication.</p>
            </li>
            <li className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">No Skills Required</span>
              <p className="mt-2 text-[16px]">No technical expertise needed—just provide account access and enjoy the benefits.</p>
            </li>
            <li className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">Complete Control</span>
              <p className="mt-2 text-[16px]">You retain full control over your account and can suspend access whenever you wish.</p>
            </li>
            <li className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">Zero Risk</span>
              <p className="mt-2 text-[16px]">There's absolutely no risk to you—your account always remains yours, with no obligations.</p>
            </li>
          </ul>
        </motion.div>

        {/* Why choose us? */}
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-black-gradient p-6 rounded-xl border border-gray-800 mb-8"
        >
          <h2 className="text-white font-poppins font-semibold ss:text-[40px] text-[32px] mb-4 text-center">
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-dimWhite text-[18px] leading-[26px]">
              You can focus on your daily life and hobbies while your Upwork profile quietly brings in extra money. We take care of everything, from finding jobs to completing projects, so you can enjoy stress-free earnings.
            </p>
            <p className="text-dimWhite text-[18px] leading-[26px]">
              If you're looking for a simple and flexible way to make money online, this opportunity is perfect for you. Your support allows us to expand our business, and in return, you receive consistent and generous payouts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">Proven Track Record</span>
              <p className="mt-2 text-dimWhite text-[16px]">Over 10 years of successful project delivery with satisfied clients across the US, America, and Europe.</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">Transparent Partnership</span>
              <p className="mt-2 text-dimWhite text-[16px]">Real-time monitoring, open communication, and clear terms ensure you're always informed.</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-lg">
              <span className="text-white font-semibold text-[18px]">Global Success</span>
              <p className="mt-2 text-dimWhite text-[16px]">We have helped individuals worldwide achieve financial stability and growth through these partnerships.</p>
            </div>
          </div>
        </motion.div>

        {/* How can I trust you? */}
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black-gradient p-6 rounded-xl border border-gray-800 mb-8"
        >
          <h2 className="text-white font-poppins font-semibold ss:text-[40px] text-[32px] mb-4 text-center">
            How Can I <span className="text-gradient">Trust You?</span>
          </h2>
          <div className="space-y-4">
            <p className="text-dimWhite text-[18px] leading-[26px] text-center">
              "How can I trust you?" That's a question we often hear at the very start of our partnerships.
            </p>
            <p className="text-dimWhite text-[18px] leading-[26px]">
              We've built long-term, win-win relationships with partners across the US and Europe, sharing real stories of growth and financial stability that have made a real difference in people's lives. If at any point something doesn't feel right to you, you lose nothing—your account is always yours to keep. But for us, a lost partnership can mean missing out on over $3,000 in monthly revenue, which would be a huge setback for our small, dedicated team that has invested so much passion in this work.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-lg border border-teal-500/20 text-center"
        >
          <p className="text-white font-poppins font-medium text-[18px] mb-4">
            <span className="text-gradient font-semibold">Becoming our partner means joining a positive team</span> that values honesty, fairness, and long-term relationships.
          </p>
          <p className="text-dimWhite text-[16px] leading-[26px]">
            No upfront investment or special skills are required—just your willingness to collaborate and grow with us.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;
