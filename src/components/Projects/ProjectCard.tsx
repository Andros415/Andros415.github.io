import React, { ReactElement } from "react";
import LanguageRow from "./LanguageRow";
import { GithubProject } from "./use.project.data";

interface ProjectCardProps {
  project: GithubProject;
  type: "Recent" | "Starred";
}

function ProjectCard({ project, type }: ProjectCardProps): ReactElement {
  let updatedDate = new Date(project?.updated_at).toDateString().slice(4);
  updatedDate = `${updatedDate.slice(0, 6)}, ${updatedDate.slice(7)}`;
  return (
    <div className="mx-auto w-mobile space-y-4 divide-y-2 divide-gray-400/20 rounded-lg border border-slate-500/50 bg-slate-500/50 p-4 text-left md:w-full">
      <div className="space-y-2">
        <h2 className="text-2xl">{project?.name}</h2>
        <p className="font-light">{project?.description}</p>
      </div>
      <div className="space-y-4">
        {type === "Recent" ? (
          <>
            <h2 className="pt-2 text-2xl font-light">Languages Used</h2>
            <LanguageRow languageURL={project?.languages_url as string} />
          </>
        ) : (
          <>
            <h2 className="pt-2 text-2xl font-light">
              Number of Fellow Stargazers 🔭
            </h2>
            <p className="text-center font-handwriting text-5xl tracking-wider text-amber-300">
              {project?.stargazers_count}
            </p>
          </>
        )}
        <button
          className="mx-auto block rounded-full bg-gray-800/60 px-12 py-3 text-xl transition-colors hover:bg-gray-800"
          onClick={() => window.open(`${project.url}`, "_blank")}
        >
          <i className="devicon-github-original" />
          &nbsp; GitHub Repo
        </button>
        <p className="text-center text-sm text-slate-300/60">
          <i>Last Updated on {updatedDate}</i>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
