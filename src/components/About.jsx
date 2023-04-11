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
          <p className="text-4xl font-bold inline border-b-4 border-sky-500 mt-10">
            About me
          </p>
        </div>
        <div className="mt-10">
          <p className="text-xl ">
            I'm Jonathas Aroucha, I from Brazil in Recife/PE. 
          </p>
          <p className="text-xl mt-5">
            Hello, I'm a React Developer with experience in international projects and a focus on ecommerce with Oracle and ReactJS. I have a passion for challenges and continuous learning. My international experience has made me more flexible and adaptable, able to handle challenges of different natures. If you're looking for a React developer with ecommerce experience and a constant learning mindset, let's talk.
          </p>
        </div>

        <br />
      </div>
    </div>
  )
}

export default About
