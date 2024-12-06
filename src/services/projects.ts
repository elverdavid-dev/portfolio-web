import type { ImageMetadata } from 'astro'
import { productTags } from './project-tags'
export interface ProjectInterface {
  name: string
  description: string
  urlImage: string
  urlGithub?: string
  urlWeb?: string
  stack?: { name: string, icon: ImageMetadata }[]
}
const image_base_url = "https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images"


const { next, tailwind, typescript, nest } = productTags

export const ProjectData: ProjectInterface[] = [
  {
    name: 'Gamma movies',
    description:
      'Explora películas populares, próximas, mejor valoradas y en cartelera. Funcionalidades de búsqueda, paginación, detalles de películas y autenticación.',
    urlImage: `${image_base_url}/t9hzgeuzn2lvmeswvbxp`,
    urlGithub: "https://github.com/elverdavid-dev/page-gamma-movies",
    urlWeb: 'https://gamma-movies.vercel.app/',
    stack: [next, tailwind, typescript],
  },
  {
    name: 'GlobalFood',
    description:
      'Plataforma de recetas con búsqueda por nombre, tipo de comida o país de origen. Incluye ingredientes e instrucciones paso a paso.',
    urlImage:
      `${image_base_url}/enhone6togoeczjwslsk`,
    urlGithub: 'https://github.com/ElverDavid07/Project_Recipe_Page',
    urlWeb: 'https://project-recipe-page.vercel.app/',
    stack: [next, tailwind, typescript, nest],
  },


]