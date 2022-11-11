import React from "react";
import food from "../assets/FoodApp.png";
import wheather from "../assets/WeatherApp.png";
import segura from "../assets/segura.png";
import conoce from "../assets/conoce.png"
import { FormattedMessage } from "react-intl";

function Proyectos() {
  return (
    <div
    name="proyectos"
      className="w-full md:h-screen text-center sm:text-left text-gray-300 bg-[#0a192f] pt-20 sm:pt-1"
    >
      <div  className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div  className="pb-8">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#E4AD59]">
            <FormattedMessage id="work.title" defaultMessage={""} />
          </p>
          <p className="py-6">
            <span>//</span>
            <FormattedMessage id="work.sub" defaultMessage={""} />
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                Food-Order-App
              </span>
              <div className="pt-8 text-center">
                <a
                  rel="noreferrer"
                  href="https://agusmcuello-food-order-app.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/agusmcuello/food-order-app.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${conoce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                Conoce-Uruguay-App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://conoce-uruguay.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/agusmcuello/Uruguay-Turismo-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${segura})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                Segura-App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://agusmcuello-segura.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/agusmcuello/Segura-app.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${wheather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traking-wider">
                Weather-App
              </span>
              <div className="pt-8 text-center">
                <a href="https://agusmcuello-weatherapp.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/agusmcuello/Weather-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
