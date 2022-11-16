import { FormattedMessage } from "react-intl";
import yo from "../assets/yo2.png"

function SobreMi() {
  return (
    <div name="about" className="w-full h-screen pt-10 bg-[#0a192f] text-gray-300">
      <img className=" absolute top-auto mt-10 left-[300px] w-[220px]  h-[220px] pt-4 hover:scale-110 hover:-rotate-6 hover:duration-500 -rotate-3" src={yo} alt="yo" />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid text-center sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-1 sm:pb-8 pl-4">
            <p className="text-2xl sm:text-4xl text-center font-bold inline border-b-4 border-[#E4AD59]">
            <FormattedMessage id="about.title" defaultMessage={"About me"}/>
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-center font-bold">
            <p className="sm:text-4xl">
            <FormattedMessage id="about.hi" defaultMessage={"Hi!"}/><br/>
            <FormattedMessage id="about.sub" defaultMessage={"About me"}/>
            </p>
          </div>
          <div className="text-[14px] text-center sm:text-left">
          <FormattedMessage id="about.desc1" defaultMessage={""}/><br/>
          <FormattedMessage id="about.desc2" defaultMessage={""}/><br/>
          <FormattedMessage id="about.desc3" defaultMessage={""}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
