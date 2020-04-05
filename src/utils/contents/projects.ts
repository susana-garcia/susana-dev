import { loadContents, Content } from 'utils/contents'

export interface Project extends Content {
  image: string
  url: string
}

export interface ProjectMap {
  project: Project
  next?: Project
  prev?: Project
}

export function loadProjects() {
  const projectsContent = loadContents('project')
  const projects: Project[] = projectsContent.map(content => ({
    ...content,
    image: content.data.image,
    url: content.data.url,
  }))
  return projects
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
