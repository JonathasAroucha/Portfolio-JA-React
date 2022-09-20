import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500 mt-10">
            About me
          </p>
        </div>
        <div className="mt-10">
          <p className="text-xl ">
            I'm Jonathas Aroucha, I from Brazil in Recife/PE. 
          </p>
          <p className="text-xl mt-5">
            I'm Front-End Jr Developer at Compass.UOL.
            In the last year at Compass, I worked on ecommerce pages with ReactJS and OCC.
            I love ReactJS, I want to grow and specialize in ReactJS. 
            My dream is to live and work in Portugal!
          </p>
        </div>

        <br />
      </div>
    </div>
  )
}

export default About
