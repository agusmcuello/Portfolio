import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";

function Home() {
  return (
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#E4AD59]">
            <FormattedMessage id="home-p" defaultMessage={"Hola"}/>
          </p>
          <h1 className="text-2xl sm:text-6xl font-bold text-[#d9d9d9]">
            Agustin Martinez Cuello
          </h1>
          <h2 className="text-1xl sm:text-4xl font-bold text-[#8892b0] titulo">
          <FormattedMessage id="home-desc" defaultMessage={"Im a Full Stack Web Developer"}/>

          </h2>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-14 flex items-center hover:bg-[#E4AD59] hover:border-[#E4AD59]">
              <FormattedMessage id="home-button" defaultMessage={"Let's connect"}/>
                <p className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Home;
