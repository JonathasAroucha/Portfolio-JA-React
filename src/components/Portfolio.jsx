// import React from "react"
// import workImg from "../assets/projetos/workImg.jpeg"
// import realEstate from "../assets/projetos/realestate.jpg"
import barberShop from "../assets/projetos/barbershop.jpg"
import netflixClone from "../assets/projetos/netflixclone.jpg"
import perfilGitHubApi from "../assets/projetos/perfilgithubapi.jpg"
import clientsApi from "../assets/projetos/clientsapi.jpg"
import letMeAsk from "../assets/projetos/letmeask.jpg"
import igniteLab from "../assets/projetos/ignitelab.jpg"

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-gray-300 bg-gradient-to-b from-black
    to-gray-800"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-500">
            Portfolio
          </p>
          <p className="py-2">Check out some of my work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${barberShop})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:duration-200">
              <span className="text-2xl font-bold text-green-600 tracking-wider text-center ml-4">
                Barber Shop
                <p className=" text-xs flex text-center">
                  HTML5 | CSS3 | Javascript
                </p>
              </span>

              {/* LINK DEMONSTRAÇÃO */}
              <div className="pt-8 text-center">
                <a
                  href="https://jonathasaroucha.github.io/Barbershop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>

                {/* LINK REPOSITORIO */}
                <a
                  href="https://github.com/JonathasAroucha/Barbershop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflixClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:duration-200">
              <span className="text-2xl font-bold text-green-600 tracking-wider text-center ml-8">
                Netflix Clone
                <p className=" text-xs flex text-center">
                  React.js | CSS3 | API Themoviedb
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://jfanetflixclone.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JonathasAroucha/Netflixclone_Reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${perfilGitHubApi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:duration-200">
              <span className="text-2xl font-bold text-green-600 tracking-wider text-center ml-12">
                Perfil Github API
                <p className=" text-xs flex text-center m-1">
                  React.js | Styled-Component | Axios | Context
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://perfilgithubapi-jonathasaroucha.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/JonathasAroucha/Perfil-github-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${clientsApi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:duration-200">
              <span className="text-2xl font-bold text-green-600 tracking-wider text-center ml-6">
                Clients Api
                <p className=" text-xs flex text-center">
                  React.js | Material UI | Axios
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://clients-api.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/JonathasAroucha/Clients-Api"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${letMeAsk})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:duration-200">
              <span className="text-2xl font-bold text-green-600 tracking-wider text-center ml-10">
               Letme Ask
                <p className=" text-xs flex text-center">
                  React.js | Firebase | TypeScript
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://letmeask-jfa.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/JonathasAroucha/Letmeask-jfa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${igniteLab})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:duration-200">
              <span className="text-2xl font-bold text-green-600 tracking-wider text-center ml-20">
                Ignite Lab
                <p className=" text-xs flex text-center m-1">
                  React.js | Tailwind | React-icons | TypeScript | GraphQL
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://ignite-lab-react-9lobinmgi-jonathasaroucha.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JonathasAroucha/ignite-lab-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-green-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
