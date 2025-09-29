import React from "react";

function Intro() {
  return (
    <div className="h-[85vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white text-xl">Hi,<spn className="text-3xl">👋</spn>I am</h1>

      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Aditya Kumar Maurya
      </h1>

      <h1 className="text-6xl  sm:text-3xl text-white font-semibold">
        I am learning about Software Engineering.
      </h1>
      <p className="text-white w-2/3">
        Passionate about software engineering and Full Stack Development,I love
        building websites from start to finish! Whether it's designing the look
        or making sure everything works behind the scenes, I enjoy bringing
        ideas to life online.
      </p>

      {/* <a href="./AdityaKumar.pdf" download="Aditya Kumar"> */}
      <a href="https://aditya1resume.netlify.app" target="_blank" rel="noopener noreferrer">
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
          Get Resume
        </button>
      </a>
    </div>
  );
}

export default Intro;
