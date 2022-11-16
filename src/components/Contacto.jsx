import React from "react";
import { FormattedMessage } from "react-intl";
import email from "../assets/email.png";
import celu from "../assets/celu.png";

function Contacto() {
  return (
    <div
    name="contacto"
    className="w-full h-full bg-[#0a192f] flex justify-center text-center sm:text-left items-center p-4 pt-20 sm:pt-10"
    > 
      <form
        action="https://getform.io/f/cbf4156a-3cde-4ab2-bf80-5a2667edb207"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <img src={celu} alt="email" className=" absolute right-[180px] hover:scale-110 hover:duration-500 mt-17 rotate-12 w-[100px] h-[150px]" />
        <div className="pb-8">
          <p className="text-gray-300 text-2xl sm:text-4xl font-bold inline border-b-4 border-[#E4AD59]">
            <FormattedMessage id="contact.title" defaultMessage={""} />
          </p>
          <p className="py-4 text-gray-300">
            <span className="text-[#E4AD59]">//</span>{" "}
            <FormattedMessage id="contact.sub" defaultMessage={""} />
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="nombre"
          className="bg-[#ccd6f6]  p-2 "
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Message"
          className=" p-2 bg-[#ccd6f6] "
        ></textarea>
        <button className="text-white border-2 hover:bg-[#E4AD59] hover:border-[#E4AD59] px-4 py-3 my-8 mx-auto flex items-center">
          <FormattedMessage id="form.button" defaultMessage={""}/>
        </button>
      </form>
<img src={email} alt="email" className=" absolute left-32 hover:scale-110 hover:duration-500 mt-20 -rotate-12 w-[150px] h-[100px]" />
    </div>
  );
}

export default Contacto;
