export interface GithubProject {
  name: string;
  description: string;
  html_url: string;
  url?: string;
  stargazers_count: number;
  updated_at: string;
  languages_url?: string;
}

export interface useProjectDataReturn {
  projectData: { Recent: GithubProject[]; Starred: GithubProject[] };
  loading: boolean;
}