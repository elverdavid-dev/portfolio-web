import type { ImageMetadata } from "astro"
import NextjsLogo from '@/assets/icons/logos/next.svg'
import AstrojsLogo from '@/assets/icons/logos/astro.svg'
import ReactjsLogo from '@/assets/icons/logos/react.svg'
import TailwindLogo from '@/assets/icons/logos/tailwind.svg'
import TypescriptLogo from '@/assets/icons/logos/typescript.svg'
import NestjsLogo from '@/assets/icons/logos/nestjs.svg'
import NodejsLogo from '@/assets/icons/logos/node.svg'
import JavascriptLogo from '@/assets/icons/logos/js.svg'
import CssLogo from '@/assets/icons/logos/css.svg'
import HtmlLogo from '@/assets/icons/logos/html.svg'
import MongodbLogo from '@/assets/icons/logos/mongodb.svg'
import GitLogo from '@/assets/icons/logos/git.svg'
interface Technologies {
  name: string
  logo: ImageMetadata
}

export const technologies: Technologies[] = [
  {
    name: "Next js",
    logo: NextjsLogo,
  },
  {
    name: 'Nest js',
    logo: NestjsLogo,
  },
  {
    name: "Tailwind css",
    logo: TailwindLogo
  },
  {
    name: 'Typescript',
    logo: TypescriptLogo,
  },
  {
    name: "Astro js",
    logo: AstrojsLogo
  },
  {
    name: "React js",
    logo: ReactjsLogo
  },


  /*   {
      name: 'Node js',
      logo: NodejsLogo,
    },
    {
      name: 'Git',
      logo: GitLogo,
    },
  
    {
      name: 'Javascript',
      logo: JavascriptLogo,
    }, */

]