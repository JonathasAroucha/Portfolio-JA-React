import React from "react"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-40 sd:pt-0 mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-sky-500">
            Contatc me
          </p>
          <p className="py-6 ">Do you have an opportunity for me? Contact me!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/099a1eae-228b-4c7b-8a10-4ac3996d8700"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="p-2 bg-transparent border-2 rounded-md 
                          text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Type your e-mail"
              className="my-4 p-2 bg-transparent border-2 rounded-md 
                          text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Type your message"
              rows="10"
              className="
                p-2 bg-transparent border-2 rounded-md text-white
                focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-sky-500 bg-sky-700 
            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" target="_blank"
            rel="noreferrer"
            >
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
