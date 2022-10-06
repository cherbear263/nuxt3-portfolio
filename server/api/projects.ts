import projects from '@//data/work.json'

export default defineEventHandler(event => {
  const {q = ''} = useQuery(event)
  return projects.filter((projects) => (projects.keywords.toString().toLowerCase().includes((q as string).toLowerCase())) || projects.features.toString().toLowerCase().includes((q as string).toLowerCase()))
})