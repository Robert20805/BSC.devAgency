import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import  bitcoin from "../assets/bitcoin.jpeg";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail, SiDiscord, SiTelegram } from "react-icons/si";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div className={`${layout.sectionReverse} max-w-7xl mx-auto gap-y-4 `} >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-white font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}>
          {aboutMe.tagLine}
        </p>
        <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[26px] max-w-[600px] mt-3">
          If you’re interested in our team or would like more details, please feel free to contact me anytime. I look forward to new opportunities for successful collaboration.
        </p>
      </div>
      <div className="flex flex-row gap-10">
        <div className={` ${layout.sectionInfo}`}>
          <h2 className="text-xl font-bold text-white font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            Contact Us
          </h2>
          
          <div className="flex flex-col gap-8 mt-8">
            <div className="text-white mr-5 text-[25px] hover:text-teal-200 flex items-center gap-2" aria-label="Email">
              <SiGmail /> <span class="text-[18px]">: robertphillips20805@gmail.com</span>
            </div>
            <div className="text-white mr-5 text-[25px] hover:text-teal-200 flex items-center gap-2" aria-label="Discord">
              <SiDiscord /> <span class="text-[18px]">: robert20805.</span>
            </div>
            <div className="text-white mr-5 text-[25px] hover:text-teal-200 flex items-center gap-2" aria-label="Telegram">
              <SiTelegram /> <span class="text-[18px]">: @Robert20805</span>
            </div>
          </div>
        </div>
        <div className="md:ml-auto mt-10 md:mt-0">
          <img
            src={bitcoin}
            alt="Parth Mittal"
            className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
          />
        </div>
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      <p>
        Made with 💙 by Lead Developers in DevCraft Agency
      </p>
    </div>
  </footer>
);

export default Footer;
