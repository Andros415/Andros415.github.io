import React, { ReactElement } from "react";
import { Tab } from "@headlessui/react";
import ProjectCard from "./ProjectCard";
import useProjectData from "./use.project.data";

function Projects(): ReactElement {
  const { projectData, loading } = useProjectData();

  return (
    <div
      className="mt-14 min-h-screen min-w-full scroll-mt-28 text-center font-main text-white"
      id="Projects"
    >
      <h1 className="text-5xl font-bold tracking-wider">Projects</h1>
      <Tab.Group>
        <Tab.List className="mx-auto mt-8 flex max-w-mobile space-x-5 rounded-xl bg-black/20 p-2 text-2xl sm:max-w-md">
          {Object.keys(projectData).map((sortType) => (
            <Tab
              key={sortType}
              className={({ selected }) =>
                `basis-1/2 p-3 transition-colors ${
                  selected ? "rounded-lg bg-white/5 text-teal" : ""
                }`
              }
            >
              {sortType}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="my-8 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 md:px-4">
              {projectData?.Recent?.map((project) => (
                <ProjectCard
                  key={project.name}
                  type="Recent"
                  project={project}
                  loading={loading}
                />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="my-8 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 md:px-4">
              {projectData?.Starred?.map((project) => (
                <ProjectCard
                  key={project.name}
                  type="Starred"
                  project={project}
                  loading={loading}
                />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Projects;
