import { loadContents, Content } from 'utils/contents'

export interface Project extends Content {
  websiteUrl?: string
  testFlightUrl?: string
  appStoreUrl?: string
}

export interface ProjectMap {
  project: Project
  next?: Project
  prev?: Project
}

export function loadProjects() {
  const projectsContent = loadContents('project')
  const projects: Project[] = projectsContent.map(content => {
    const project: Project = {
      ...content,
    }

    if (content.data.websiteUrl) project.websiteUrl = content.data.websiteUrl
    if (content.data.testFlightUrl) project.testFlightUrl = content.data.testFlightUrl
    if (content.data.appStoreUrl) project.appStoreUrl = content.data.appStoreUrl

    return project
  })
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
