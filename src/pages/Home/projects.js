import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { projects } from '../../resources/projects';
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Sidebar project list */}
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-2 sm:w-full"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5 w-full">
            {/* Title + Button inline */}
            <div className="flex items-center gap-3">
              <h1 className="text-secondary text-xl">
                {projects[selectedItemIndex].title}
              </h1>

              <a
                href={projects[selectedItemIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 bg-tertiary text-white px-3 py-1 rounded-lg shadow-md hover:bg-secondary transition-all text-sm">
                  <FaGithub size={16} />
                  Github
                </button>
              </a>
            </div>

            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
