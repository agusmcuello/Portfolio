import React,{useState,useEffect} from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";
import "./home.scss"
import AnimatedLetters from "./AnimatedLetters";
import logo from "../assets/compu.png"

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["A","g","u","s","t","i","n", " ", "M","a","r","t","i","n","e","z"," ","C","u","e","l","l","o"];

  useEffect(() => {
     setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
         <div className="container home-page">
         <div className="text-zone">
          <p className="text-[#E4AD59] hi">
            <FormattedMessage id="home-p" defaultMessage={"Hola"}/>
          </p>
         <h1 className="text-xl sm:text-6xl title">
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={5}/>
          </h1>
          <h2 className="text-1xl sm:text-4xl font-bold text-[#8892b0]">
          <FormattedMessage id="home-desc" defaultMessage={"Im a Full Stack Web Developer"}/>

          </h2>
         </div>
         </div>
          <img className="home-logo" src={logo} alt="logo-home"/>
          <div>
              <button className="text-white group border-2 px-6 py-3 my-14 flex items-center hover:bg-[#E4AD59] hover:border-[#E4AD59] buton">
              <Link to="about" smooth={true} duration={500}>
              <FormattedMessage id="home-button" defaultMessage={"Let's connect"}/>
                </Link>
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
          </div>
        </div>
      </div>
  );
}

export default Home;
