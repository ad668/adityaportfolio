import React from "react";
import SectionTitle from "../../component/SectionTitle";
import { projectCategories } from "../../resources/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);

  const currentCategory = projectCategories[selectedCategoryIndex];
  const currentProject = currentCategory.projects[selectedProjectIndex];

  return (
    <div>
      <SectionTitle title="Projects" />

      {/* Category Buttons */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {projectCategories.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategoryIndex === index
                ? "bg-tertiary text-white border-tertiary"
                : "text-white border-gray-500"
            }`}
            onClick={() => {
              setSelectedCategoryIndex(index);
              setSelectedProjectIndex(0);
            }}
          >
            {item.category}
          </button>
        ))}
      </div>

      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Sidebar project list */}
        <div
          className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full"
          style={{ maxHeight: "250px", overflowY: "auto" }}
        >
          {currentCategory.projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProjectIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedProjectIndex === index
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
        <div className="flex items-center justify-center gap-10 sm:flex-col w-full">
          <div className="flex flex-col gap-5 w-full">
            {/* Title + Buttons */}
            <div className="flex items-center gap-3">
              <h1 className="text-secondary text-xl">{currentProject.title}</h1>

              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 bg-tertiary text-white px-3 py-1 rounded-lg shadow-md hover:bg-secondary transition-all text-sm">
                    <FaGithub size={16} /> Github
                  </button>
                </a>
              )}

              {currentProject.golive && (
                <a
                  href={currentProject.golive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 bg-tertiary text-white px-3 py-1 rounded-lg shadow-md hover:bg-secondary transition-all text-sm">
                    <FaExternalLinkAlt size={16} /> Go Live
                  </button>
                </a>
              )}
            </div>

            {currentProject.technology && (
              <p className="text-tertiary text-sm-1 font-semibold">
                <u>Technology</u> : {currentProject.technology}
              </p>
            )}

            <div className="text-white space-y-1">
              {currentProject.description
                .split(".")
                .filter((sentence) => sentence.trim() !== "")
                .map((sentence, index) => (
                  <p key={index}>
                    {index + 1}. {sentence.trim()}.
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
