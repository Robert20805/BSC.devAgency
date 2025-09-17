import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";
import team from "../assets/team.png";


// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[70px] leading-[80px]">
            Transforming Ideas
            <br className="sm:block hidden" /> Into Digital Reality
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          {aboutMe.intro}
        </p>
        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          {aboutMe.weWant_1} <span className="text-gradient font-semibold text-[26px]">remote providers</span> {aboutMe.weWant_2}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* image part */}
        <div className="relative z-index-[5] h-[90%] w-[85%]">
          {/* <Lottie {...defaultOptions} /> */}
          <img 
            src={team} 
            alt="DevCraft Agency Team" 
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <LetsConnect /> */}
      </div>
    </section>
  );
};

export default Hero;
