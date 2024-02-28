export interface ProjectInfo {
  image: string;
  description: string;
  githubUrl: string;
  githubPagesUrl: string;
}

export interface ProjectCategory {
  [key: number]: ProjectInfo[];
}
