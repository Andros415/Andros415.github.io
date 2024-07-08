import { GithubProject } from "../Projects.interface";

export interface ProjectCardProps {
  project: GithubProject;
  type: "Recent" | "Starred";
  loading: boolean;
}