import React, { useState,useContext } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import curri from "../assets/Agustin-Martinez-CV.pdf"
import {FormattedMessage} from "react-intl";
import es from "../assets/es.png"
import us from "../assets/us.png"
import { langContext } from "../context/langContext";


function NavBar() {
  const [nav, setNav] = useState(false);
  
  const idioma = useContext(langContext)

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo-images" style={{ width: "60px" }} />
      </div>

          <div className=" fixed w-[65%] flex flex-row items-end justify-end">
           <button onClick={()=> idioma.setLanguage("en-US")}> <img src={us} alt="ingles" className="w-[40px] h-[38px] " /></button>
            <button onClick={()=> idioma.setLanguage("es-ES")}><img src={es} alt="español" className="w-[60px] h-[40px]"  /></button>
          </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <FormattedMessage id="menu.home" defaultMessage={"Home"}/>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
          <FormattedMessage id="menu.about" defaultMessage={"about"}/>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
          <FormattedMessage id="menu.skills" defaultMessage={"skills"}/>
          </Link>
        </li>
        <li>
          <Link to="proyectos" smooth={true} duration={500}>
          <FormattedMessage id="menu.work" defaultMessage={"work"}/>
          </Link>
        </li>
        <li>
          <Link to="contacto" smooth={true} duration={500}>
          <FormattedMessage id="menu.contact" defaultMessage={"contact"}/>
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Portada
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="proyectos"
            smooth={true}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contacto"
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/agustinmcuello"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/agusmcuello"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={curri} download={curri}
              target="_blank"
              rel="noreferrer"
            >
              Curriculum <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
