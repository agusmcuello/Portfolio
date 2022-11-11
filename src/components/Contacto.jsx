import React from "react";
import { FormattedMessage } from "react-intl";

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
        <div className="pb-8">
          <p className="text-gray-300 text-2xl sm:text-4xl font-bold inline border-b-4 border-[#E4AD59]">
            <FormattedMessage id="contact.title" defaultMessage={""} />
          </p>
          <p className="py-4 text-gray-300">
            <span>//</span>{" "}
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
    </div>
  );
}

export default Contacto;
