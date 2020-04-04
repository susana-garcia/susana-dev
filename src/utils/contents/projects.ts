import { loadContents, Content } from 'utils/contents'

export type Project = Content

export interface ProjectMap {
  project: Project
  next?: Project
  prev?: Project
}

export function loadProjects() {
  const articles: Project[] = loadContents('project')
  return articles
}

export function loadProject(slug: string) {
  const projects = loadProjects()

  const index = projects.findIndex(project => project.slug == slug)

  const projectMap: ProjectMap = {
    project: projects[index],
  }

  if (index > 0) projectMap.prev = projects[index - 1]
  if (index < projects.length - 1) projectMap.next = projects[index + 1]

  return projectMap
}
