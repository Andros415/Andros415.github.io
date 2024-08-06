import { useEffect, useState } from "react";
import { useProjectDataReturn, GithubProject } from "./Projects.interface";

const useProjectData = (): useProjectDataReturn => {
  const [projectData, setProjectData] = useState({ Recent: [], Starred: [] });
  const [loading, setLoading] = useState(true);

  const fetchProjectData = async () => {
    const projRes = await fetch(
      "https://api.github.com/users/andros415/repos?sort=updated&per_page=4"
    );
    const projectResData = await projRes.json();
    const projectDataFiltered = projectResData.map(
      ({
        name,
        description,
        html_url,
        updated_at,
        languages_url,
      }: GithubProject) => {
        return {
          url: html_url,
          name,
          description,
          updated_at,
          languages_url,
        };
      }
    );
    return projectDataFiltered;
  };

  const fetchProjectSectionData = async () => {
    const res = await fetch(
      "https://api.github.com/users/andros415/starred?per_page=4"
    );
    const starredData = await res.json();
    const starredDataFiltered = starredData.map(
      ({
        name,
        description,
        html_url,
        stargazers_count,
        updated_at,
      }: GithubProject) => {
        return {
          url: html_url,
          name,
          description,
          stargazers_count,
          updated_at,
        };
      }
    );
    fetchProjectData().then((projectDataFiltered) => {
      setProjectData({
        Recent: projectDataFiltered,
        Starred: starredDataFiltered,
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProjectSectionData().catch((err) =>
      console.log(`Failed getting project data - ${err}`)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { projectData, loading };
};

export default useProjectData;
