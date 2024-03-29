import React from "react"

import Me from "../assets/Me.jpeg"

import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
       to-gray-800 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
            Front-End Developer
          </h2>
          <p className="text-white py-4 max-w-md">
          I'm Front-End Developer and future Full-Stack Developer.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-sky-500 bg-sky-700 cursor-pointer hover:scale-110 duration-300  "
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Me}
            alt="my profile"
            className="md:ml-4 md:mr-4 rounded-2xl mx-auto w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
