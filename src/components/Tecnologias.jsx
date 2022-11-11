import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import docker from "../assets/docker.png";
import firebase from "../assets/firebase.png";
import node from "../assets/node.png";
import postgre from "../assets/postgre.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import { FormattedMessage } from "react-intl";

function Tecnologias() {
  return (
    <div name="skills" className="w-full h-screen pt-20 sm:pt-1 bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 text-center sm:text-left flex flex-col items-center sm:items-start justify-center w-full h-full">
        <div>
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#E4AD59]">
            <FormattedMessage id="tec.title" defaultMessage={""}/>
          </p>
          <p className="py-4 text-[14px] sm:text-lg">
            <span>//</span><FormattedMessage id="tec.sub" defaultMessage={""}/>
          </p>
        </div>
        <h2>Frontend</h2>
        <div className=" grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8 w-[200px] sm:w-[1000px]">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-50">
            <img src={html} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={js} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={tailwind} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">Tailwind</p>
          </div>
        </div>
        <h2>Backend</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8 w-[200px] sm:w-[1000px]">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={postgre} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={firebase} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={docker} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={node} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={github} alt="html-icon" className="w-20 mx-auto" />
            <p className="text-[12px]">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
