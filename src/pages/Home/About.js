import React from "react";
import SectionTitle from "../../component/SectionTitle";

function About() {
  const skills = [
    "Python",
    "AI & ML",
    "Docker",
    "Git",
    "Java",
    "HTML,CSS",
    "JavaScript",
    "ReactJs",
    "Django",
    "Node",
    "MySQL",
    "MongoDB",
  ];
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/fdfae396-28be-4c2f-b40d-a48d5ce540be/Qr5HZR6wwp.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello! I'm Aditya Maurya, a passionate creator of web-based projects
            and an aspiring software engineer. I am currently completing my
            Graduate Training at TCS. During this training period, I have worked
            with various technologies, including Python, AI & ML, Docker, Git,
            Java, HTML, CSS, JavaScript, React.js, Django, Node.js, MySQL, and
            MongoDB, Data Structure and algorithm (DSA), Object Oriented
            Programming (OOPs).
          </p>
          <p className="text-white">
            I am eager to further develop my skills and pursue a career in
            software engineering. Known for my positive mindset,
            self-confidence, and strong work ethic, I am committed to continuous
            learning and excited to take on challenges that will help me grow
            both personally and professionally in the field of software
            engineering.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
