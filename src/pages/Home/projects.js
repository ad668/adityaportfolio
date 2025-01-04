import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { projects } from '../../resources/projects';


function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-2 sm:w-full"
                    : "text-white"
                  }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-10 sm:flex-col'>
          
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>

            <h2 className="text-tertiary text-xl cursor-pointer">
              <a href={projects[selectedItemIndex].link} target="_blank" rel="noopener noreferrer">Github Link </a>
            </h2>
            <p className='text-white'>{projects[selectedItemIndex].description}</p>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects